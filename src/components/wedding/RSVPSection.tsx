import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {toast} from '@/hooks/use-toast';
import {Check, Send, X} from 'lucide-react';

const RSVPSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        attending: null as boolean | null,
        guests: '1',
        dietary: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.attending === null) {
            toast({
                title: 'Erreur',
                description: 'Veuillez indiquer si vous serez présent(e).',
                variant: 'destructive'
            });
            return;
        }

        try {
            await fetch('https://api.sheetbest.com/sheets/69be4d33-939c-4923-90d5-3cd46322bd41', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    attending: formData.attending ? 'Oui' : 'Non',
                    guests: formData.guests,
                    dietary: formData.dietary,
                    message: formData.message,
                    date: new Date().toLocaleString()
                })
            });

            toast({
                title: 'Merci !',
                description: formData.attending
                    ? 'Nous avons hâte de vous voir !'
                    : 'Merci pour votre réponse ❤️'
            });

            // reset
            setFormData({
                name: '',
                email: '',
                attending: null,
                guests: '1',
                dietary: '',
                message: ''
            });

        } catch (error) {
            toast({
                title: 'Erreur',
                description: 'Une erreur est survenue, réessayez.',
                variant: 'destructive'
            });
        }
    };
    return (
        <section className="section-wedding bg-cream-dark">
            <div className="max-w-2xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
                        Confirmez votre présence
                    </p>
                    <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
                        RSVP
                    </h2>
                    <p className="font-serif text-muted-foreground italic mb-6">
                        Merci de nous confirmer votre présence avant le 1er Août 2026
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <span
                            className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"/>
                        <span className="font-script text-xl text-gold">✿</span>
                        <span
                            className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"/>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Attending Toggle */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            type="button"
                            onClick={() => setFormData({...formData, attending: true})}
                            className={`flex items-center gap-2 px-6 py-3 rounded-md font-sans text-sm tracking-wide transition-all duration-300 ${
                                formData.attending === true
                                    ? 'bg-primary text-primary-foreground shadow-soft'
                                    : 'bg-card border border-primary/30 text-primary hover:bg-primary/10'
                            }`}
                        >
                            <Check className="w-4 h-4"/>
                            Je serai présent(e)
                        </button>
                        <button
                            type="button"
                            onClick={() => setFormData({...formData, attending: false})}
                            className={`flex items-center gap-2 px-6 py-3 rounded-md font-sans text-sm tracking-wide transition-all duration-300 ${
                                formData.attending === false
                                    ? 'bg-destructive text-destructive-foreground shadow-soft'
                                    : 'bg-card border border-primary/30 text-primary hover:bg-primary/10'
                            }`}
                        >
                            <X className="w-4 h-4"/>
                            Je ne pourrai pas venir
                        </button>
                    </div>

                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label
                                className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2 block">
                                Nom complet *
                            </label>
                            <Input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                                className="bg-card border-primary/30 focus:border-primary"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div>
                            <label
                                className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2 block">
                                Email *
                            </label>
                            <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                                className="bg-card border-primary/30 focus:border-primary"
                                placeholder="votre@email.com"
                            />
                        </div>
                    </div>

                    {/* Guests */}
                    {formData.attending && (
                        <div>
                            <label
                                className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2 block">
                                Nombre d'invités
                            </label>
                            <select
                                value={formData.guests}
                                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                                className="w-full p-3 bg-card border border-primary/30 rounded-md font-sans text-sm focus:border-primary focus:outline-none"
                            >
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>
                                        {num} {num === 1 ? 'personne' : 'personnes'}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Dietary Requirements */}
                    {formData.attending && (
                        <div>
                            <label
                                className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2 block">
                                Restrictions alimentaires
                            </label>
                            <Input
                                type="text"
                                value={formData.dietary}
                                onChange={(e) => setFormData({...formData, dietary: e.target.value})}
                                className="bg-card border-primary/30 focus:border-primary"
                                placeholder="Végétarien, allergies, etc."
                            />
                        </div>
                    )}

                    {/* Message */}
                    <div>
                        <label className="font-sans text-xs tracking-wide uppercase text-muted-foreground mb-2 block">
                            Un petit mot pour les mariés
                        </label>
                        <Textarea
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="bg-card border-primary/30 focus:border-primary min-h-[100px]"
                            placeholder="Félicitations, conseils, ou simplement un message d'amour..."
                        />
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 font-sans tracking-wide"
                    >
                        <Send className="w-4 h-4 mr-2"/>
                        Envoyer ma réponse
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default RSVPSection;

import {Camera, Church, Clock, MapPin, UtensilsCrossed} from 'lucide-react';

const receptionSteps = [
    {
        time: '18:00',
        title: 'Accueil des invités',
        description:
            'Buffet d’amuse-bouches et rafraîchissements pour débuter la réception dans une ambiance conviviale.'
    },
    {
        time: '19:00',
        title: 'Entrée des mariés',
        description:
            'Un moment symbolique pour célébrer notre arrivée et ouvrir officiellement la soirée.'
    },
    {
        time: '20:00',
        title: 'Dîner de mariage',
        description:
            'Un repas chaleureux pensé pour partager un moment gourmand, élégant et festif.'
    },
    {
        time: '22:00',
        title: 'Dessert & douceurs',
        description:
            'Le moment sucré de la soirée avec le dessert des mariés et quelques gourmandises.'
    },
    {
        time: '23:30',
        title: 'Fin de la réception',
        description:
            'La soirée touchera doucement à sa fin, avec le cœur rempli de souvenirs.'
    }
];

const EventsSection = () => {
    return (
        <section className="section-wedding bg-background">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
                        Programme
                    </p>

                    <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
                        Déroulement de la Journée
                    </h2>

                    <div className="flex items-center justify-center gap-3">
                        <span
                            className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"/>
                        <span className="font-script text-xl text-gold">✿</span>
                        <span
                            className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"/>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">

                    {/* CEREMONIE */}
                    <div className="bg-card p-8 md:p-10 rounded-lg shadow-elegant border border-border/50">
                        <div
                            className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Church className="w-8 h-8 text-primary"/>
                        </div>

                        <h3 className="font-script text-3xl text-primary text-center mb-4">
                            Cérémonie civile
                        </h3>

                        <div className="flex items-center justify-center gap-2 text-gold mb-4">
                            <Clock className="w-4 h-4"/>
                            <span className="font-sans text-lg">14:00</span>
                        </div>

                        <div className="text-center mb-4">
                            <p className="font-serif text-xl text-foreground mb-1">
                                Mairie de Choisy-le-Roi
                            </p>

                            <div className="flex items-start justify-center gap-1 text-muted-foreground text-center">
                                <MapPin className="w-3 h-3 shrink-0 mt-[2px]"/>
                                <p className="font-sans text-xs leading-snug">
                                    Pl. Gabriel Péri, 94600 Choisy-le-Roi
                                </p>
                            </div>
                        </div>

                        <p className="font-serif text-muted-foreground text-center italic">
                            Nous aurons la joie de nous unir civilement entourés de nos
                            proches, lors d’un moment simple, intime et rempli d’émotion.
                        </p>

                        <button
                            onClick={() =>
                                window.open(
                                    'https://maps.app.goo.gl/tb24wXF1dRG33Ziq9',
                                    '_blank'
                                )
                            }
                            className="mt-6 w-full py-3 border border-primary/30 rounded-md font-sans text-sm tracking-wide text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                            Voir sur la carte
                        </button>
                    </div>

                    {/* PHOTOS */}
                    <div className="bg-card p-8 md:p-10 rounded-lg shadow-elegant border border-border/50">
                        <div
                            className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Camera className="w-8 h-8 text-primary"/>
                        </div>

                        <h3 className="font-script text-3xl text-primary text-center mb-4">
                            Photos avec nos proches
                        </h3>

                        <div className="flex items-center justify-center gap-2 text-gold mb-4">
                            <Clock className="w-4 h-4"/>
                            <span className="font-sans text-lg">14:30</span>
                        </div>

                        <div className="text-center mb-4">
                            <p className="font-serif text-xl text-foreground mb-1">
                                Parc de Sceaux
                            </p>

                            <div className="flex items-start justify-center gap-1 text-muted-foreground text-center">
                                <MapPin className="w-3 h-3 shrink-0 mt-[2px]"/>
                                <p className="font-sans text-xs leading-snug">
                                    8 Avenue Claude Perrault, 92330 Sceaux
                                </p>
                            </div>
                        </div>

                        <p className="font-serif text-muted-foreground text-center italic">
                            Après la cérémonie, nous partagerons un moment dédié aux photos
                            de famille et aux souvenirs avec nos proches dans un cadre élégant
                            et verdoyant.
                        </p>

                        <button
                            onClick={() =>
                                window.open(
                                    'https://maps.app.goo.gl/JD13nxKfSmhjRhgi6',
                                    '_blank'
                                )
                            }
                            className="mt-6 w-full py-3 border border-primary/30 rounded-md font-sans text-sm tracking-wide text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                            Voir sur la carte
                        </button>
                    </div>

                    {/* RECEPTION */}
                    <div
                        className="md:col-span-2 bg-card p-8 md:p-10 rounded-lg shadow-elegant border border-border/50">
                        <div
                            className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <UtensilsCrossed className="w-8 h-8 text-primary"/>
                        </div>

                        <h3 className="font-script text-4xl text-primary text-center mb-4">
                            Réception au Restaurant Taguella
                        </h3>

                        <div className="text-center mb-10">
                            <p className="font-serif text-xl text-foreground mb-2">
                                Restaurant Taguella
                            </p>

                            <div className="flex items-start justify-center gap-1 text-muted-foreground text-center">
                                <MapPin className="w-3 h-3 shrink-0 mt-[2px]"/>
                                <p className="font-sans text-xs leading-snug">
                                    145-147 Rue Ordener, 75018 Paris
                                </p>
                            </div>
                        </div>

                        {/* TIMELINE */}
                        <div className="relative max-w-3xl mx-auto mb-8">
                            <div className="absolute left-4 top-2 bottom-2 w-px bg-primary/20"/>

                            <div className="space-y-8">
                                {receptionSteps.map((step) => (
                                    <div key={step.time} className="relative pl-12">
                                        <div
                                            className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold shadow-soft">
                                            •
                                        </div>

                                        <div className="flex items-baseline gap-2 mb-2">
                                           <span className="font-serif text-xl text-foreground text-[#7C3341]">
                                             {step.time}
                                           </span>
                                            <span className="text-[#7C3341]">✦</span>
                                            <h4 className="font-serif text-l text-foreground text-[#7C3341]">
                                                {step.title}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() =>
                                window.open(
                                    'https://maps.app.goo.gl/4VQwP11UYgczeDHF9',
                                    '_blank'
                                )
                            }
                            className="w-full md:w-auto mx-auto block px-8 py-3 border border-primary/30 rounded-md font-sans text-sm tracking-wide text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                            Voir le lieu de réception
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventsSection;
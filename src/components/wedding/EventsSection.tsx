import {Cake, Camera, Church, Clock, Heart, MapPin, Sparkles, UtensilsCrossed} from 'lucide-react';

const EventsSection = () => {
    const events = [
        {
            icon: Church,
            title: 'Cérémonie civile',
            time: '14:00',
            location: 'Mairie de Choisy-le-Roi',
            address: 'Pl. Gabriel Péri, 94600 Choisy-le-Roi',
            mapAddress: 'https://maps.app.goo.gl/tb24wXF1dRG33Ziq9',
            description:
                'Nous aurons la joie de nous unir civilement entourés de nos proches, lors d’un moment simple, intime et rempli d’émotion.'
        },
        {
            icon: Camera,
            title: 'Photos avec nos proches',
            time: '14:30',
            location: 'Parc de Sceaux',
            address: '8 Avenue Claude Perrault, 92330 Sceaux',
            mapAddress: 'https://maps.app.goo.gl/JD13nxKfSmhjRhgi6',
            description:
                'Après la cérémonie, nous partagerons un temps dédié aux photos de famille et aux souvenirs avec nos amis, dans un cadre élégant et verdoyant.'
        },
        {
            icon: UtensilsCrossed,
            title: 'Accueil des invités',
            time: '18:00',
            location: 'Restaurant Taguella',
            address: '145-147 Rue Ordener, 75018 Paris',
            mapAddress: 'https://maps.app.goo.gl/4VQwP11UYgczeDHF9',
            description:
                'Nous vous accueillerons autour d’un buffet d’amuse-bouches et de rafraîchissements pour commencer la réception dans une ambiance conviviale.'
        },
        {
            icon: Heart,
            title: 'Entrée des mariés',
            time: '19:00',
            location: 'Restaurant Taguella',
            address: '145-147 Rue Ordener, 75018 Paris',
            mapAddress: 'https://maps.app.goo.gl/4VQwP11UYgczeDHF9',
            description:
                'Un moment symbolique pour célébrer notre arrivée et ouvrir officiellement la soirée auprès de toutes les personnes qui nous sont chères.'
        },
        {
            icon: UtensilsCrossed,
            title: 'Dîner de mariage',
            time: '20:00',
            location: 'Restaurant Taguella',
            address: '145-147 Rue Ordener, 75018 Paris',
            mapAddress: 'https://maps.app.goo.gl/4VQwP11UYgczeDHF9',
            description:
                'Nous poursuivrons la soirée autour d’un dîner chaleureux, pensé pour partager un moment gourmand, élégant et festif.'
        },
        {
            icon: Cake,
            title: 'Dessert & douceurs',
            time: '22:00',
            location: 'Restaurant Taguella',
            address: '145-147 Rue Ordener, 75018 Paris',
            mapAddress: 'https://maps.app.goo.gl/4VQwP11UYgczeDHF9',
            description:
                'Place à une touche sucrée pour clôturer le repas, avec le dessert des mariés et quelques douceurs à partager ensemble.'
        },
        {
            icon: Sparkles,
            title: 'Fin de la réception',
            time: '23:30',
            location: 'Restaurant Taguella',
            address: '145-147 Rue Ordener, 75018 Paris',
            mapAddress: 'https://maps.app.goo.gl/4VQwP11UYgczeDHF9',
            description:
                'La soirée touchera doucement à sa fin, avec le cœur rempli de souvenirs et de gratitude pour votre présence à nos côtés.'
        }
    ];

    return (
        <section className="section-wedding bg-background">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-16">
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">Programme</p>
                    <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">Déroulement de la Journée</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {events.map((event) => (
                        <div key={event.title}
                             className="bg-card p-8 md:p-10 rounded-lg shadow-elegant border border-border/50">

                            <div
                                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <event.icon className="w-8 h-8 text-primary"/>
                            </div>

                            <h3 className="font-script text-3xl text-primary text-center mb-4">
                                {event.title}
                            </h3>

                            <div className="flex items-center justify-center gap-2 text-gold mb-4">
                                <Clock className="w-4 h-4"/>
                                <span className="font-sans text-lg">{event.time}</span>
                            </div>

                            <div className="text-center mb-4">
                                <p className="font-serif text-xl text-foreground mb-1">
                                    {event.location}
                                </p>

                                {/* FIX ICON ALIGN CENTER WHEN WRAPPED */}
                                <div
                                    className="flex items-start justify-center gap-1 text-muted-foreground text-center">
                                    <MapPin className="w-3 h-3 shrink-0 mt-[2px]"/>
                                    <p className="font-sans text-xs leading-snug">
                                        {event.address}
                                    </p>
                                </div>
                            </div>

                            <p className="font-serif text-muted-foreground text-center italic">
                                {event.description}
                            </p>

                            {/* MAP REDIRECT */}
                            <button
                                onClick={() => window.open(event.mapAddress, '_blank')}
                                className="mt-6 w-full py-3 border border-primary/30 rounded-md font-sans text-sm tracking-wide text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                                Voir sur la carte
                            </button>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;

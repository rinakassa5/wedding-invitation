import {Camera, Shirt} from 'lucide-react';

const InfoSection = () => {
    const dressColors = [
        {name: 'Olive profond', hex: '#5D5C00'},
        {name: 'Champagne olive', hex: '#B6B27C'},
        {name: 'Champagne', hex: '#DCC8B0'},
        {name: 'Marron chocolat', hex: '#5A4032'},
        {name: 'Bordeaux', hex: '#44121B'},
        {name: 'Blush pink', hex: '#C7A3A8'}
    ];
    const photoUrl = 'https://wedshoots.com/fr?albumId=FR708663b4';
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(photoUrl)}`;

    return (
        <section className="section-wedding bg-background">
            <div className="mx-auto max-w-5xl">

                <div className="mb-16 text-center">
                    <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-accent">
                        Informations pratiques
                    </p>
                    <h2 className="mb-6 font-script text-4xl text-primary md:text-5xl">
                        Les petits détails du jour J
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">

                    {/* UPDATED DRESS CODE */}
                    <div className="group rounded-2xl border border-[#B6B27C]/35 bg-card p-7 shadow-soft">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#B6B27C]/15">
                            <Shirt className="h-6 w-6 text-[#5A1924]"/>
                        </div>

                        <h3 className="mb-3 font-serif text-2xl text-primary">Dress code</h3>

                        <p className="mb-4 font-sans text-sm text-muted-foreground">
                            Dans une harmonie inspirée de notre thème — mêlant des nuances d’olive profond, de
                            champagne, de marron chocolat, de bordeaux et une touche délicate de blush — ces couleurs
                            sont réservées à nos superbes demoiselles d’honneur ✨
                        </p>
                        <p className="mb-5 font-sans text-sm text-muted-foreground">
                            Pour nos invités, aucune pression : laissez parler votre style !
                            Si l’envie vous prend de vous accorder au thème, ce sera avec grand plaisir… sinon, venez
                            comme vous êtes — l’essentiel est que vous soyez là 💛
                        </p>
                        <p className="mb-5 font-sans text-sm text-muted-foreground">
                            Pour les hommes, un costume sobre, de préférence noir, est recommandé (sans obligation bien
                            sûr) pour un rendu élégant sur les photos… mais promis, on dira rien si vous faites les
                            rebelles
                        </p>

                        <div className="mb-5 grid grid-cols-3 gap-3">
                            {dressColors.map((color) => (
                                <div key={color.hex} className="flex flex-col items-center gap-2">
                                    <div
                                        className="h-12 w-12 rounded-full border border-white/70 shadow-md"
                                        style={{backgroundColor: color.hex}}
                                    />
                                    <span className="text-center font-sans text-[10px] text-muted-foreground">
                    {color.name}
                  </span>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-xl bg-[#44121B]/5 p-4">
                            <p className="font-sans text-xs text-[#44121B]/75">
                                Merci d’éviter le blanc, réservé à la mariée.
                            </p>
                        </div>
                    </div>

                    {/* PHOTOS */}
                    <div className="group rounded-2xl border border-[#B6B27C]/35 bg-card p-7 shadow-soft">

                        {/* ICON */}
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#B6B27C]/15">
                            <Camera className="h-6 w-6 text-[#5A1924]"/>
                        </div>

                        {/* TITLE */}
                        <h3 className="mb-3 font-serif text-2xl text-primary">
                            Partagez vos photos
                        </h3>

                        {/* INTRO */}
                        <p className="mb-5 font-sans text-sm text-muted-foreground">
                            Un photographe sera présent, mais vos souvenirs comptent tout autant 💛
                            Ajoutez vos photos et vidéos du mariage en quelques secondes dans notre galerie privée.
                        </p>

                        {/* QR + LINK */}
                        <div
                            className="flex flex-col items-center rounded-2xl border border-[#B6B27C]/30 bg-[#F4F0E5]/70 p-5 mb-5">

                            {/* QR CODE */}
                            <a
                                href="https://photos.app.goo.gl/iuxpwTmYth2qjXnr6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                                        'https://photos.app.goo.gl/iuxpwTmYth2qjXnr6'
                                    )}`}
                                    alt="QR code partage photos"
                                    className="h-36 w-36 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                            </a>

                            {/* TEXT */}
                            <p className="mt-4 text-center font-sans text-xs uppercase tracking-[0.22em] text-[#5D5C00]">
                                Scannez ou cliquez
                            </p>

                            <p className="text-center font-sans text-xs leading-relaxed text-muted-foreground mt-2">
                                Scannez le QR code ou cliquez dessus pour accéder directement à la galerie
                                et partager vos photos 📸
                            </p>

                        </div>

                        {/* FOOTER */}
                        <p className="text-center font-serif text-lg italic text-[#7C3341]">
                            Merci de nous aider à revivre cette journée à travers vos yeux
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;

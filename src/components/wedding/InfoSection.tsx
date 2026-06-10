import { Camera, Shirt } from "lucide-react";
import qrPhotos from "@/assets/qr-photos.png";

const InfoSection = () => {
  const dressColors = [
    {
      name: "Olive profond",
      hex: "#5D5C00",
    },
    {
      name: "Champagne olive",
      hex: "#B6B27C",
    },
    {
      name: "Doré olive",
      hex: "#B5B063",
    },
    {
      name: "Bordeaux",
      hex: "#5A1924",
    },
    {
      name: "Vieux rose bordeaux",
      hex: "#7C3341",
    },
    {
      name: "Bordeaux profond",
      hex: "#44121B",
    },
  ];

  return (
    <section className="section-wedding bg-background">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-accent">
            Informations pratiques
          </p>

          <h2 className="mb-6 font-script text-4xl text-primary md:text-5xl">
            Les petits détails du jour J
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-primary/40 to-transparent md:w-20" />
            <span className="font-script text-xl text-gold">✦</span>
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-primary/40 to-transparent md:w-20" />
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Dress Code Card */}
          <div className="group rounded-2xl border border-[#B6B27C]/35 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#B6B27C]/15 transition-colors group-hover:bg-[#B6B27C]/25">
              <Shirt className="h-6 w-6 text-[#5A1924]" />
            </div>

            <h3 className="mb-3 font-serif text-2xl text-primary">
              Dress code
            </h3>

            <p className="mb-5 font-sans text-sm leading-relaxed text-muted-foreground">
              Pour une harmonie élégante sur les photos, nous vous invitons à
              privilégier des tenues dans les tons de notre thème : olive,
              champagne doré, bordeaux et nuances profondes.
            </p>

            <div className="mb-5 grid grid-cols-3 gap-3">
              {dressColors.map((color) => (
                <div key={color.hex} className="flex flex-col items-center gap-2">
                  <div
                    className="h-12 w-12 rounded-full border border-white/70 shadow-md"
                    style={{
                      backgroundColor: color.hex,
                    }}
                  />
                  <span className="text-center font-sans text-[10px] leading-tight text-muted-foreground">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#44121B]/5 p-4">
              <p className="font-sans text-xs leading-relaxed text-[#44121B]/75">
                Merci d’éviter le blanc, réservé à la mariée. Les touches dorées,
                satinées ou texturées sont les bienvenues pour un rendu chic et
                festif.
              </p>
            </div>
          </div>

          {/* Photos Card */}
          <div className="group rounded-2xl border border-[#B6B27C]/35 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#B6B27C]/15 transition-colors group-hover:bg-[#B6B27C]/25">
              <Camera className="h-6 w-6 text-[#5A1924]" />
            </div>

            <h3 className="mb-3 font-serif text-2xl text-primary">
              Partagez vos photos
            </h3>

            <p className="mb-5 font-sans text-sm leading-relaxed text-muted-foreground">
              Un photographe sera présent, mais vos regards et vos souvenirs
              comptent tout autant. Scannez le QR code pour déposer vos photos
              et vidéos du mariage dans notre galerie privée.
            </p>

            <div className="flex flex-col items-center rounded-2xl border border-[#B6B27C]/30 bg-[#F4F0E5]/70 p-5">
              <div className="mb-4 rounded-xl bg-white p-3 shadow-soft">
                <img
                  src={qrPhotos}
                  alt="QR code pour partager les photos du mariage"
                  className="h-36 w-36 object-contain"
                />
              </div>

              <p className="mb-2 text-center font-sans text-xs uppercase tracking-[0.22em] text-[#5D5C00]">
                Scannez & partagez
              </p>

              <p className="text-center font-sans text-xs leading-relaxed text-muted-foreground">
                Aucune application à installer : ouvrez l’appareil photo,
                scannez le QR code et ajoutez vos plus beaux souvenirs.
              </p>
            </div>

            <p className="mt-5 text-center font-serif text-lg italic text-[#7C3341]">
              Merci de nous aider à revivre cette journée à travers vos yeux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
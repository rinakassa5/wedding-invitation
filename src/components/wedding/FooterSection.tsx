import { Heart, Mail, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="section-wedding bg-sage text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        {/* Names */}
        <h2 className="font-script text-5xl md:text-6xl mb-4">Rina & Islem</h2>

        {/* Date */}
        <p className="font-serif text-xl italic opacity-90 mb-8">
          3 Octobre 2026 • Paris
        </p>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-16 h-px bg-primary-foreground/30" />
          <Heart className="w-5 h-5 text-gold-light fill-gold-light" />
          <span className="w-16 h-px bg-primary-foreground/30" />
        </div>

        {/* Contact */}
        <p className="font-sans text-sm opacity-80 mb-4">
          Des questions ? Contactez-nous
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
          <a
            href="mailto:rina.islem2026@gmail.com"
            className="flex items-center gap-2 font-sans text-sm hover:text-gold-light transition-colors"
          >
            <Mail className="w-4 h-4" />
            rina.islem2026@gmail.com
          </a>
          <a
            href="tel:+34600000000"
            className="flex items-center gap-2 font-sans text-sm hover:text-gold-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            +33 626 604 527
          </a>
        </div>

        {/* Quote */}
        <blockquote className="font-serif text-lg italic opacity-90 mb-8">
          "L'amour ne vieillit pas, il grandit avec le temps"
        </blockquote>

        {/* Decorative Flourish */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-px bg-primary-foreground/20" />
          <span className="font-script text-lg opacity-60">✿</span>
          <span className="w-8 h-px bg-primary-foreground/20" />
        </div>

        {/* Copyright */}
        <p className="font-sans text-xs opacity-60">
          Créé avec amour pour notre grand jour
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

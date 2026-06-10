import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import envelopeImage from "/src/assets/enveloppe-nude.jpg";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

const EnvelopeIntro = ({ onOpen }: EnvelopeIntroProps) => {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleOpen = () => {
    if (isLeaving) return;

    setIsLeaving(true);

    setTimeout(() => {
      onOpen();
    }, 400);
  };

  return (
    <AnimatePresence>
      {!isLeaving && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#eee6d2]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative h-full w-full max-w-[675px] overflow-hidden">
            {/* IMAGE */}
            <img
              src={envelopeImage}
              alt="Enveloppe de faire-part"
              className="h-full w-full object-cover"
              draggable={false}
            />

            {/* ZONE CLIQUABLE SUR LE SCEAU */}
            <button
              type="button"
              onClick={handleOpen}
              aria-label="Ouvrir le faire-part"
              className="
                absolute
                left-1/2
                top-[50%]
                h-[25vw]
                max-h-[190px]
                min-h-[120px]
                w-[25vw]
                max-w-[190px]
                min-w-[120px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-transparent
                outline-none
                cursor-pointer
              "
            />

            {/* TEXTE OPTIONNEL */}
            <p
              className="
                absolute
                left-1/2
                bottom-12
                -translate-x-1/2
                whitespace-nowrap
                text-[10px]
                uppercase
                tracking-[0.32em]
                text-[#8a6a3e]/60
              "
            >
              Cliquez sur le sceau
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeIntro;
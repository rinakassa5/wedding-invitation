import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EnvelopeIntro from "@/components/wedding/EnvelopeIntro";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import EventsSection from "@/components/wedding/EventsSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import InfoSection from "@/components/wedding/InfoSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  const [showEnvelope, setShowEnvelope] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showEnvelope && (
          <motion.div
            key="envelope"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EnvelopeIntro onOpen={() => setShowEnvelope(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        className="min-h-screen w-full bg-background overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: showEnvelope ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <HeroSection />
        <CountdownSection />
        <EventsSection />
        <RSVPSection />
        <InfoSection />
        <FooterSection />
      </motion.main>
    </>
  );
};

export default Index;

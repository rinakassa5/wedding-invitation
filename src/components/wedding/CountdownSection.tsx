import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-10-03T17:00:00");

    const calculateTimeLeft = () => {
      const difference = weddingDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Jours" },
    { value: timeLeft.hours, label: "Heures" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Secondes" },
  ];

  return (
    <section className="section-wedding bg-cream-dark">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
          Compte à rebours
        </p>
        <h2 className="font-script text-4xl md:text-5xl text-primary mb-12">
          Le Grand Jour Approche
        </h2>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="bg-card p-6 md:p-8 rounded-lg shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="font-serif text-4xl md:text-6xl text-primary block mb-2">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <span className="font-script text-2xl text-gold">03.10.26</span>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;

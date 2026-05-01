import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CalendarCheck, Clock, Star, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    number: "01",
    title: "You Join a Community Table",
    description:
      "This is not booking a table for two — you join a shared long table with fellow food lovers. Strangers become stories.",
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Pre-Booking Required",
    description:
      "Every seat is reserved in advance. We prepare precisely for each guest — no walk-ins, no compromises on quality.",
  },
  {
    icon: Clock,
    number: "03",
    title: "Limited Seats Always",
    description:
      "A maximum of 12–16 guests per event. This is intentional. Intimacy and attention are the foundations of the experience.",
  },
  {
    icon: Star,
    number: "04",
    title: "A Curated Journey",
    description:
      "Each event has a theme — a region, a season, a tradition. The menu, the stories, and the setting are all crafted with intention.",
  },
];

export function ExperienceSection() {
  const titleRef = useScrollAnimation();

  return (
    <section
      id="experience"
      data-ocid="experience.section"
      className="bg-muted/30 py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
            How It Works
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-bold leading-tight mb-6">
            The SADHYA
            <br />
            <span className="italic font-light">Experience</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A supper club unlike any you've attended. Every detail is curated,
            every seat is earned.
          </p>
          <div className="gold-divider max-w-xs mx-auto mt-8" />
        </div>

        {/* Feature grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          data-ocid="experience.features_list"
        >
          {features.map(({ icon: Icon, number, title, description }, index) => (
            <div
              key={number}
              data-ocid={`experience.feature.${index + 1}`}
              className="group bg-card border border-border rounded-lg p-8 shadow-warm-sm hover:shadow-warm-md transition-smooth hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Background number */}
              <div className="absolute top-4 right-4 font-display text-5xl font-black text-accent/8 leading-none select-none pointer-events-none">
                {number}
              </div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-smooth">
                <Icon size={22} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug">
                {title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <div className="gold-divider max-w-sm mx-auto mb-8" />
          <p className="font-display text-xl sm:text-2xl italic text-foreground/90">
            "Not every meal deserves a banana leaf.{" "}
            <br className="hidden sm:block" />
            <span className="text-foreground">This one does."</span>
          </p>
        </div>
      </div>
    </section>
  );
}

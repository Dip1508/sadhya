import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, Leaf, Sprout } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Regional Kerala Menus",
    description:
      "Each gathering celebrates a distinct region of Kerala — from the backwaters of Alleppey to the spice hills of Wayanad. Every menu is a journey.",
  },
  {
    icon: Sprout,
    title: "Seasonal Ingredients",
    description:
      "Sourced from small Kerala farms and trusted vendors. We cook with what the season offers — nothing more, nothing less.",
  },
  {
    icon: BookOpen,
    title: "Cultural Storytelling",
    description:
      "Meals come with stories. The history of Sadya, the significance of each dish, the people who grew it — food as living culture.",
  },
];

export function AboutSection() {
  const titleRef = useScrollAnimation();
  const imageRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="bg-background py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-bold leading-tight mb-6">
            A Cultural
            <br />
            <span className="italic font-light">Culinary Journey</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="section-reveal">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-warm-lg">
                <img
                  src="/assets/generated/sadhya-dining.dim_1200x800.jpg"
                  alt="Guests enjoying a Kerala sadhya feast at a communal table"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gold accent corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent/30 rounded-br-lg" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-accent/30 rounded-tl-lg" />
              {/* Badge */}
              <div className="absolute top-6 -right-6 bg-card shadow-warm-lg rounded-md px-4 py-3 hidden lg:block">
                <p className="font-display text-2xl font-bold text-accent leading-none">
                  12
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  Seats Only
                </p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div ref={contentRef} className="section-reveal space-y-8">
            <p className="font-body text-lg sm:text-xl leading-relaxed text-foreground/80">
              SADHYA is an intimate dining experience with a curated menu,
              shared seating & conversations that flow as naturally as the
              coconut toddy.
            </p>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              Born from a love of Kerala's extraordinary food culture, we gather
              people around a banana leaf to share not just a meal, but a moment
              in time. Every event is different. Every menu is a discovery.
            </p>

            <div className="gold-divider" />

            <div className="space-y-6">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-5"
                  data-ocid={`about.highlight_${title.split(" ")[0].toLowerCase()}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">
                      {title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

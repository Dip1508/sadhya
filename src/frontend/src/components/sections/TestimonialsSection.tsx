import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote:
      "I've eaten at Michelin-starred restaurants across three continents. Nothing prepared me for the intimacy and warmth of the Sadhya table. It wasn't just dinner — it was a memory.",
    name: "Ananya Krishnaswamy",
    title: "Food writer, Mumbai",
    initials: "AK",
  },
  {
    quote:
      "The avial alone was worth the trip from Bangalore. But it was the story behind the meal — the farmer who grew the coconuts, the region the menu honoured — that stayed with me.",
    name: "Rohan Menon",
    title: "Architect & food enthusiast",
    initials: "RM",
  },
  {
    quote:
      "I brought my mother to the last event. She grew up in Thrissur and hadn't tasted food like this in thirty years. She wept. I wept. The whole table felt it.",
    name: "Priya Subramaniam",
    title: "Software engineer, Pune",
    initials: "PS",
  },
];

export function TestimonialsSection() {
  const titleRef = useScrollAnimation();

  return (
    <section
      id="testimonials"
      data-ocid="testimonials.section"
      className="bg-primary text-primary-foreground py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 border border-accent/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-accent/30 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Voices from the Table
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
            What Our <br />
            <span className="italic font-light text-accent">Guests Say</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto opacity-60" />
        </div>

        {/* Testimonials */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-ocid="testimonials.list"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-ocid={`testimonials.item.${index + 1}`}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 shadow-warm-md hover:bg-primary-foreground/10 transition-smooth flex flex-col gap-6"
            >
              {/* Quote mark */}
              <div className="font-display text-5xl text-accent/70 leading-none select-none">
                "
              </div>
              <p className="font-body text-base leading-relaxed text-primary-foreground italic flex-1">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-primary-foreground/20">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-accent">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-primary-foreground/80">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

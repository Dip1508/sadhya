import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const dishes = [
  {
    name: "Parippu Curry",
    description:
      "Slow-cooked lentils tempered with ghee, mustard seeds & dried red chilli. The soul of every Sadhya.",
    category: "Rice & Curry",
    tag: "Classic",
  },
  {
    name: "Avial",
    description:
      "Mixed vegetables in a thick coconut-curd gravy, finished with fragrant curry leaves and coconut oil.",
    category: "Vegetable",
    tag: "Heritage",
  },
  {
    name: "Sambar",
    description:
      "Tamarind-laced lentil broth with pearl onions and drumstick. The second pour after parippu.",
    category: "Rice & Curry",
    tag: "Classic",
  },
  {
    name: "Thoran",
    description:
      "Finely chopped seasonal vegetables stir-fried with shredded coconut and turmeric.",
    category: "Dry Dish",
    tag: "Seasonal",
  },
  {
    name: "Olan",
    description:
      "White pumpkin and cowpeas in a delicate coconut milk broth — elegance in simplicity.",
    category: "Curry",
    tag: "Signature",
  },
  {
    name: "Payasam",
    description:
      "Palada payasam — rice flakes in sweetened milk, slow reduced to a dreamy richness.",
    category: "Dessert",
    tag: "Sweet",
  },
  {
    name: "Rasam",
    description:
      "Peppery, bright tomato rasam — the digestive finale, poured warm over rice.",
    category: "Rasam",
    tag: "Classic",
  },
  {
    name: "Pappadom & Pickles",
    description:
      "Hand-rolled pappadom served with raw mango pickle and sweet lime pickle.",
    category: "Sides",
    tag: "Essential",
  },
];

const tagColors: Record<string, string> = {
  Classic: "bg-primary/10 text-primary border-primary/20",
  Heritage: "bg-secondary/20 text-secondary border-secondary/20",
  Seasonal: "bg-accent/10 text-accent border-accent/20",
  Signature: "bg-accent/20 text-accent border-accent/30",
  Sweet: "bg-muted text-muted-foreground border-border",
  Essential: "bg-muted text-muted-foreground border-border",
};

export function MenuSection() {
  const titleRef = useScrollAnimation();

  return (
    <section
      id="menu"
      data-ocid="menu.section"
      className="bg-background py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
            The Feast
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-bold leading-tight mb-6">
            A Sadhya on <br />
            <span className="italic font-light">Banana Leaf</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Twenty-eight dishes. One banana leaf. A meal that takes four hours
            to cook and twenty minutes to eat — if you're rushing. We don't
            rush.
          </p>
          <div className="gold-divider max-w-xs mx-auto mt-8" />
        </div>

        {/* Dishes grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-ocid="menu.dishes_list"
        >
          {dishes.map((dish, index) => (
            <div
              key={dish.name}
              data-ocid={`menu.dish.${index + 1}`}
              className="group bg-card border border-border rounded-lg p-6 shadow-warm-sm hover:shadow-warm-md transition-smooth hover:-translate-y-0.5 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-foreground leading-snug">
                  {dish.name}
                </h3>
                <span
                  className={`text-xs font-body px-2 py-0.5 rounded border flex-shrink-0 ${tagColors[dish.tag] ?? "bg-muted text-muted-foreground border-border"}`}
                >
                  {dish.tag}
                </span>
              </div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed flex-1">
                {dish.description}
              </p>
              <p className="font-body text-[10px] tracking-[0.1em] uppercase text-accent">
                {dish.category}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="font-body text-sm italic text-muted-foreground">
            Menu varies by event theme and season. Every item is prepared fresh
            on the day.
          </p>
        </div>
      </div>
    </section>
  );
}

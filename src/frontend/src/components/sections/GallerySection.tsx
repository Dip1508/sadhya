import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryImages = [
  {
    id: "feast",
    src: "/assets/generated/sadhya-hero.dim_1920x1080.jpg",
    alt: "Kerala Sadhya spread on banana leaf",
    span: "col-span-2 row-span-2",
  },
  {
    id: "dining",
    src: "/assets/generated/sadhya-dining.dim_1200x800.jpg",
    alt: "Guests dining at the communal table",
    span: "col-span-1 row-span-1",
  },
  {
    id: "lamp",
    src: "/assets/generated/sadhya-hero.dim_1920x1080.jpg",
    alt: "Traditional brass lamp and banana leaf",
    span: "col-span-1 row-span-1",
  },
  {
    id: "atmosphere",
    src: "/assets/generated/sadhya-dining.dim_1200x800.jpg",
    alt: "Intimate supper club atmosphere",
    span: "col-span-1 row-span-1",
  },
  {
    id: "spices",
    src: "/assets/generated/sadhya-hero.dim_1920x1080.jpg",
    alt: "Kerala spices and fresh coconut",
    span: "col-span-1 row-span-1",
  },
];

export function GallerySection() {
  const titleRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      className="bg-background py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Moments at the Table
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-bold leading-tight mb-6">
            The SADHYA <br />
            <span className="italic font-light">Gallery</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto" />
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="section-reveal grid grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 h-auto lg:h-[600px]"
          data-ocid="gallery.grid"
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              data-ocid={`gallery.image.${index + 1}`}
              className={`${image.span} relative overflow-hidden rounded-lg group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: index === 0 ? "320px" : "160px" }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-smooth flex items-end p-4">
                <p className="font-body text-sm text-card opacity-0 group-hover:opacity-100 transition-smooth translate-y-2 group-hover:translate-y-0">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-sm italic text-muted-foreground mt-8">
          Follow us on{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline transition-smooth"
          >
            @sadhya.kerala
          </a>{" "}
          for event highlights and behind-the-scenes moments.
        </p>
      </div>
    </section>
  );
}

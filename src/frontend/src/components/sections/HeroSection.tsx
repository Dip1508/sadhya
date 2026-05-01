import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const ctaRef = useScrollAnimation();

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/sadhya-hero.dim_1920x1080.jpg')",
        }}
      />
      {/* Deep overlay for text readability */}
      <div className="absolute inset-0 bg-primary/75" />
      {/* Ambient warm glow */}
      <div className="absolute inset-0 bg-banana-leaf-pattern opacity-40" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Decorative brass accent lines */}
      <div className="absolute top-1/3 left-8 lg:left-16 w-px h-24 bg-gradient-to-b from-transparent via-accent/40 to-transparent hidden md:block" />
      <div className="absolute top-1/3 right-8 lg:right-16 w-px h-24 bg-gradient-to-b from-transparent via-accent/40 to-transparent hidden md:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Pre-title */}
        <div ref={ctaRef} className="section-reveal">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-8 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-accent/60" />
            An Exclusive Dining Experience
            <span className="w-8 h-px bg-accent/60" />
          </p>

          {/* Main heading */}
          <h1
            data-ocid="hero.heading"
            className="font-display font-black tracking-[0.15em] text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] leading-none text-card mb-4"
          >
            SADHYA
          </h1>

          {/* Subheading */}
          <p className="font-body text-sm sm:text-base tracking-[0.25em] uppercase text-accent mb-6">
            The Kerala Table Supper Club
          </p>

          {/* Gold divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            <div className="w-24 h-px bg-accent/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </div>

          {/* Tagline */}
          <p className="font-body text-base sm:text-lg lg:text-xl italic text-card mb-12 leading-relaxed">
            It's not a restaurant. It's not catering.{" "}
            <br className="hidden sm:block" />
            <span className="text-card font-medium not-italic">
              It's an experience.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => handleScroll("#booking")}
              data-ocid="hero.join_table_button"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body tracking-[0.15em] text-sm uppercase px-10 py-6 shadow-warm-lg transition-smooth"
            >
              Join the Table
            </Button>
            <Button
              onClick={() => handleScroll("#about")}
              data-ocid="hero.discover_button"
              variant="outline"
              size="lg"
              className="border-card/60 text-card hover:bg-card/10 font-body tracking-[0.1em] text-sm uppercase px-10 py-6 transition-smooth"
            >
              Discover SADHYA
            </Button>
          </div>

          {/* Scroll indicator */}
          <button
            type="button"
            onClick={() => handleScroll("#about")}
            data-ocid="hero.scroll_down_button"
            aria-label="Scroll down"
            className="mt-20 flex flex-col items-center gap-2 text-card/80 hover:text-accent transition-smooth mx-auto"
          >
            <span className="font-body text-xs tracking-[0.2em] uppercase">
              Scroll
            </span>
            <ArrowDown size={14} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

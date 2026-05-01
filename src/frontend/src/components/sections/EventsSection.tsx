import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

const events = [
  {
    date: "Saturday, 2nd May 2026",
    time: "7:00 PM – 10:30 PM",
    theme: "The Classic Sadya",
    description:
      "A full traditional Kerala Sadhya — 28 dishes on a banana leaf, served in the exact order prescribed by centuries of culinary tradition. A masterclass in simplicity and abundance.",
    location: "Pune, Maharashtra",
    seats: "Only 3 seats remaining",
    status: "Filling Fast",
    statusColor: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    date: "Saturday, 23rd May 2026",
    time: "7:30 PM – 11:00 PM",
    theme: "Malabar Nights",
    description:
      "A journey through North Kerala — the biryanis, the seafood curries, the coconut chutneys of Kozhikode. A Mappila-inspired spread that tells the story of trade winds and spice routes.",
    location: "Pune, Maharashtra",
    seats: "8 seats available",
    status: "Open",
    statusColor: "text-green-600 bg-green-50 border-green-200",
  },
  {
    date: "Saturday, 13th June 2026",
    time: "7:00 PM – 10:30 PM",
    theme: "Monsoon Table",
    description:
      "Timed for the first Keralan rains — a menu that celebrates the richness of the monsoon harvest. Seasonal greens, jackfruit curries, and steaming kanji.",
    location: "Pune, Maharashtra",
    seats: "12 seats available",
    status: "Open",
    statusColor: "text-green-600 bg-green-50 border-green-200",
  },
];

export function EventsSection() {
  const titleRef = useScrollAnimation();

  const handleBook = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="events"
      data-ocid="events.section"
      className="bg-muted/30 py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Upcoming Gatherings
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-bold leading-tight mb-6">
            Join the Next <br />
            <span className="italic font-light">Table</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground">
            Pre-booking is essential. Seats go fast.
          </p>
          <div className="gold-divider max-w-xs mx-auto mt-8" />
        </div>

        {/* Events list */}
        <div className="space-y-6" data-ocid="events.list">
          {events.map((event, index) => (
            <div
              key={event.theme}
              data-ocid={`events.event.${index + 1}`}
              className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-warm-sm hover:shadow-warm-md transition-smooth"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  {/* Status badge */}
                  <span
                    className={`inline-block font-body text-xs tracking-[0.1em] uppercase px-3 py-1 rounded border ${event.statusColor}`}
                  >
                    {event.status}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {event.theme}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-2xl">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays size={14} className="text-accent" />
                      <span className="font-body text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock size={14} className="text-accent" />
                      <span className="font-body text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={14} className="text-accent" />
                      <span className="font-body text-sm">
                        {event.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users size={14} className="text-accent" />
                      <span className="font-body text-sm">{event.seats}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:flex-shrink-0">
                  <Button
                    onClick={handleBook}
                    data-ocid={`events.book_button.${index + 1}`}
                    className="w-full lg:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-body tracking-[0.1em] text-xs uppercase px-8 py-5 transition-smooth"
                  >
                    Reserve a Seat
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

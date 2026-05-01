import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Phone } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

interface BookingFormData {
  name: string;
  phone: string;
  guests: string;
  event: string;
  notes: string;
}

const eventOptions = [
  "The Classic Sadya — 2nd May 2026",
  "Malabar Nights — 23rd May 2026",
  "Monsoon Table — 13th June 2026",
];

export function BookingSection() {
  const titleRef = useScrollAnimation();
  const [form, setForm] = useState<BookingFormData>({
    name: "",
    phone: "",
    guests: "2",
    event: eventOptions[0],
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<BookingFormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your full name";
    if (
      !form.phone.trim() ||
      !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))
    )
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    if (!form.guests || Number(form.guests) < 1 || Number(form.guests) > 6)
      newErrors.guests = "Guests must be between 1 and 6";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build WhatsApp message
    const message = `Hello! I'd like to book a seat at SADHYA.\n\nName: ${form.name}\nPhone: ${form.phone}\nEvent: ${form.event}\nGuests: ${form.guests}${form.notes ? `\nNotes: ${form.notes}` : ""}`;
    const whatsappUrl = `https://wa.me/919021445900?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      data-ocid="booking.section"
      className="bg-muted/30 py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Secure Your Seat
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground font-bold leading-tight mb-6">
            Pre-Booking <br />
            <span className="italic font-light">Essential</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            Seats at SADHYA are limited and in demand. Reserve yours before
            they're gone.
          </p>
          <div className="gold-divider max-w-xs mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Direct Contact
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
                Prefer to speak with us directly? Reach out on WhatsApp or call
                during the hours below.
              </p>
              <a
                href="https://wa.me/919021445900"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="booking.whatsapp_button"
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 shadow-warm-sm hover:shadow-warm-md transition-smooth group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                  <SiWhatsapp size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">
                    WhatsApp
                  </p>
                  <p className="font-display text-base font-semibold text-foreground">
                    +91 90214 45900
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-warm-sm">
              <div className="flex items-center gap-2 mb-3">
                <Phone size={14} className="text-accent" />
                <p className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground">
                  Available Hours
                </p>
              </div>
              <div className="space-y-2">
                {[
                  "Mon – Fri: 4 PM – 9 PM",
                  "Saturday: 10 AM – 9 PM",
                  "Sunday: 10 AM – 6 PM",
                ].map((hours) => (
                  <p key={hours} className="font-body text-sm text-foreground">
                    {hours}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-5">
              <p className="font-body text-xs text-accent tracking-[0.05em] leading-relaxed">
                <span className="font-semibold text-accent">Note:</span> Booking
                is confirmed only after payment. Venue details are shared 48
                hours before the event.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                data-ocid="booking.success_state"
                className="bg-card border border-border rounded-lg p-10 shadow-warm-md text-center flex flex-col items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    Request Sent!
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Your WhatsApp message has been prepared. We'll confirm your
                    seat within 24 hours. See you at the table!
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  data-ocid="booking.book_again_button"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 font-body text-xs tracking-wider uppercase"
                >
                  Book Another Seat
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-ocid="booking.form"
                className="bg-card border border-border rounded-lg p-8 shadow-warm-md space-y-6"
                noValidate
              >
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Reserve Your Seat
                </h3>
                <div className="gold-divider" />

                {/* Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="booking-name"
                    className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="booking-name"
                    type="text"
                    placeholder="Priya Nair"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    data-ocid="booking.name_input"
                    className={`font-body ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && (
                    <p
                      data-ocid="booking.name_field_error"
                      className="font-body text-xs text-destructive mt-1"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="booking-phone"
                    className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground"
                  >
                    Phone / WhatsApp *
                  </Label>
                  <Input
                    id="booking-phone"
                    type="tel"
                    placeholder="9021445900"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    data-ocid="booking.phone_input"
                    className={`font-body ${errors.phone ? "border-destructive" : ""}`}
                  />
                  {errors.phone && (
                    <p
                      data-ocid="booking.phone_field_error"
                      className="font-body text-xs text-destructive mt-1"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Event + guests row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1 space-y-1.5">
                    <Label
                      htmlFor="booking-event"
                      className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground"
                    >
                      Event *
                    </Label>
                    <select
                      id="booking-event"
                      value={form.event}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, event: e.target.value }))
                      }
                      data-ocid="booking.event_select"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-1 font-body text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {eventOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-2 sm:col-span-1 space-y-1.5">
                    <Label
                      htmlFor="booking-guests"
                      className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground"
                    >
                      Number of Guests *
                    </Label>
                    <Input
                      id="booking-guests"
                      type="number"
                      min={1}
                      max={6}
                      value={form.guests}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, guests: e.target.value }))
                      }
                      data-ocid="booking.guests_input"
                      className={`font-body ${errors.guests ? "border-destructive" : ""}`}
                    />
                    {errors.guests && (
                      <p
                        data-ocid="booking.guests_field_error"
                        className="font-body text-xs text-destructive mt-1"
                      >
                        {errors.guests}
                      </p>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="booking-notes"
                    className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground"
                  >
                    Dietary notes / Message
                  </Label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    placeholder="Any allergies, dietary requirements, or questions for us..."
                    value={form.notes}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, notes: e.target.value }))
                    }
                    data-ocid="booking.notes_textarea"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 font-body text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  data-ocid="booking.submit_button"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body tracking-[0.15em] text-sm uppercase py-6 shadow-warm-md transition-smooth"
                >
                  Send Booking Request via WhatsApp
                </Button>

                <p className="font-body text-xs text-muted-foreground text-center leading-relaxed">
                  Submitting opens WhatsApp with your booking details
                  pre-filled. We'll confirm your seat within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

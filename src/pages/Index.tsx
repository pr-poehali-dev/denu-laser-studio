import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import BookingFormDialog from "@/components/BookingFormDialog";
import SiteHeader from "@/components/index/SiteHeader";
import HeroSection from "@/components/index/HeroSection";
import TeamAtmospherePerks from "@/components/index/TeamAtmospherePerks";
import ReviewsFaqContacts from "@/components/index/ReviewsFaqContacts";
import { BOOKING_URL, faqItems } from "@/components/index/data";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSource, setBookingSource] = useState("Записаться");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openBooking = (source: string) => {
    setBookingSource(source);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen font-body text-denu-dark overflow-x-hidden" style={{ background: "var(--denu-cream)" }}>
      <Helmet>
        <link rel="canonical" href="https://denu-laser.ru/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <SiteHeader scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} openBooking={openBooking} />

      <HeroSection openBooking={openBooking} />

      <TeamAtmospherePerks openBooking={openBooking} />

      <ReviewsFaqContacts openFaq={openFaq} setOpenFaq={setOpenFaq} />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <BookingFormDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        source={bookingSource}
        destinationUrl={BOOKING_URL}
        destinationLabel="Перейти к онлайн-записи"
      />

    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Icon from "@/components/ui/icon";
import BookingFormDialog from "@/components/BookingFormDialog";
import SiteHeader from "@/components/index/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import { BOOKING_URL } from "@/components/index/data";
import { getServiceBySlug, services } from "@/components/services/servicesData";

export default function ServicePage() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSource, setBookingSource] = useState("Записаться");

  const openBooking = (source: string) => {
    setBookingSource(source);
    setBookingOpen(true);
  };

  const otherServices = useMemo(() => {
    if (!service) return [];
    const rest = services.filter((s) => s.slug !== service.slug);
    return [...rest].sort(() => Math.random() - 0.5).slice(0, 3);
  }, [service]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen font-body text-denu-dark overflow-x-hidden" style={{ background: "var(--denu-cream)" }}>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://denu-laser.ru/uslugi/${service.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.title} ${service.titleAccent}`,
            provider: { "@type": "BeautySalon", name: "DENU", url: "https://denu-laser.ru/" },
            areaServed: "Рязань",
            offers: { "@type": "Offer", priceCurrency: "RUB", price: service.price.replace(/\D/g, "") },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "100", bestRating: "5" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Главная", item: "https://denu-laser.ru/" },
              { "@type": "ListItem", position: 2, name: service.navTitle, item: `https://denu-laser.ru/uslugi/${service.slug}` },
            ],
          })}
        </script>
      </Helmet>

      <SiteHeader scrolled menuOpen={menuOpen} setMenuOpen={setMenuOpen} openBooking={openBooking} />

      {/* HERO */}
      <section className="section-padding pt-28 md:pt-36">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-denu-dark/40 mb-6 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-denu-pink transition-colors">Главная</Link>
            <span>/</span>
            <span>{service.navTitle}</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-denu-pink font-semibold text-sm uppercase tracking-widest mb-3">Услуга</p>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-denu-dark leading-tight mb-4">
                {service.title}<br /><em className="not-italic text-denu-pink">{service.titleAccent}</em>
              </h1>
              <p className="text-denu-dark/60 text-lg leading-relaxed mb-6">{service.heroSubtitle}</p>
              <div className="flex items-center gap-4 mb-8">
                <p className="font-display text-4xl font-semibold text-denu-pink">{service.price}</p>
                <p className="text-denu-dark/50 text-sm">{service.priceNote}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => openBooking(`Страница услуги — ${service.navTitle} (/uslugi/${service.slug})`)} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white gradient-pink text-base hover:opacity-90 transition-opacity shadow-lg">
                  Записаться
                </button>
                <Link to="/#price" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-denu-pink-light border border-denu-pink/20 text-base hover:bg-denu-pink-soft transition-colors text-denu-pink">
                  Все цены
                </Link>
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-square">
              <img src={service.image} alt={`${service.title} ${service.titleAccent} в студии DENU`} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding bg-denu-mint-light/40">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {service.intro.map((p, i) => (
            <p key={i} className="text-denu-dark/70 text-lg leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-5">
            {service.benefits.map((b) => (
              <div key={b.title} className="gradient-card rounded-2xl p-6 border border-denu-pink/10">
                <Icon name={b.icon} size={28} className="text-denu-pink mb-4" />
                <h3 className="font-semibold text-denu-dark text-base mb-2">{b.title}</h3>
                <p className="text-denu-dark/55 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SESSIONS INFO */}
      <section className="section-padding bg-denu-pink-light/40">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-denu-dark mb-4">Сколько нужно сеансов?</h2>
          <p className="text-denu-dark/65 text-lg leading-relaxed">{service.sessionsInfo}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-denu-dark mb-3">Готовы записаться?</h2>
          <p className="text-denu-dark/60 mb-8">Первый визит: подмышки + лимонад DENU fizz за 490 ₽</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white gradient-pink text-base hover:opacity-90 transition-opacity shadow-lg">
              <Icon name="CalendarCheck" size={18} />
              Онлайн-запись
            </a>
            <button onClick={() => openBooking(`Страница услуги — ${service.navTitle} (/uslugi/${service.slug})`)} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-white border border-denu-pink/20 text-denu-pink text-base hover:bg-white/80 transition-colors shadow-sm">
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-denu-pink-light/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-denu-pink font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-denu-dark">Частые вопросы</h2>
          </div>
          <div className="flex flex-col gap-3">
            {service.faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-denu-pink/10 overflow-hidden shadow-sm p-5">
                <p className="font-semibold text-denu-dark text-sm md:text-base mb-2">{item.q}</p>
                <p className="text-denu-dark/65 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="gradient-pink rounded-3xl p-6 sm:p-10 text-center shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/5" />
            <div className="relative">
              <p className="text-3xl mb-3">🩷</p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
                Запись на {service.title.toLowerCase()} {service.titleAccent}
              </h2>
              <p className="text-white/70 mb-6 text-sm sm:text-base">Оставьте заявку, и мы подберём удобное время визита</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-white text-denu-pink hover:bg-denu-pink-light transition-colors shadow-md text-sm sm:text-base">
                  Онлайн-запись <Icon name="ArrowRight" size={16} />
                </a>
                <button onClick={() => openBooking(`Страница услуги — ${service.navTitle} (/uslugi/${service.slug})`)} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-colors text-sm sm:text-base">
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-denu-dark">Другие услуги</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link key={s.slug} to={`/uslugi/${s.slug}`} className="rounded-2xl overflow-hidden border border-denu-pink/10 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                <div className="aspect-video overflow-hidden">
                  <img src={s.image} alt={s.navTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-denu-dark">{s.title} {s.titleAccent}</p>
                  <p className="text-denu-pink text-sm mt-1">{s.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />

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
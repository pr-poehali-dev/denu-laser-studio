import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Icon from "@/components/ui/icon";
import BookingFormDialog from "@/components/BookingFormDialog";
import SiteHeader from "@/components/index/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import { BOOKING_URL, servicesSets, servicesZones } from "@/components/index/data";

export default function Prices() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSource, setBookingSource] = useState("Записаться");

  const openBooking = (source: string) => {
    setBookingSource(source);
    setBookingOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allItems = [...servicesSets, ...servicesZones];

  return (
    <div className="min-h-screen font-body text-denu-dark overflow-x-hidden" style={{ background: "var(--denu-cream)" }}>
      <Helmet>
        <title>Цены на лазерную эпиляцию в Рязани — прайс-лист студии DENU</title>
        <meta name="description" content="Актуальные цены на лазерную эпиляцию в Рязани: подмышки от 790 ₽, бикини от 1 390 ₽, ноги от 2 990 ₽, выгодные сеты. Диодный лазер, мастера с мед. образованием." />
        <link rel="canonical" href="https://denu-laser.ru/ceny" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "Прайс-лист лазерной эпиляции DENU",
            url: "https://denu-laser.ru/ceny",
            provider: { "@type": "BeautySalon", name: "DENU", url: "https://denu-laser.ru/" },
            itemListElement: allItems.map((s, i) => ({
              "@type": "Offer",
              position: i + 1,
              itemOffered: { "@type": "Service", name: `Лазерная эпиляция — ${s.zone}`, areaServed: "Рязань" },
              price: s.price.replace(/\D/g, ""),
              priceCurrency: "RUB",
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Главная", item: "https://denu-laser.ru/" },
              { "@type": "ListItem", position: 2, name: "Цены", item: "https://denu-laser.ru/ceny" },
            ],
          })}
        </script>
      </Helmet>

      <SiteHeader scrolled menuOpen={menuOpen} setMenuOpen={setMenuOpen} openBooking={openBooking} />

      <section className="section-padding pt-28 md:pt-36">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-denu-dark/40 mb-6 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-denu-pink transition-colors">Главная</Link>
            <span>/</span>
            <span>Цены</span>
          </nav>
          <div className="text-center mb-12">
            <p className="text-denu-pink font-semibold text-sm uppercase tracking-widest mb-3">Прайс-лист</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-denu-dark mb-4">
              Цены на лазерную<br /><em className="not-italic text-denu-pink">эпиляцию в Рязани</em>
            </h1>
            <p className="text-denu-dark/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Диодный лазер с охлаждением, мастера с медицинским образованием. Все цены указаны за один сеанс.
            </p>
          </div>

          <div className="gradient-pink rounded-3xl p-5 sm:p-8 text-white text-center mb-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
            <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-2">Специальное предложение</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Подмышки + лимонад DENU fizz</h2>
            <p className="text-white/70 mb-4 text-sm sm:text-base">Только для новых клиентов · Первый визит</p>
            <p className="font-display text-5xl sm:text-6xl font-semibold mb-6">490 ₽</p>
            <button onClick={() => openBooking("Страница цен — оффер 490 ₽")} className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold bg-white text-denu-pink hover:bg-denu-pink-light transition-colors shadow-md text-sm sm:text-base">
              Записаться на акцию <Icon name="ArrowRight" size={18} />
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-denu-mint/20 overflow-hidden shadow-sm mb-5">
            <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-2">
              <h2 className="font-display text-xl font-semibold text-denu-dark mb-1">Сеты</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[300px]">
                <tbody>
                  {servicesSets.map((s) => (
                    <tr
                      key={s.zone}
                      onClick={() => s.slug && navigate(`/uslugi/${s.slug}`)}
                      className={`border-b border-denu-mint/5 last:border-0 hover:bg-denu-mint-light/30 transition-colors ${s.slug ? "cursor-pointer" : ""}`}
                    >
                      <td className="p-3 sm:p-4 md:p-5 font-medium text-denu-dark text-sm sm:text-base">{s.zone}</td>
                      <td className="p-3 sm:p-4 md:p-5 text-right font-display font-semibold text-base sm:text-lg text-denu-pink whitespace-nowrap">{s.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-denu-mint/20 overflow-hidden shadow-sm">
            <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-2">
              <h2 className="font-display text-xl font-semibold text-denu-dark mb-1">Отдельные зоны</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[300px]">
                <tbody>
                  {servicesZones.map((s) => (
                    <tr
                      key={s.zone}
                      onClick={() => s.slug && navigate(`/uslugi/${s.slug}`)}
                      className={`border-b border-denu-mint/5 last:border-0 hover:bg-denu-pink-light/20 transition-colors ${s.popular ? "bg-denu-pink-light/30" : ""} ${s.slug ? "cursor-pointer" : ""}`}
                    >
                      <td className="p-3 sm:p-4 md:p-5 font-medium text-denu-dark flex items-center gap-2 text-sm sm:text-base">
                        {s.popular && <span className="text-xs font-semibold text-denu-pink bg-denu-pink-light rounded-full px-2 py-0.5 shrink-0">хит</span>}
                        {s.zone}
                      </td>
                      <td className="p-3 sm:p-4 md:p-5 text-right font-display font-semibold text-base sm:text-lg text-denu-pink whitespace-nowrap">{s.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-denu-dark/40 text-sm mt-4">* Цены указаны за один сеанс. Нажмите на услугу, чтобы узнать подробнее.</p>
        </div>
      </section>

      <section className="section-padding bg-denu-pink-light/40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-denu-dark mb-3">Готовы записаться?</h2>
          <p className="text-denu-dark/60 mb-8">Оставьте заявку, и мы подберём удобное время визита</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white gradient-pink text-base hover:opacity-90 transition-opacity shadow-lg">
              <Icon name="CalendarCheck" size={18} />
              Онлайн-запись
            </a>
            <button onClick={() => openBooking("Страница цен — оставить заявку")} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-white border border-denu-pink/20 text-denu-pink text-base hover:bg-white/80 transition-colors shadow-sm">
              Оставить заявку
            </button>
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

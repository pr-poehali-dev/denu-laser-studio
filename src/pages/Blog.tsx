import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Icon from "@/components/ui/icon";
import BookingFormDialog from "@/components/BookingFormDialog";
import SiteHeader from "@/components/index/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import { BOOKING_URL } from "@/components/index/data";
import { blogPosts } from "@/components/blog/blogData";

export default function Blog() {
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

  return (
    <div className="min-h-screen font-body text-denu-dark overflow-x-hidden" style={{ background: "var(--denu-cream)" }}>
      <Helmet>
        <title>Блог о лазерной эпиляции — советы мастеров | DENU Рязань</title>
        <meta name="description" content="Полезные статьи о лазерной эпиляции: как подготовиться, сколько нужно сеансов, больно ли это. Отвечают мастера с медицинским образованием студии DENU в Рязани." />
        <link rel="canonical" href="https://denu-laser.ru/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Блог DENU о лазерной эпиляции",
            url: "https://denu-laser.ru/blog",
            publisher: { "@type": "BeautySalon", name: "DENU", url: "https://denu-laser.ru/" },
            blogPost: blogPosts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              description: p.excerpt,
              datePublished: p.date,
              url: `https://denu-laser.ru/blog/${p.slug}`,
              author: { "@type": "Organization", name: "DENU" },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Главная", item: "https://denu-laser.ru/" },
              { "@type": "ListItem", position: 2, name: "Блог", item: "https://denu-laser.ru/blog" },
            ],
          })}
        </script>
      </Helmet>

      <SiteHeader scrolled menuOpen={menuOpen} setMenuOpen={setMenuOpen} openBooking={openBooking} />

      <section className="section-padding pt-28 md:pt-36">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-denu-dark/40 mb-6 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-denu-pink transition-colors">Главная</Link>
            <span>/</span>
            <span>Блог</span>
          </nav>
          <div className="text-center mb-12">
            <p className="text-denu-pink font-semibold text-sm uppercase tracking-widest mb-3">Блог</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-denu-dark mb-4">
              Всё о лазерной<br /><em className="not-italic text-denu-pink">эпиляции</em>
            </h1>
            <p className="text-denu-dark/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Отвечаем на частые вопросы клиентов — честно и без маркетинга
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-denu-pink/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="flex items-center gap-3 text-xs text-denu-dark/40 mb-3">
                  <span>{post.dateLabel}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-denu-dark mb-3 group-hover:text-denu-pink transition-colors">
                  {post.title}
                </h2>
                <p className="text-denu-dark/60 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-denu-pink font-semibold text-sm">
                  Читать статью <Icon name="ArrowRight" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-denu-pink-light/40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-denu-dark mb-3">Остались вопросы?</h2>
          <p className="text-denu-dark/60 mb-8">Первый визит: подмышки + лимонад DENU fizz за 490 ₽</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white gradient-pink text-base hover:opacity-90 transition-opacity shadow-lg">
              <Icon name="CalendarCheck" size={18} />
              Онлайн-запись
            </a>
            <button onClick={() => openBooking("Блог — оставить заявку")} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-white border border-denu-pink/20 text-denu-pink text-base hover:bg-white/80 transition-colors shadow-sm">
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

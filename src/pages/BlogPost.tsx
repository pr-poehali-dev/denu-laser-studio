import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Icon from "@/components/ui/icon";
import BookingFormDialog from "@/components/BookingFormDialog";
import SiteHeader from "@/components/index/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import { BOOKING_URL } from "@/components/index/data";
import { blogPosts, getPostBySlug } from "@/components/blog/blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSource, setBookingSource] = useState("Записаться");

  const openBooking = (source: string) => {
    setBookingSource(source);
    setBookingOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen font-body text-denu-dark overflow-x-hidden" style={{ background: "var(--denu-cream)" }}>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://denu-laser.ru/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.date,
            dateModified: post.date,
            inLanguage: "ru-RU",
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://denu-laser.ru/blog/${post.slug}` },
            author: { "@type": "Organization", name: "DENU", url: "https://denu-laser.ru/" },
            publisher: {
              "@type": "Organization",
              name: "DENU",
              logo: { "@type": "ImageObject", url: "https://cdn.poehali.dev/projects/240a6363-8506-4999-a5c6-fa3c28c59bb8/files/favicon-1781096100481.png" },
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Главная", item: "https://denu-laser.ru/" },
              { "@type": "ListItem", position: 2, name: "Блог", item: "https://denu-laser.ru/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://denu-laser.ru/blog/${post.slug}` },
            ],
          })}
        </script>
      </Helmet>

      <SiteHeader scrolled menuOpen={menuOpen} setMenuOpen={setMenuOpen} openBooking={openBooking} />

      <article className="section-padding pt-28 md:pt-36">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-denu-dark/40 mb-6 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-denu-pink transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-denu-pink transition-colors">Блог</Link>
            <span>/</span>
            <span className="truncate">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 text-xs text-denu-dark/40 mb-4">
            <span>{post.dateLabel}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-semibold text-denu-dark leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-denu-dark/70 text-lg leading-relaxed mb-10">{post.intro}</p>

          <div className="flex flex-col gap-9">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-denu-dark mb-4">{section.heading}</h2>
                <div className="flex flex-col gap-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-denu-dark/70 leading-relaxed">{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 bg-denu-mint-light/50 border border-denu-mint/20 rounded-2xl p-6">
            <p className="text-denu-dark/70 leading-relaxed">{post.conclusion}</p>
          </div>
        </div>
      </article>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="gradient-pink rounded-3xl p-6 sm:p-10 text-center shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="relative">
              <p className="text-3xl mb-3">🩷</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-3">Готовы попробовать?</h2>
              <p className="text-white/70 mb-6 text-sm sm:text-base">Первый визит: подмышки + лимонад DENU fizz за 490 ₽</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-white text-denu-pink hover:bg-denu-pink-light transition-colors shadow-md text-sm sm:text-base">
                  Онлайн-запись <Icon name="ArrowRight" size={16} />
                </a>
                <button onClick={() => openBooking(`Блог — ${post.title}`)} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-colors text-sm sm:text-base">
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {otherPosts.length > 0 && (
        <section className="section-padding bg-denu-pink-light/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-denu-dark text-center mb-10">Читайте также</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {otherPosts.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="bg-white rounded-2xl p-6 border border-denu-pink/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                  <p className="text-xs text-denu-dark/40 mb-2">{p.dateLabel}</p>
                  <h3 className="font-display text-xl font-semibold text-denu-dark mb-2 group-hover:text-denu-pink transition-colors">{p.title}</h3>
                  <p className="text-denu-dark/55 text-sm leading-relaxed">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

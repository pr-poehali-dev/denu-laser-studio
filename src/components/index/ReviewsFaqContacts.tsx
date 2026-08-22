import Icon from "@/components/ui/icon";
import SiteFooter from "@/components/common/SiteFooter";
import { BOOKING_URL, faqItems } from "@/components/index/data";

interface ReviewsFaqContactsProps {
  openFaq: number | null;
  setOpenFaq: (index: number | null) => void;
}

export default function ReviewsFaqContacts({ openFaq, setOpenFaq }: ReviewsFaqContactsProps) {
  return (
    <>
      {/* REVIEWS */}
      <section id="reviews" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-denu-pink font-semibold text-sm uppercase tracking-widest mb-3">Отзывы</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-denu-dark">Что говорят клиенты</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-denu-pink/10 shadow-sm w-full h-[800px]">
            <iframe
              style={{ width: "100%", height: "100%", border: "none", boxSizing: "border-box" }}
              src="https://yandex.ru/maps-reviews-widget/186239162108?comments"
              title="Отзывы на Яндекс Картах"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-denu-pink-light/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-denu-pink font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-denu-dark">Частые вопросы</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-denu-pink/10 overflow-hidden shadow-sm">
                <button className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-denu-pink-light/30 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-denu-dark text-sm md:text-base">{item.q}</span>
                  <Icon name="ChevronDown" size={18} className={`text-denu-pink shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-denu-dark/65 text-sm leading-relaxed border-t border-denu-pink/5 pt-4">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="section-padding" style={{ background: "var(--denu-dark)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-denu-pink font-semibold text-sm uppercase tracking-widest mb-3">Контакты</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">Приходи к нам</h2>
            <p className="text-white/40 mt-3">Рязань, центр города</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-4">
              {[
                { icon: "MapPin" as const, label: "Адрес", value: "Рязань, Краснорядская, 3", href: "https://yandex.ru/maps/?text=Рязань+Краснорядская+3" },
                { icon: "Phone" as const, label: "Телефон", value: "+7 (930) 870-99-99", href: "tel:+79308709999" },
                { icon: "Send" as const, label: "Telegram канал", value: "@denulazerrzn", href: "https://t.me/denulazerrzn" },
                { icon: "MessageCircle" as const, label: "ВКонтакте", value: "denulaser_rzn", href: "https://vk.com/denulaser_rzn" },
              ].map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 rounded-2xl p-4 border border-white/5 transition-colors group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors" style={{ background: "rgba(240,98,146,0.2)" }}>
                    <Icon name={c.icon} size={18} className="text-denu-pink" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{c.label}</p>
                    <p className="text-white font-medium text-sm">{c.value}</p>
                  </div>
                  <Icon name="ExternalLink" size={14} className="text-white/20 ml-auto group-hover:text-white/40 transition-colors" />
                </a>
              ))}
            </div>
            <div className="gradient-pink rounded-3xl p-5 sm:p-8 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/5" />
              <div className="relative">
                <p className="text-4xl mb-4">🩷</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-3">Первый визит за 490 ₽</h3>
                <p className="text-white/70 mb-6 text-sm leading-relaxed">Подмышки + лимонад DENU fizz в подарок.
Записывайся прямо сейчас!</p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-white text-denu-pink hover:bg-denu-pink-light transition-colors shadow-md text-sm">
                  Записаться онлайн <Icon name="ArrowRight" size={16} />
                </a>
                <p className="text-white/40 text-xs mt-4">
                  Или напишите нам в Telegram<br />
                  <a href="https://t.me/denulazer" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors underline">@denulazer</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
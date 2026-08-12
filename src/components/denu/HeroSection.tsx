import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onBooking: (source: string) => void;
}

export default function HeroSection({ onBooking }: HeroSectionProps) {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-[-100px] right-[-150px] w-[600px] h-[600px] blob opacity-30 animate-float" style={{ background: "radial-gradient(circle, #F06292 0%, #FCE4EC 60%, transparent 100%)" }} />
        <div className="absolute bottom-[-80px] left-[-100px] w-[400px] h-[400px] blob opacity-20 animate-float-delay" style={{ background: "radial-gradient(circle, #80CBC4 0%, #E0F2F1 60%, transparent 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-denu-pink-light border border-denu-pink/20 mb-6">
              <span className="text-sm">📍</span>
              <span className="text-sm font-medium text-denu-pink">Рязань, пл. Ленина</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] font-semibold mb-6 text-denu-dark">
              Лазерная<br />
              <em className="not-italic text-denu-pink">эпиляция</em><br />
              в Рязани
            </h1>
            <p className="text-lg md:text-xl text-denu-dark/60 mb-8 max-w-md leading-relaxed">
              Диодный лазер с охлаждением · Мастера с мед. образованием · Дофаминовый интерьер
            </p>
            <button onClick={() => onBooking("Оффер для новых клиентов")} className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-2xl p-5 shadow-lg border border-denu-pink/10 mb-8 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group w-full sm:w-auto text-left">
              <div className="text-3xl">🩷</div>
              <div>
                <p className="text-xs text-denu-dark/50 uppercase tracking-widest font-body mb-1">Оффер для новых клиентов</p>
                <p className="font-display text-xl font-semibold text-denu-dark">Подмышки + маска Darling</p>
                <p className="font-bold text-2xl mt-0.5 text-denu-pink">490 ₽</p>
              </div>
              <Icon name="Send" size={18} className="text-denu-pink/40 group-hover:text-denu-pink transition-colors ml-auto hidden sm:block" />
            </button>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => onBooking("Записаться по акции онлайн")} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white gradient-pink text-base hover:opacity-90 transition-opacity shadow-lg">Записаться по акции онлайн</button>
              <a href="#price" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-denu-pink-light border border-denu-pink/20 text-base hover:bg-denu-pink-soft transition-colors text-denu-pink">
                Все услуги
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img src="https://cdn.poehali.dev/projects/240a6363-8506-4999-a5c6-fa3c28c59bb8/bucket/871173b3-5c74-4356-bb1b-11382e060de6.JPG" alt="Студия DENU" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-denu-pink/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-semibold text-denu-dark text-sm">5.0 рейтинг</p>
                <p className="text-xs text-denu-dark/50">100+ отзывов</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-denu-mint rounded-2xl shadow-lg p-3 text-white text-sm font-semibold">
              Диодный лазер
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-denu-dark/30 animate-bounce">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="gradient-pink py-4 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap" style={{ animation: "marquee 22s linear infinite" }}>
          {["🩷 Диодный лазер с охлаждением", "🩷 Мастера с мед. образованием", "🩷 Дофаминовый интерьер", "🩷 Зона косметики Pusy", "🩷 Онлайн-запись", "🩷 Маска в подарок за отзыв", "🩷 Диодный лазер с охлаждением", "🩷 Мастера с мед. образованием", "🩷 Дофаминовый интерьер", "🩷 Зона косметики Pusy"].map((item, i) => (
            <span key={i} className="text-white font-semibold text-sm shrink-0">{item}</span>
          ))}
        </div>
      </div>
    </>
  );
}

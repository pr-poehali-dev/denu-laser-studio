import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { OFFER_TG_URL, servicesSets, servicesZones } from "@/components/index/data";
import { services } from "@/components/services/servicesData";

interface HeroSectionProps {
  openBooking: (source: string) => void;
}

export default function HeroSection({ openBooking }: HeroSectionProps) {
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
            <button onClick={() => openBooking("Оффер для новых клиентов")} className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-2xl p-5 shadow-lg border border-denu-pink/10 mb-8 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group w-full sm:w-auto text-left">
              <div className="text-3xl">🩷</div>
              <div>
                <p className="text-xs text-denu-dark/50 uppercase tracking-widest font-body mb-1">Оффер для новых клиентов</p>
                <p className="font-display text-xl font-semibold text-denu-dark">Подмышки + лимонад DENU fizz</p>
                <p className="font-bold text-2xl mt-0.5 text-denu-pink">490 ₽</p>
              </div>
              <Icon name="Send" size={18} className="text-denu-pink/40 group-hover:text-denu-pink transition-colors ml-auto hidden sm:block" />
            </button>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => openBooking("Записаться по акции онлайн")} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white gradient-pink text-base hover:opacity-90 transition-opacity shadow-lg">Записаться по акции онлайн</button>
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

      {/* ABOUT */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-denu-pink font-semibold text-sm uppercase tracking-widest mb-3">О студии</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-denu-dark leading-tight mb-6">
                Первый раз?<br />Всё будет<br /><em className="not-italic text-denu-pink">хорошо</em>
              </h2>
              <p className="text-denu-dark/60 text-lg leading-relaxed mb-6">
                Мы знаем, что для многих это первый опыт. Поэтому наши мастера с медицинским образованием сначала отвечают на все вопросы, а потом — делают процедуру.
              </p>
              <p className="text-denu-dark/60 leading-relaxed mb-8">
                Диодный лазер с охлаждением — минимум ощущений, максимум результата. Ты уйдёшь с чёткими ответами: сколько сеансов нужно именно тебе и чего ожидать на каждом этапе.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[{ num: "≥ 90%", label: "клиентов возвращаются снова" }, { num: "100%", label: "мастера с мед. образованием" }].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-4 border border-denu-pink/10">
                    <p className="font-display text-3xl font-semibold text-denu-pink">{s.num}</p>
                    <p className="text-sm text-denu-dark/60 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 md:mt-0 px-4 md:px-0">
              <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl aspect-square">
                <img src="https://cdn.poehali.dev/projects/240a6363-8506-4999-a5c6-fa3c28c59bb8/bucket/99bbdcb0-2a50-4f97-b31d-c81f75bf9be2.JPG" alt="Кабинет DENU" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-1 md:-bottom-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 rounded-[1.5rem] md:rounded-[2rem] gradient-mint opacity-70 animate-float-delay" />
              <div className="absolute -top-3 -left-1 md:-top-6 md:-left-6 w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-denu-pink-light border-4 border-white shadow-lg flex items-center justify-center text-2xl md:text-3xl">🩷</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="section-padding bg-denu-mint-light/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-denu-mint-deep font-semibold text-sm uppercase tracking-widest mb-3">Прайс</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-denu-dark">Стоимость</h2>
          </div>
          <div className="gradient-pink rounded-3xl p-5 sm:p-8 text-white text-center mb-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
            <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-2">Специальное предложение</p>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Подмышки + лимонад DENU fizz</h3>
            <p className="text-white/70 mb-4 text-sm sm:text-base">Только для новых клиентов · Первый визит</p>
            <p className="font-display text-5xl sm:text-6xl font-semibold mb-6">490 ₽</p>
            <a href={OFFER_TG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold bg-white text-denu-pink hover:bg-denu-pink-light transition-colors shadow-md text-sm sm:text-base">
              Записаться на акцию <Icon name="ArrowRight" size={18} />
            </a>
          </div>
          <div className="bg-white rounded-3xl border border-denu-mint/20 overflow-hidden shadow-sm mb-5">
            <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-2">
              <p className="font-display text-xl font-semibold text-denu-dark mb-1">Сеты</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[300px]">
                <tbody>
                  {servicesSets.map((s) => (
                    <tr key={s.zone} className="border-b border-denu-mint/5 last:border-0 hover:bg-denu-mint-light/30 transition-colors">
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
              <p className="font-display text-xl font-semibold text-denu-dark mb-1">Отдельные зоны</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[300px]">
                <tbody>
                  {servicesZones.map((s) => (
                    <tr key={s.zone} className={`border-b border-denu-mint/5 last:border-0 hover:bg-denu-pink-light/20 transition-colors ${s.popular ? "bg-denu-pink-light/30" : ""}`}>
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
          <p className="text-center text-denu-dark/40 text-sm mt-4">* Цены указаны за один сеанс.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {services.map((s) => (
              <Link key={s.slug} to={`/uslugi/${s.slug}`} className="bg-white rounded-2xl p-5 border border-denu-mint/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center">
                <p className="font-semibold text-denu-dark text-sm mb-1">Подробнее: {s.navTitle}</p>
                <p className="text-denu-pink text-xs">Узнать больше →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
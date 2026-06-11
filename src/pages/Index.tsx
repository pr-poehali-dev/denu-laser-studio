import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const BOOKING_URL = "https://n2083629.yclients.com/";
const OFFER_TG_URL = "https://t.me/denulazer?text=Здравствуйте! Запишите меня на оффер «Подмышки + масочка Darling за 490р»";
const TG_URL = "https://t.me/denulazer?text=Здравствуйте! Запишите меня лазер";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Специалисты", href: "#team" },
  { label: "Атмосфера", href: "#atmosphere" },
  { label: "Плюшки", href: "#perks" },
  { label: "Прайс", href: "#price" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const servicesZones = [
  { zone: "Подмышки", price: "790 ₽", popular: false },
  { zone: "Классическое бикини", price: "1 390 ₽", popular: false },
  { zone: "Глубокое бикини", price: "2 690 ₽", popular: true },
  { zone: "Ноги полностью", price: "4 600 ₽", popular: false },
  { zone: "Голени", price: "2 990 ₽", popular: false },
  { zone: "Бёдра", price: "2 790 ₽", popular: false },
  { zone: "Руки до локтя", price: "1 590 ₽", popular: false },
  { zone: "Руки полностью", price: "2 900 ₽", popular: false },
  { zone: "Линия живота", price: "850 ₽", popular: false },
  { zone: "Межъягодичная впадина", price: "1 100 ₽", popular: false },
];

const servicesSets = [
  { zone: "Подмышки + глубокое бикини", price: "3 100 ₽" },
  { zone: "Подмышки + глубокое бикини + голени / бёдра", price: "4 800 ₽" },
  { zone: "Подмышки + глубокое бикини + ноги полностью", price: "6 100 ₽" },
];

const team = [
  { name: "Екатерина", role: "Мастер лазерной эпиляции", exp: "3 года опыта", edu: "Мед. образование", photo: "https://cdn.poehali.dev/projects/240a6363-8506-4999-a5c6-fa3c28c59bb8/bucket/0b4a882c-d219-4575-98e2-bd0a613542e7.JPG" },
  { name: "Василина", role: "Мастер лазерной эпиляции", exp: "2 года опыта", edu: "Мед. образование", photo: "https://cdn.poehali.dev/projects/240a6363-8506-4999-a5c6-fa3c28c59bb8/bucket/78a466ca-6660-40f2-a84c-a7a807fcd96f.JPG" },
];

const perks = [
  { icon: "🎁", title: "Маска Darling", desc: "Дарим розовую маску Darling за первый визит" },
  { icon: "🥤", title: "Лимонад DENU Fizz", desc: "Освежающий лимонад в подарок после каждой процедуры" },
  { icon: "💎", title: "Бьютисы", desc: "Собирай уровни и получай плюшки от студии" },
];

const reviews = [
  { name: "Алёна М.", age: "22 года", text: "Давно хотела попробовать лазер, но боялась. В DENU так уютно и девочки такие приятные, что страх улетел моментально! Уже 3 сеанса позади 🩷", rating: 5 },
  { name: "Настя К.", age: "19 лет", text: "Пришла на оффер за 490 ₽ и влюбилась в студию. Розовый туалет — это отдельный вид искусства 😂 Мастер очень аккуратная, почти не больно!", rating: 5 },
  { name: "Вика Р.", age: "24 года", text: "Лучшая студия в Рязани без вопросов. Профессионально, красиво, вкусно (лимонад топ). Подруг уже привела, теперь ходим вместе!", rating: 5 },
  { name: "Катя Л.", age: "21 год", text: "Записалась онлайн — супер удобно. Пришла, конфетки, маска в подарок, мастер объяснила всё про уход. Вернусь точно!", rating: 5 },
];

const faqItems = [
  { q: "Больно ли делать лазерную эпиляцию?", a: "Наш диодный лазер оснащён системой охлаждения, что делает процедуру максимально комфортной. Большинство клиентов описывают ощущение как лёгкое покалывание. Чувствительность зависит от зоны и индивидуального порога." },
  { q: "Сколько сеансов нужно для результата?", a: "Для стойкого результата обычно требуется 6–8 сеансов с интервалом 4–8 недель. После курса большинство клиентов забывают о нежелательных волосах на 2–5 лет." },
  { q: "Можно ли делать эпиляцию летом и на загорелой коже?", a: "Это индивидуально. Диодный лазер хорошо работает на разных фототипах, но активный загар — противопоказание. На консультации мастер оценит состояние кожи и подберёт правильные параметры." },
  { q: "Как подготовиться к процедуре?", a: "За 1–2 дня до процедуры побрейте зону эпиляции. Не используйте кремы-депиляторы и воск. Откажитесь от загара за 2 недели до сеанса. Кожа должна быть чистой — без косметики на зоне обработки." },
  { q: "Что такое оффер 490 ₽?", a: "Это специальное предложение для новых клиентов: эпиляция подмышек + маска Darling в подарок всего за 490 ₽. Запишитесь онлайн, чтобы воспользоваться акцией." },
  { q: "Есть ли противопоказания?", a: "Да: беременность и лактация, активные кожные заболевания в зоне обработки, онкологические заболевания, приём фотосенсибилизирующих препаратов. На консультации мастер уточнит все детали." },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-body text-denu-dark overflow-x-hidden" style={{ background: "var(--denu-cream)" }}>

      {/* NAV */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-sm py-3" : "py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold tracking-wide" style={{ color: "var(--denu-pink-deep)" }}>DENU</span>
            <span className="text-xs text-denu-dark/50 hidden sm:block font-body">лазерная эпиляция</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-denu-dark/70 hover:text-denu-pink transition-colors duration-200">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white gradient-pink hover:opacity-90 transition-opacity shadow-md">
              Записаться
            </a>
            <button className="lg:hidden p-2 rounded-full hover:bg-denu-pink-light transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-denu-pink" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden glass border-t border-denu-pink/10 mt-2 px-4 pb-6 pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-base text-denu-dark/80 hover:text-denu-pink transition-colors" onClick={() => setMenuOpen(false)}>{l.label}</a>
              ))}
            </nav>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-white gradient-pink" onClick={() => setMenuOpen(false)}>
              Записаться онлайн
            </a>
          </div>
        )}
      </header>

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
            <a href={OFFER_TG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-2xl p-5 shadow-lg border border-denu-pink/10 mb-8 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="text-3xl">🩷</div>
              <div>
                <p className="text-xs text-denu-dark/50 uppercase tracking-widest font-body mb-1">Оффер для новых клиентов</p>
                <p className="font-display text-xl font-semibold text-denu-dark">Подмышки + маска Darling</p>
                <p className="font-bold text-2xl mt-0.5 text-denu-pink">490 ₽</p>
              </div>
              <Icon name="Send" size={18} className="text-denu-pink/40 group-hover:text-denu-pink transition-colors ml-auto hidden sm:block" />
            </a>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white gradient-pink text-base hover:opacity-90 transition-opacity shadow-lg">
                Записаться за 490 ₽
                <Icon name="ArrowRight" size={18} />
              </a>
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
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Подмышки + маска Darling</h3>
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
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-denu-pink font-semibold text-sm uppercase tracking-widest mb-3">Специалисты</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-denu-dark">Наши мастера</h2>
            <p className="text-denu-dark/50 mt-3 text-lg">Медицинское образование · Постоянное обучение</p>
          </div>

          <div className="grid sm:grid-cols-2 max-w-2xl mx-auto gap-6">
            {team.map((m) => (
              <div key={m.name} className="group bg-white rounded-3xl overflow-hidden border border-denu-pink/10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-full aspect-[3/4] overflow-hidden">
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-denu-dark mb-1">{m.name}</h3>
                  <p className="text-denu-pink text-sm font-semibold mb-3">{m.role}</p>
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex items-center justify-center gap-1.5 text-xs text-denu-dark/60 bg-denu-pink-light rounded-full px-3 py-1">
                      <Icon name="Clock" size={12} />{m.exp}
                    </span>
                    <span className="inline-flex items-center justify-center gap-1.5 text-xs text-denu-mint-deep bg-denu-mint-light rounded-full px-3 py-1">
                      <Icon name="GraduationCap" size={12} />{m.edu}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSPHERE */}
      <section id="atmosphere" className="section-padding bg-denu-pink-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-denu-pink font-semibold text-sm uppercase tracking-widest mb-3">Атмосфера</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-denu-dark">Дофаминовый<br /><em className="not-italic text-denu-pink">интерьер</em></h2>
            <p className="text-denu-dark/50 mt-3 text-lg">Каждая деталь создана для удовольствия</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { emoji: "🎈", title: "Ресепшн из розовых шариков", desc: "Атмосфера праздника с первого шага" },
              { emoji: "🤳", title: "Инстаграмные раздевалки", desc: "Раздевалки созданы для крутых фото и сторис" },
              { emoji: "🍬", title: "Конфетки фрутти", desc: "Большая ваза у ресепшн — угощайтесь" },
              { emoji: "✨", title: "Фотозона", desc: "Идеальный фон для твоих сторис" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6 bg-white border border-denu-pink/15 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <p className="text-4xl mb-4">{item.emoji}</p>
                <p className="font-semibold text-denu-dark text-sm mb-1">{item.title}</p>
                <p className="text-denu-dark/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section id="perks" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-denu-pink font-semibold text-sm uppercase tracking-widest mb-3">Плюшки</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-denu-dark">Наши бонусы</h2>
            <p className="text-denu-dark/50 mt-3 text-lg">Маленькие радости, которые мы дарим</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((p) => (
              <div key={p.title} className="gradient-card rounded-2xl p-6 border border-denu-pink/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <h3 className="font-semibold text-denu-dark text-base mb-2">{p.title}</h3>
                <p className="text-denu-dark/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="section-padding bg-denu-pink-light">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-denu-dark mb-3">Готова записаться?</h2>
          <p className="text-denu-dark/60 mb-8">Онлайн за пару кликов или напиши нам в Telegram — ответим быстро</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white gradient-pink text-base hover:opacity-90 transition-opacity shadow-lg">
              <Icon name="CalendarCheck" size={18} />
              Онлайн-запись
            </a>
            <a href={TG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-white border border-denu-pink/20 text-denu-pink text-base hover:bg-white/80 transition-colors shadow-sm">
              <Icon name="Send" size={18} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

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
                <p className="text-white/70 mb-6 text-sm leading-relaxed">Подмышки + маска Darling в подарок.<br />Записывайся прямо сейчас!</p>
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

      {/* FOOTER */}
      <footer className="py-6 px-4 border-t border-denu-pink/10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-denu-dark/40">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-semibold text-denu-pink">DENU</span>
            <span>© 2024 · Лазерная эпиляция в Рязани</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://t.me/denulazerrzn" target="_blank" rel="noopener noreferrer" className="hover:text-denu-pink transition-colors">Telegram</a>
            <a href="https://vk.com/denulaser_rzn" target="_blank" rel="noopener noreferrer" className="hover:text-denu-pink transition-colors">ВКонтакте</a>
            <a href="tel:+79308709999" className="hover:text-denu-pink transition-colors">+7 (930) 870-99-99</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </div>
  );
}
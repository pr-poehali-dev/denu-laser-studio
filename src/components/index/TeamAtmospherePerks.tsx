import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import { BOOKING_URL, TG_URL, team, perks, videos } from "@/components/index/data";

function VideoCarousel() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [active]);

  const prev = () => setActive((a) => (a - 1 + videos.length) % videos.length);
  const next = () => setActive((a) => (a + 1) % videos.length);

  return (
    <div className="relative flex flex-col items-center gap-4">
      <div className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden bg-black shadow-lg aspect-[9/16]">
        <video
          ref={videoRef}
          src={videos[active]}
          className="w-full h-full object-cover"
          title="Процедура лазерной эпиляции в студии DENU, Рязань"
          aria-label="Видео процедуры лазерной эпиляции в студии DENU"
          autoPlay
          muted
          playsInline
          loop
        />
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow transition">
          <Icon name="ChevronLeft" size={20} />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow transition">
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
      <div className="flex gap-2">
        {videos.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-denu-pink w-5" : "bg-denu-pink/30"}`} />
        ))}
      </div>
    </div>
  );
}

interface TeamAtmospherePerksProps {
  openBooking: (source: string) => void;
}

export default function TeamAtmospherePerks({ openBooking }: TeamAtmospherePerksProps) {
  return (
    <>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">
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
          <VideoCarousel />
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
          <button
            onClick={() => openBooking("Приведи подругу")}
            className="mt-8 w-full gradient-pink rounded-2xl p-6 text-center text-white shadow-md hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="font-semibold text-base sm:text-lg leading-relaxed">
              👯 Приведи подругу и выбирайте любую позицию Pusy для себя и подруги
            </p>
          </button>
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
    </>
  );
}

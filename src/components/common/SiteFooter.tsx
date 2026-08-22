import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="py-6 px-4 border-t border-denu-pink/10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-denu-dark/40">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-semibold text-denu-pink">DENU</span>
          <span>© 2026 · Лазерная эпиляция, Рязань</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/ceny" className="hover:text-denu-pink transition-colors">Цены</Link>
          <Link to="/blog" className="hover:text-denu-pink transition-colors">Блог</Link>
          <a href="https://t.me/denulazerrzn" target="_blank" rel="noopener noreferrer" className="hover:text-denu-pink transition-colors">Telegram</a>
          <a href="https://vk.com/denulaser_rzn" target="_blank" rel="noopener noreferrer" className="hover:text-denu-pink transition-colors">ВКонтакте</a>
          <a href="tel:+79308709999" className="hover:text-denu-pink transition-colors">+7 (930) 870-99-99</a>
          <Link to="/offer" className="hover:text-denu-pink transition-colors">Оферта</Link>
          <Link to="/privacy" className="hover:text-denu-pink transition-colors">Политика данных</Link>
        </div>
      </div>
    </footer>
  );
}

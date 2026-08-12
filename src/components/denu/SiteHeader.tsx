import Icon from "@/components/ui/icon";
import { navLinks } from "@/components/denu/constants";

interface SiteHeaderProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  onBooking: (source: string) => void;
}

export default function SiteHeader({ scrolled, menuOpen, setMenuOpen, onBooking }: SiteHeaderProps) {
  return (
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
          <button onClick={() => onBooking("Шапка сайта — Записаться")} className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white gradient-pink hover:opacity-90 transition-opacity shadow-md">
            Записаться
          </button>
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
          <button onClick={() => { setMenuOpen(false); onBooking("Мобильное меню — Записаться онлайн"); }} className="mt-5 flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-white gradient-pink w-full">
            Записаться онлайн
          </button>
        </div>
      )}
    </header>
  );
}

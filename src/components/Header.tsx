import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo-viva-beiramar.png";

const menuItems = [
  { label: "Imoveis", href: "#imoveis" },
  { label: "Sobre", href: "#sobre" },
  { label: "Anuncie seu imovel", href: "https://wa.me/5548999999999" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[rgba(27,58,82,0.95)] shadow-card-hover border-b border-[var(--border-subtle)]"
        : "bg-[rgba(27,58,82,0.88)] backdrop-blur-lg border-b border-[rgba(42,74,94,0.75)]"
        }`}
    >
      <div className="vb-container flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Viva Beiramar"
            className="h-10 w-10 md:h-11 md:w-11 object-contain"
          />
          <span className="text-lg md:text-xl font-display font-semibold tracking-[0.4px] text-[var(--text-primary)]">
            Viva <span className="text-[var(--accent-gold)]">Beiramar</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link px-4 py-2 font-sans text-[0.74rem] font-medium uppercase tracking-[1.2px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5548999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center justify-center h-10 px-5 rounded-md bg-[var(--accent-gold)] text-[var(--bg-primary)] font-sans font-semibold text-[0.72rem] tracking-[0.3px] hover:bg-[var(--accent-gold-hover)] transition-colors duration-300"
          >
            Agendar Visita
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          className="md:hidden flex flex-col gap-1.5 p-2 z-[1001]"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[var(--text-primary)]"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-[var(--text-primary)]"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[var(--text-primary)]"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[rgba(13,34,51,0.97)] flex flex-col items-center justify-center gap-5 z-[1000] md:hidden"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-sans font-medium text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-12 px-7 rounded-md bg-[var(--accent-gold)] text-[var(--bg-primary)] font-sans font-semibold text-sm tracking-[0.3px] hover:bg-[var(--accent-gold-hover)] transition-colors"
            >
              Agendar Visita
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

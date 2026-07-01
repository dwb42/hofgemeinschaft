import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled || isOpen ? "site-header--solid" : ""}`}>
      <a className="wordmark" href="/" aria-label="Hof-Lebensgemeinschaft Hamburg Startseite">
        Hof-Lebensgemeinschaft Hamburg
      </a>

      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {siteConfig.nav.map((item) => (
          <NavLink key={item.href} to={item.href}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`mobile-drawer ${isOpen ? "mobile-drawer--open" : ""}`}>
        <nav aria-label="Mobile Hauptnavigation">
          {siteConfig.nav.map((item) => (
            <NavLink key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

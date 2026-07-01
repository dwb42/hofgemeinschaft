import { NavLink } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">{siteConfig.name}</p>
          <p className="footer-claim">{siteConfig.claim}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer Navigation">
          {siteConfig.nav.map((item) => (
            <NavLink key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
          {siteConfig.footerLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

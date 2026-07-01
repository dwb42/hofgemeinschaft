import { Mail, MessageCircle, Phone } from "lucide-react";
import { contactLinks, siteConfig } from "../config/siteConfig";

type ContactBlockProps = {
  title: string;
  text: string;
  intro?: string;
  bullets?: string[];
};

export function ContactBlock({ title, text, intro, bullets }: ContactBlockProps) {
  return (
    <section className="contact-block">
      <div className="contact-copy">
        <h2>{title}</h2>
        <p>{text}</p>
        {intro && <p className="contact-intro">{intro}</p>}
        {bullets && (
          <ul className="plain-list">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
      <ContactMethods />
    </section>
  );
}

export function ContactMethods() {
  return (
    <div className="contact-methods" aria-label="Kontaktmöglichkeiten">
      <a href={contactLinks.phone}>
        <Phone size={22} />
        <span>Telefon</span>
        <strong>{siteConfig.contact.phone}</strong>
      </a>
      <a href={contactLinks.whatsapp}>
        <MessageCircle size={22} />
        <span>WhatsApp</span>
        <strong>{siteConfig.contact.whatsapp}</strong>
      </a>
      <a href={contactLinks.email}>
        <Mail size={22} />
        <span>E-Mail</span>
        <strong>{siteConfig.contact.email}</strong>
      </a>
    </div>
  );
}

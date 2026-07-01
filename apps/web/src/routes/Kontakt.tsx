import { Seo } from "../components/Seo";
import { kontaktPage, seo } from "../content/pages";
import { ContactMethods } from "../sections/ContactBlock";
import { Hero } from "../sections/Hero";
import { TextSection } from "../sections/TextSection";

export function Kontakt() {
  return (
    <>
      <Seo {...seo.kontakt} />
      <Hero title={kontaktPage.hero.title} text={kontaktPage.hero.text} image={kontaktPage.hero.image} />

      <div className="page-shell">
        <section className="contact-only" aria-label="Kontaktmöglichkeiten">
          <h2>Kontaktmöglichkeiten</h2>
          <ContactMethods />
        </section>

        {kontaktPage.sections.map((section) => (
          <TextSection key={section.title} {...section} />
        ))}
      </div>
    </>
  );
}

import { Seo } from "../components/Seo";
import { ButtonLink } from "../components/ButtonLink";
import { ContactBlock } from "../sections/ContactBlock";
import { Hero } from "../sections/Hero";
import { TextSection } from "../sections/TextSection";
import { homePage, seo } from "../content/pages";

export function Home() {
  return (
    <>
      <Seo {...seo.home} />
      <Hero home title={homePage.hero.title} text={homePage.hero.text} actions={homePage.hero.actions} />

      <div className="page-shell">
        <TextSection title={homePage.intro.title} paragraphs={homePage.intro.paragraphs} />

        <section className="entry-grid" aria-label="Zwei Einstiegsmöglichkeiten">
          {homePage.cards.map((card) => (
            <article className="entry-card" key={card.title}>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <ButtonLink href={card.href} variant="secondary">
                {card.label}
              </ButtonLink>
            </article>
          ))}
        </section>

        {homePage.sections.map((section) => (
          <TextSection key={section.title} {...section} />
        ))}

        <ContactBlock title={homePage.contactTeaser.title} text={homePage.contactTeaser.text} />

        <section className="link-row" aria-label="Weiterführende Links">
          {homePage.contactTeaser.links.map((link) => (
            <ButtonLink key={link.href} href={link.href} variant="secondary">
              {link.label}
            </ButtonLink>
          ))}
        </section>
      </div>
    </>
  );
}

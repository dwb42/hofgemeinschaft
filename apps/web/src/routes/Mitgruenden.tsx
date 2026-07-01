import { Seo } from "../components/Seo";
import { seo, mitgruendenPage } from "../content/pages";
import { ChecklistSection } from "../sections/ChecklistSection";
import { ContactBlock } from "../sections/ContactBlock";
import { Hero } from "../sections/Hero";
import { TextSection } from "../sections/TextSection";

export function Mitgruenden() {
  return (
    <>
      <Seo {...seo.mitgruenden} />
      <Hero title={mitgruendenPage.hero.title} text={mitgruendenPage.hero.text} image={mitgruendenPage.hero.image} />

      <div className="page-shell">
        <TextSection {...mitgruendenPage.sections[0]} />

        <section className="split-checklists" aria-label="Einordnung Mitgründen">
          <ChecklistSection title={mitgruendenPage.positive.title} items={mitgruendenPage.positive.items} />
          <ChecklistSection title={mitgruendenPage.negative.title} items={mitgruendenPage.negative.items} tone="dark" />
        </section>

        {mitgruendenPage.sections.slice(1).map((section) => (
          <TextSection key={section.title} {...section} />
        ))}

        <ContactBlock {...mitgruendenPage.contact} />
      </div>
    </>
  );
}

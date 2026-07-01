import { Seo } from "../components/Seo";
import { hofGesuchtPage, seo } from "../content/pages";
import { ChecklistSection } from "../sections/ChecklistSection";
import { ContactBlock } from "../sections/ContactBlock";
import { Hero } from "../sections/Hero";
import { TextSection } from "../sections/TextSection";

export function HofGesucht() {
  return (
    <>
      <Seo {...seo.hofGesucht} />
      <Hero title={hofGesuchtPage.hero.title} text={hofGesuchtPage.hero.text} image={hofGesuchtPage.hero.image} />

      <div className="page-shell">
        <section className="criteria-section">
          <div>
            <h2>{hofGesuchtPage.criteria.title}</h2>
            <p>{hofGesuchtPage.criteria.text}</p>
          </div>
          <ChecklistSection title="Kriterien" items={hofGesuchtPage.criteria.items} />
        </section>

        {hofGesuchtPage.sections.map((section) => (
          <TextSection key={section.title} {...section} />
        ))}

        <ContactBlock {...hofGesuchtPage.contact} />
      </div>
    </>
  );
}

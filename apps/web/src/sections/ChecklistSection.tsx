import { Check } from "lucide-react";

type ChecklistSectionProps = {
  title: string;
  items: string[];
  tone?: "light" | "dark";
};

export function ChecklistSection({ title, items, tone = "light" }: ChecklistSectionProps) {
  return (
    <section className={`checklist-section checklist-section--${tone}`}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check size={19} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

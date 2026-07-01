type TextSectionProps = {
  title: string;
  paragraphs: string[];
  image?: string;
  flip?: boolean;
};

export function TextSection({ title, paragraphs, image, flip = false }: TextSectionProps) {
  return (
    <section className={`content-section ${image ? "content-section--with-image" : ""} ${flip ? "content-section--flip" : ""}`}>
      <div className="content-copy">
        <h2>{title}</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {image && <img className="section-image" src={image} alt="" />}
    </section>
  );
}

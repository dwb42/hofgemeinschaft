import { ButtonLink } from "../components/ButtonLink";
import { images } from "../config/images";

type HeroAction = {
  label: string;
  href: string;
};

type HeroProps = {
  title: string;
  text: string;
  image?: string;
  actions?: HeroAction[];
  home?: boolean;
};

export function Hero({ title, text, image, actions, home = false }: HeroProps) {
  return (
    <section className={`hero ${home ? "hero--home" : ""}`}>
      <picture>
        {home && <source media="(max-width: 700px)" srcSet={images.heroMobile} />}
        <img src={home ? images.heroDesktop : image} alt="" className="hero-image" />
      </picture>
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">Hof-Lebensgemeinschaft Hamburg</p>
        <h1>{title}</h1>
        <p className="hero-text">{text}</p>
        {actions && (
          <div className="hero-actions">
            {actions.map((action) => (
              <ButtonLink key={action.href} href={action.href}>
                {action.label}
              </ButtonLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

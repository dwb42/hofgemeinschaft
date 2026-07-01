import { useEffect } from "react";
import type { Seo as SeoContent } from "../content/pages";

export function Seo({ title, description }: SeoContent) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, [description, title]);

  return null;
}

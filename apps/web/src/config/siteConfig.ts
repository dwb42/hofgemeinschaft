export const siteConfig = {
  name: "Hof-Lebensgemeinschaft Hamburg",
  claim: "Menschen und Hof gesucht für eine neue Hof-Lebensgemeinschaft im Hamburger Umland.",
  contact: {
    phone: "[TELEFONNUMMER]",
    whatsapp: "[WHATSAPP-LINK]",
    email: "[E-MAIL-ADRESSE]"
  },
  nav: [
    { label: "Start", href: "/" },
    { label: "Mitgründen", href: "/mitgruenden" },
    { label: "Hof gesucht", href: "/hof-gesucht" },
    { label: "Kontakt", href: "/kontakt" }
  ],
  footerLinks: [
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" }
  ]
};

export const contactLinks = {
  phone: `tel:${siteConfig.contact.phone}`,
  whatsapp: siteConfig.contact.whatsapp,
  email: `mailto:${siteConfig.contact.email}`
};

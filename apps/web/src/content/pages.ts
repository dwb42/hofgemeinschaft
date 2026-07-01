import { images } from "../config/images";

export type Seo = {
  title: string;
  description: string;
};

export const seo: Record<string, Seo> = {
  home: {
    title: "Hof-Lebensgemeinschaft Hamburg – Menschen und Hof gesucht",
    description:
      "Wir suchen Menschen und einen Hof für eine neue Hof-Lebensgemeinschaft im Hamburger Umland: Wohnen, Leben, Arbeiten, Kinder, Garten, Gemeinschaft und Nähe zu Hamburg."
  },
  mitgruenden: {
    title: "Mitgründen – Hof-Lebensgemeinschaft Hamburg",
    description:
      "Raus aufs Land, nah an Hamburg, rein ins Hofleben: Wir suchen Menschen, die eine Hof-Lebensgemeinschaft von Anfang an mit aufbauen möchten."
  },
  hofGesucht: {
    title: "Hof gesucht – Hof-Lebensgemeinschaft Hamburg",
    description:
      "Gesucht wird ein Hof, Resthof, Ferienhof, Gutshaus oder Hofensemble im Hamburger Umland mit Potenzial für Wohnen, Arbeiten, Kinder, Garten und Gemeinschaft."
  },
  kontakt: {
    title: "Kontakt – Hof-Lebensgemeinschaft Hamburg",
    description:
      "Kontakt zur Hof-Lebensgemeinschaft Hamburg: Melde dich per Telefon, WhatsApp oder E-Mail, wenn du mitgründen möchtest oder einen passenden Hof kennst."
  }
};

export const homePage = {
  hero: {
    title: "Wir suchen Menschen und einen Hof für eine neue Hof-Lebensgemeinschaft im Hamburger Umland.",
    text:
      "Ein Ort zum Wohnen, Leben und Arbeiten. Weit genug draußen, dass man die Vögel hört. Nah genug an Hamburg, dass Freunde, Familie und Alltag erreichbar bleiben.",
    actions: [
      { label: "Ich möchte mitgründen", href: "/mitgruenden" },
      { label: "Ich habe oder kenne einen Hof", href: "/hof-gesucht" }
    ]
  },
  intro: {
    title: "Worum es geht",
    paragraphs: [
      "Wir möchten einen Hof im Hamburger Umland zu einem Ort entwickeln, an dem gewohnt, gelebt und gearbeitet wird. Mit privaten Wohnbereichen, gemeinschaftlichen Flächen, Garten, Werkstätten, Kindern, Tieren, Gästen und genug Nähe zu Hamburg, damit Verbindung bleibt.",
      "Wir suchen keinen Aussteigerort, keine Kommune und kein Investorenprojekt. Sondern einen bodenständigen, lebendigen Hof für Menschen, die Verantwortung übernehmen und gerne etwas aufbauen."
    ]
  },
  cards: [
    {
      title: "Du möchtest mitgründen?",
      text:
        "Wir suchen Menschen, die nicht erst einziehen möchten, wenn alles fertig ist. Sondern Menschen, die Lust haben, von Anfang an mitzudenken, mitzusuchen, mitzuentscheiden und später vielleicht dort zu leben.",
      label: "Mehr zum Mitgründen",
      href: "/mitgruenden"
    },
    {
      title: "Sie haben oder kennen einen Hof?",
      text:
        "Wir suchen einen Hof, Resthof, Ferienhof, ein Gutshaus oder Hofensemble im Hamburger Umland — einen Ort mit Substanz, Charakter und Potenzial für neues Leben.",
      label: "Mehr zum gesuchten Hof",
      href: "/hof-gesucht"
    }
  ],
  sections: [
    {
      title: "Der Hof",
      image: images.hofRegion,
      paragraphs: [
        "Gesucht wird ein Hof, Resthof, Ferienhof, Gutshaus oder Hofensemble im Hamburger Umland. Wichtig sind mehrere Wohnmöglichkeiten oder entsprechendes Ausbaupotenzial, Nebengebäude, Garten- und Grünflächen, ein schönes Umfeld und eine gute Verbindung nach Hamburg.",
        "Wasser, alter Baumbestand, Werkstattflächen, Stallungen, Obstwiese, Weide oder weitere Entwicklungsmöglichkeiten wären großartig. Der Ort muss nicht fertig sein. Er muss passen."
      ]
    },
    {
      title: "Die Menschen",
      image: images.gemeinschaftTafel,
      flip: true,
      paragraphs: [
        "Wir suchen ehrliche, offene, optimistische Menschen mit Herz, Hirn und Tatkraft. Familien mit Kindern sind ausdrücklich willkommen, genauso Paare und Singles. Uns ist nicht wichtig, dass alle gleich leben, gleich arbeiten oder gleich denken. Wichtig sind Fairness, Humor, Verlässlichkeit, Großzügigkeit und Lust darauf, einen Ort gemeinsam aufzubauen."
      ]
    },
    {
      title: "Wohnen, leben, arbeiten — nicht nur nebeneinander her",
      image: images.arbeitenWerkstatt,
      paragraphs: [
        "Der Hof soll kein Schlafdorf werden. Wir wünschen uns einen Ort, an dem Menschen wohnen, arbeiten, gärtnern, bauen, kochen, feiern und Verantwortung teilen. Mit privaten Rückzugsräumen und gemeinschaftlichen Flächen. Mit Kindern, Tieren, Werkstätten, vielleicht einem gemeinsamen Büro, kleinen Betrieben, Gästen, Veranstaltungen oder später einem Hofcafé.",
        "Was genau entsteht, hängt vom Ort und von den Menschen ab. Aber klar ist: Es soll Leben auf dem Hof sein."
      ]
    },
    {
      title: "Wo wir gerade stehen",
      flip: true,
      paragraphs: [
        "Wir sind in der frühen Gründungs- und Suchphase. Das konkrete Objekt steht noch nicht fest. Auch die genaue Struktur wird sich mit dem passenden Ort und den passenden Menschen entwickeln.",
        "Initiiert wird das Projekt derzeit von Dietrich aus Hamburg, Vater von zwei Töchtern, und einer weiteren Familie, die sich dem Initiatorenkreis gerade anschließt.",
        "Als Orientierung stellen wir uns einen Kern aus etwa 4–5 Parteien mit insgesamt ungefähr 12–18 Menschen vor. Jetzt geht es vor allem darum, die richtigen Menschen und den richtigen Hof zu finden."
      ]
    }
  ],
  contactTeaser: {
    title: "Klingt interessant?",
    text:
      "Wenn dich die Idee anspricht oder wenn Sie einen passenden Hof kennen, freuen wir uns über eine Nachricht. Ruf an, schreib eine WhatsApp oder schick eine Mail.",
    links: [
      { label: "Kontakt aufnehmen", href: "/kontakt" },
      { label: "Mehr zum Mitgründen", href: "/mitgruenden" },
      { label: "Mehr zum gesuchten Hof", href: "/hof-gesucht" }
    ]
  }
};

export const mitgruendenPage = {
  hero: {
    title: "Raus aufs Land. Nah an Hamburg. Rein ins Hofleben.",
    text:
      "Wir suchen Menschen, die Lust haben, eine Hof-Lebensgemeinschaft von Anfang an mit aufzubauen — mit privaten Rückzugsräumen, gemeinschaftlichem Leben, Kindern, Garten, Arbeit und Verantwortung.",
    image: images.mitgruendenHero
  },
  sections: [
    {
      title: "Was entstehen soll",
      image: images.gemeinschaftTafel,
      paragraphs: [
        "Wir stellen uns einen Hof vor, auf dem Kinder draußen spielen, Menschen in Werkstätten, Ateliers oder Büros arbeiten, abends jemand den Grill anmacht, Hühner über den Hof laufen, Gäste vorbeikommen und trotzdem jede Partei ihren eigenen Rückzugsort hat.",
        "Kein Dauerplenum, keine Szene, kein Hof als romantische Kulisse. Wir suchen Menschen mit Herz, Hirn, Humor und Tatkraft — und mit Lust auf echtes Hofleben."
      ]
    },
    {
      title: "Der Kern",
      paragraphs: [
        "Als Orientierung stellen wir uns einen kleinen Kern aus etwa 4–5 Parteien vor, insgesamt ungefähr 12–18 Menschen. Gerne Familien mit Kindern, Paare und Singles. Unterschiedliche Hintergründe sind willkommen: unternehmerisch, handwerklich, akademisch, kreativ, familiär, praktisch.",
        "Entscheidend ist nicht der perfekte Lebenslauf. Entscheidend ist, dass es menschlich passt."
      ]
    },
    {
      title: "Kinder gehören ausdrücklich dazu",
      image: images.kinderHofleben,
      flip: true,
      paragraphs: [
        "Kinder sollen auf dem Hof nicht stören, sondern dazugehören. Wir wünschen uns mehrere Familien mit Kindern, damit Freundschaften, Spiel, Trubel und gemeinsames Aufwachsen möglich werden. Ein Hof mit Kindern ist lauter, lebendiger und manchmal chaotischer. Genau das darf er sein."
      ]
    },
    {
      title: "Mieten ist ausdrücklich möglich",
      paragraphs: [
        "Man muss nicht von Anfang an Eigenkapital einbringen, um Teil des Projekts zu werden. Das wahrscheinlichste Anfangsmodell ist, dass eine Person oder ein kleiner Kreis den Hof erwirbt und andere Parteien zunächst mieten.",
        "Wenn sich später zeigt, dass der Ort, die Menschen und die Struktur langfristig tragen, können Beteiligungs- oder Eigentumsmodelle dazukommen. Aber am Anfang geht es nicht darum, sofort die perfekte Rechtsform zu bauen. Am Anfang geht es darum, die richtigen Menschen und den richtigen Hof zu finden."
      ]
    },
    {
      title: "Der Hof soll kein Schlafdorf werden",
      image: images.arbeitenWerkstatt,
      paragraphs: [
        "Wir wollen dort nicht nur wohnen. Der Hof soll ein Ort sein, an dem auch gearbeitet wird: in Werkstätten, Ateliers, kleinen Betrieben, einem gemeinsamen Büro, vielleicht später auch mit Hofcafé, Feriengästen, Veranstaltungen oder einer kleinen landwirtschaftlichen Nutzung. Was genau entsteht, hängt vom Ort und von den Menschen ab. Aber klar ist: Es soll Leben auf dem Hof sein."
      ]
    }
  ],
  positive: {
    title: "Das könnte zu dir passen, wenn …",
    items: [
      "Du hast Lust auf mehr Natur, Raum und Lebendigkeit.",
      "Du möchtest Hamburg nicht komplett hinter dir lassen.",
      "Du gestaltest gerne, statt nur zu konsumieren.",
      "Du findest Kinder, Trubel und Leben auf dem Hof eher bereichernd als störend.",
      "Du magst Gemeinschaft, brauchst aber auch Privatheit.",
      "Du kannst Verantwortung übernehmen.",
      "Du bist pragmatisch, offen und eher positiv unterwegs.",
      "Du kannst mit Unfertigem umgehen."
    ]
  },
  negative: {
    title: "Und eher nicht, wenn …",
    items: [
      "Du suchst vor allem eine fertige Mietwohnung im Grünen.",
      "Du möchtest möglichst wenig mit anderen zu tun haben.",
      "Du findest Gemeinschaft romantisch, willst aber keine Verantwortung übernehmen.",
      "Du erwartest, dass schon alles geklärt ist.",
      "Du siehst bei jeder Idee zuerst die zehn Gründe, warum sie nicht funktioniert.",
      "Du liebst endlose Grundsatzdebatten.",
      "Du möchtest starke dogmatische politische, spirituelle oder sonstige Weltbilder in die Gruppe tragen."
    ]
  },
  contact: {
    title: "Wenn dich das anspricht",
    text:
      "Ruf kurz an, schreib eine WhatsApp oder schick eine Mail. Eine erste Nachricht muss nicht perfekt sein — Hauptsache, man bekommt ein Gefühl füreinander.",
    intro: "Spannend wäre zum Beispiel:",
    bullets: [
      "Wer bist du / wer seid ihr?",
      "Wo lebt ihr aktuell?",
      "Was reizt dich an einer Hof-Lebensgemeinschaft?",
      "Würdest du dort perspektivisch wirklich leben wollen?",
      "Was bringst du mit — menschlich, praktisch, beruflich, finanziell oder ideell?",
      "Was wäre für dich ein Muss?",
      "Was wäre für dich ein No-Go?",
      "Hast du Ideen zur Region oder kennst du sogar ein passendes Objekt?"
    ]
  }
};

export const hofGesuchtPage = {
  hero: {
    title: "Wir suchen einen Hof, dessen Geschichte weitergehen darf.",
    text:
      "Einen Hof, Resthof, Ferienhof, ein Gutshaus oder Hofensemble im Hamburger Umland — mit Substanz, Charakter und Potenzial für Wohnen, Arbeiten, Kinder, Garten, Gemeinschaft und neues Leben.",
    image: images.hofGesuchtHero
  },
  criteria: {
    title: "Der passende Ort",
    text:
      "Gesucht wird ein Hof mit Substanz und Potenzial. Er muss nicht fertig sein. Er muss auch nicht schon perfekt zu unserer Idee passen. Wichtig ist, dass dort mehrere Wohnbereiche entstehen können und dass es genug Raum gibt für gemeinschaftliche Flächen, Garten, Nebengebäude, Werkstätten und Leben im Freien.",
    items: [
      "Hof, Resthof, Ferienhof, Gutshaus oder Hofensemble",
      "Hamburger Umland / Norddeutschland mit guter Verbindung nach Hamburg",
      "mehrere Wohneinheiten oder Ausbaupotenzial",
      "Nebengebäude, Scheunen, Stallungen oder Werkstattflächen",
      "Garten- und Grünflächen",
      "gerne Wasser, alter Baumbestand, Obstwiese, Weide oder besondere Lage",
      "Schule, Kindergarten und Einkaufsmöglichkeiten in erreichbarer Nähe",
      "Entwicklungsmöglichkeiten für Wohnen, Arbeiten und gemeinschaftliche Nutzung"
    ]
  },
  sections: [
    {
      title: "Was entstehen soll",
      image: images.gemeinschaftTafel,
      paragraphs: [
        "Wir möchten einen Hof nicht einfach kaufen und verwerten. Wir möchten ihn bewohnen, pflegen und weiterentwickeln. Perspektivisch soll dort ein kleiner Kreis aus etwa 4–5 Parteien leben: Familien mit Kindern, Paare und Singles.",
        "Der Hof soll ein Ort werden, an dem gewohnt, gearbeitet, gegärtnert, gebaut, gekocht, gefeiert und Verantwortung geteilt wird. Nicht als romantische Landflucht, sondern als langfristig tragfähiges Projekt."
      ]
    },
    {
      title: "Teil der Region werden",
      image: images.hofRegion,
      flip: true,
      paragraphs: [
        "Wir möchten nicht als abgeschlossene Insel irgendwo auftauchen. Der Hof soll Teil der Region und der Gemeinde werden. Wir wollen uns einbringen, Nachbarschaft ernst nehmen und schauen, was vor Ort gebraucht wird und was wirklich passt.",
        "Genauso wichtig ist: Auch die Umgebung muss zu uns passen. Landschaft, Erreichbarkeit, Schule, Kindergarten, Einkaufsmöglichkeiten, Nachbarschaft und der allgemeine Vibe der Gegend spielen eine große Rolle."
      ]
    },
    {
      title: "Ernsthaftes Interesse und ein fairer Umgang",
      paragraphs: [
        "Wir sind ernsthafte Interessenten und bereit, für ein passendes Objekt einen fairen Preis zu zahlen. Uns geht es nicht um Spekulation und nicht darum, einen Hof möglichst billig zu bekommen. Wir suchen einen Ort, den wir langfristig tragen können und mit dem wir respektvoll umgehen.",
        "Wir sind echte, authentische Menschen mit klarem Kopf, Tatkraft und dem Wunsch, etwas Schönes aufzubauen."
      ]
    },
    {
      title: "Wohnen, Arbeiten, Hofleben",
      image: images.arbeitenWerkstatt,
      paragraphs: [
        "Neben privaten Wohnbereichen stellen wir uns gemeinschaftliche Flächen, Garten, Tiere, Werkstätten, ein gemeinsames Büro, kleine Betriebe, Gästeunterkünfte, vielleicht ein Hofcafé oder Veranstaltungen vor. Auch eine bestehende oder kleine landwirtschaftliche Nutzung kann Teil des Ganzen bleiben, wenn es zum Ort passt.",
        "Entscheidend ist nicht ein starres Konzept, sondern dass der Hof wieder oder weiter ein lebendiger Ort ist."
      ]
    },
    {
      title: "Ein guter Übergang",
      paragraphs: [
        "Falls bisherige Eigentümerinnen oder Eigentümer sich vorstellen können, auch nach einem Verkauf in einer eigenen Wohneinheit auf dem Hof zu bleiben, sind wir offen, darüber zu sprechen. Das ist kein Muss und kein fertiges Modell — aber eine Möglichkeit, wenn es menschlich und praktisch passt."
      ]
    }
  ],
  contact: {
    title: "Haben Sie einen passenden Hof oder einen Hinweis?",
    text:
      "Wenn Sie einen Hof besitzen oder jemanden kennen, für den diese Idee passen könnte, melden Sie sich gerne direkt per Telefon, WhatsApp oder E-Mail. Eine grobe erste Beschreibung reicht völlig.",
    intro: "Hilfreich wäre zum Beispiel:",
    bullets: [
      "Wo liegt der Hof ungefähr?",
      "Welche Art Objekt ist es?",
      "Welche Gebäude gibt es?",
      "Wie viele Wohnbereiche gibt es aktuell?",
      "Gibt es Ausbaupotenzial?",
      "Wie groß sind Grundstück und Grünflächen ungefähr?",
      "Gibt es Besonderheiten wie Wasser, alter Baumbestand, Scheune, Werkstatt oder Stallungen?",
      "Gibt es eine Preisvorstellung oder zeitliche Vorstellungen?",
      "Wäre Wohnenbleiben / Altenteil grundsätzlich ein Thema?"
    ]
  }
};

export const kontaktPage = {
  hero: {
    title: "Melde dich, wenn es passt.",
    text:
      "Ob du mitgründen möchtest, einen Hof besitzt oder einen Hinweis hast: Ruf an, schreib eine WhatsApp oder schick eine Mail. Eine erste Nachricht muss nicht perfekt sein.",
    image: images.kontaktDetail
  },
  sections: [
    {
      title: "Wer dahintersteht",
      paragraphs: [
        "Initiiert wird die Hof-Lebensgemeinschaft Hamburg derzeit von einem kleinen Kreis aus Hamburg: Dietrich, Vater von zwei Töchtern, und einer weiteren Familie, die sich dem Projekt gerade anschließt. Uns verbindet der Wunsch, einen Hof im Hamburger Umland zu einem lebendigen Ort für Wohnen, Arbeiten, Kinder, Gemeinschaft und Natur zu entwickeln."
      ]
    },
    {
      title: "Für Mitgründerinnen und Mitgründer",
      paragraphs: [
        "Wenn du dich für das Mitgründen interessierst, erzähl gern kurz, wer du bist, was dich an der Idee reizt und was du mitbringen würdest. Es geht nicht um perfekte Bewerbungsunterlagen, sondern darum, ein erstes Gefühl füreinander zu bekommen."
      ]
    },
    {
      title: "Für Hofeigentümerinnen, Hofeigentümer und Hinweisgeber",
      paragraphs: [
        "Wenn Sie einen passenden Hof besitzen oder von einem Ort wissen, der zu dieser Idee passen könnte, freuen wir uns über eine Nachricht. Eine grobe Beschreibung reicht für den Anfang völlig. Lage, Gebäude, Wohnmöglichkeiten, Nebengebäude, Grundstück, Preisvorstellung und ein paar Fotos oder Links helfen natürlich."
      ]
    }
  ]
};

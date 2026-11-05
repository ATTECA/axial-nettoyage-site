export const site = {
  name: "Axial Nettoyage",
  legalName: "Axial Nettoyage SASU",
  phone: "07 64 00 86 49",
  email: "axial.nettoyage34@gmail.com",
  address: "48 rue Claude Balbastre, 34070 Montpellier",
  hours: "Lundi au vendredi, 9h–12h et 14h–18h",
  hoursNote: "Interventions tôt le matin, le soir ou le week-end",
  zone: "Montpellier et tout l’Hérault",
};

// Links built from the info above, shared by the header and the footer
// "07 64 00 86 49" -> "tel:+33764008649": tapping it starts a call on a phone
export const phoneHref = "tel:+33" + site.phone.replace(/\s/g, "").slice(1);
export const emailHref = "mailto:" + site.email;
// Opens the address in Google Maps (app on phone, website on computer)
export const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(site.address);

// title + slug: used by the header, the footer and the home page
// description + icon: used by the services section of the home page
// (  = non-breaking space before ":" in French)
export const services = [
  {
    title: "Nettoyage et entretien de bureaux",
    slug: "bureaux",
    icon: "tabler:building",
    description:
      "Bureaux, open spaces et sanitaires, entretenus avant l’arrivée ou après le départ de vos équipes.",
  },
  {
    title: "Entretien des parties communes",
    slug: "parties-communes",
    icon: "tabler:stairs",
    description:
      "Halls, escaliers, ascenseurs, couloirs et locaux poubelles, sur un rythme fixe, pour les syndics et gestionnaires.",
  },
  {
    title: "Nettoyage de bâtiments industriels",
    slug: "batiments-industriels",
    icon: "tabler:building-factory-2",
    description:
      "Ateliers, entrepôts et locaux techniques, avec le matériel adapté aux grandes surfaces.",
  },
  {
    title: "Nettoyage de fin de chantier",
    slug: "fin-de-chantier",
    icon: "tabler:helmet",
    description:
      "Remise en état après travaux pour livrer un site propre : poussières, traces, sols et vitrages.",
  },
  {
    title: "Nettoyage de vitres",
    slug: "vitres",
    icon: "tabler:window",
    description:
      "Vitres, surfaces vitrées et menuiseries, en passage régulier ou ponctuel.",
  },
  {
    title: "Gestion des conteneurs à déchets",
    slug: "conteneurs-dechets",
    icon: "tabler:trash",
    description:
      "Nettoyage des conteneurs et des locaux poubelles, pour les copropriétés et les entreprises.",
  },
  {
    title: "Remise en état après travaux ou déménagement",
    slug: "remise-en-etat",
    icon: "tabler:truck-loading",
    description:
      "Après une rénovation ou un déménagement, nous remettons le local en état avant sa remise en service.",
  },
];

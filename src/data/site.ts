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

export const services = [
  { title: "Nettoyage et entretien de bureaux", slug: "bureaux" },
  { title: "Entretien des parties communes", slug: "parties-communes" },
  { title: "Nettoyage de bâtiments industriels", slug: "batiments-industriels" },
  { title: "Nettoyage de fin de chantier", slug: "fin-de-chantier" },
  { title: "Nettoyage de vitres", slug: "vitres" },
  { title: "Gestion des conteneurs à déchets", slug: "conteneurs-dechets" },
  { title: "Remise en état après travaux ou déménagement", slug: "remise-en-etat" },
];

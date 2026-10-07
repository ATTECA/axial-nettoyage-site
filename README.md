# Axial Nettoyage — site vitrine

Site vitrine de **Axial Nettoyage** (SAS Axial Nettoyage), société de nettoyage professionnel basée à Montpellier et intervenant dans tout l'Hérault.

Le site sert à présenter l'entreprise et ses services, et à générer des demandes de devis et des appels. **L'action prioritaire est l'appel téléphonique** : le numéro doit être visible partout, avec un bouton « Appeler » sur mobile. Il n'y a ni vente en ligne ni prise de rendez-vous.

- Domaine prévu : `axialnettoyage.fr` (OVH, à brancher au moment de la mise en ligne)
- Public visé : entreprises, syndics de copropriété, gestionnaires immobiliers, professionnels du BTP, collectivités et associations. Pas de particuliers.

---

## Stack technique

| Élément              | Choix                                                             |
| -------------------- | ----------------------------------------------------------------- |
| Framework            | Astro + TypeScript                                                |
| Style                | Tailwind CSS                                                      |
| Contenu des services | Content collections (un fichier Markdown par service)             |
| Formulaires          | Web3Forms, protégés par Cloudflare Turnstile et un champ honeypot |
| Hébergement          | Cloudflare Pages, déploiement automatique depuis GitHub           |
| Statistiques         | Cloudflare Web Analytics (sans cookies)                           |
| Icônes               | Tabler, via `astro-icon`                                          |
| Polices              | Fontsource, hébergées sur le site                                 |
| SEO                  | Sitemap automatique, données structurées `LocalBusiness`          |

---

## Arborescence du site

```
/                                      Accueil (section services : /#services)
/services/nettoyage-de-bureaux
/services/parties-communes
/services/nettoyage-industriel
/services/fin-de-chantier              (inclut la remise en état après travaux ou déménagement)
/services/nettoyage-de-vitres
/services/gestion-des-conteneurs
/devis                                 Formulaire de devis
/contact                               Coordonnées, localisation, messages
/mentions-legales
/politique-de-confidentialite
```

Le lien « Nos services » du menu renvoie vers `/#services`, et non vers une page dédiée.

> La remise en état est pour l'instant regroupée avec la fin de chantier (6 pages pour 7 services). Si elle doit avoir sa propre page, il suffit d'ajouter un fichier Markdown dans `src/content/services/`.

---

## Structure du projet

```
src/
  components/
    Header.astro
    Footer.astro
    Hero.astro
    ArgumentsBand.astro
    ServiceRow.astro
    CtaBand.astro
    QuoteForm.astro
    ContactForm.astro
  layouts/
    BaseLayout.astro          → head, SEO, header, footer
  content/
    services/                 → un .md par service (titre, description, image, contenu)
  pages/
    index.astro
    devis.astro
    contact.astro
    mentions-legales.astro
    politique-de-confidentialite.astro
    services/[slug].astro     → génère les pages services à partir d'un même template
  assets/
    images/                   → optimisées automatiquement par Astro
  styles/
    global.css
public/
  favicon, robots.txt
```

---

## Développement

Prérequis : Node.js (version LTS) et npm.

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement (http://localhost:4321)
npm run build      # build de production dans dist/
npm run preview    # prévisualiser le build
```

### Variables d'environnement

À définir dans un fichier `.env` en local (non versionné) et dans les réglages du projet Cloudflare Pages :

| Variable                    | Rôle                                                                  |
| --------------------------- | --------------------------------------------------------------------- |
| `PUBLIC_WEB3FORMS_KEY`      | Clé d'accès Web3Forms (les demandes arrivent sur l'adresse du client) |
| `PUBLIC_TURNSTILE_SITE_KEY` | Clé de site Cloudflare Turnstile                                      |

Les noms ci-dessus sont proposés et peuvent changer pendant le développement.

---

## Déploiement

1. Le dépôt GitHub est relié à Cloudflare Pages.
2. Chaque push sur `main` déclenche un build et une mise en ligne.
3. Réglages du build : commande `npm run build`, dossier de sortie `dist`.
4. À la mise en ligne, on branche le domaine `axialnettoyage.fr` (OVH) sur Cloudflare Pages et on active Web Analytics.

---

## Contenu de référence

### Identité

- Nom affiché : Axial Nettoyage
- Raison sociale : SAS Axial Nettoyage
- SIRET : 938 399 573 00014
- Responsable de la publication : M. Nouredine AZAHOUM
- Expérience : 15 ans de métier (seul chiffre fourni)

### Coordonnées

- Adresse : 48 rue Claude Balbastre, 34070 Montpellier ([Google Maps](https://share.google/bAvtMGjbU4ze1OFN8))
- Téléphone : 07 64 00 86 49
- E-mail (affiché et réception des demandes) : axial.nettoyage34@gmail.com
- Horaires du standard : du lundi au vendredi, 9h–12h et 14h–18h
- Interventions possibles tôt le matin, le soir et le week-end (à indiquer clairement sur le site)
- Réseaux sociaux, fiche Google, avis : aucun pour le moment

### Services

- Nettoyage et entretien de bureaux
- Entretien des parties communes (halls, escaliers, ascenseurs)
- Nettoyage industriel de bâtiments
- Nettoyage de fin de chantier
- Nettoyage de vitres
- Gestion des conteneurs à déchets
- Remise en état après travaux ou déménagement

### Arguments différenciants

- **Horaires adaptés** : tôt le matin, le soir ou le week-end, sans gêner l'activité.
- **Interlocuteur unique** : un responsable dédié et réactif.
- **Prestations sur mesure** : selon la surface, la fréquence et les exigences du site.
- **Équipements professionnels** : autolaveuses, aspirateurs industriels, monobrosses, nettoyeurs haute pression.
- **Devis gratuit et rapide**, avec visite sur place si nécessaire.

### Offre commerciale

- Devis gratuit, déplacement sur site
- Paiement : chèque, virement

### Formulaire de devis

Champs requis : nom, téléphone, e-mail, adresse, description de la demande.

---

## Charte graphique

- Impression recherchée : professionnelle, dynamique, sérieuse
- Style : sobre et corporate
- Couleurs souhaitées : **bleu, blanc, vert**
- Couleurs à éviter : marron, beige foncé, gris terne, rouge
- Logo : à créer par le graphiste (thème : nettoyage de bureaux ou de bâtiments)
- Photos : aucune existante, elles seront générées par IA (nettoyage, bureaux, bâtiments)
- Slogan : aucun pour le moment

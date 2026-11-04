# Axial Nettoyage — site vitrine

Site vitrine de **Axial Nettoyage** (SAS Axial Nettoyage), société de nettoyage professionnel basée à Montpellier et intervenant dans tout l'Hérault.

Le site sert à présenter l'entreprise et ses services, et à générer des demandes de devis et des appels. **L'action prioritaire est l'appel téléphonique** : le numéro doit être visible partout, avec un bouton « Appeler » sur mobile. Il n'y a ni vente en ligne ni prise de rendez-vous.

- Domaine prévu : `axialnettoyage.fr` (OVH, à brancher au moment de la mise en ligne)
- Public visé : entreprises, syndics de copropriété, gestionnaires immobiliers, professionnels du BTP, collectivités et associations. Pas de particuliers.

---

## Stack technique

| Élément              | Choix                                                                           |
| -------------------- | ------------------------------------------------------------------------------- |
| Framework            | Astro + TypeScript                                                              |
| Style                | Tailwind CSS                                                                    |
| Contenu des services | Content collections (un fichier Markdown par service)                           |
| Formulaires          | Web3Forms (offre gratuite), protégés par un champ honeypot (hCaptcha en option) |
| Hébergement          | Cloudflare Workers (fichiers statiques), déploiement automatique depuis GitHub  |
| Statistiques         | Cloudflare Web Analytics (sans cookies)                                         |
| Icônes               | Tabler, via `astro-icon`                                                        |
| Polices              | Fontsource, hébergées sur le site                                               |
| SEO                  | Sitemap automatique, données structurées `LocalBusiness`                        |

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

Prérequis : Node.js 22.12 ou plus récent, et npm.

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement (http://localhost:4321)
npm run build      # build de production dans dist/
npm run preview    # prévisualiser le build
npm run format     # formater tout le code avec Prettier
```

Le formatage se fait aussi automatiquement à l'enregistrement dans VS Code (réglages dans `.vscode/settings.json`, extensions Prettier et Astro requises).

> **Note :** `package.json` contient un `overrides` qui force `@astrojs/compiler-rs` en version 0.5.1. La version 0.4.1 utilisée par `prettier-plugin-astro` est bloquée par le Contrôle intelligent des applications de Windows, ce qui empêche Prettier de fonctionner. Cet `overrides` pourra être retiré quand le plugin sera mis à jour.

### Variables d'environnement

À définir dans un fichier `.env` en local (non versionné) et dans les réglages du projet Cloudflare :

| Variable               | Rôle                                                                  |
| ---------------------- | --------------------------------------------------------------------- |
| `PUBLIC_WEB3FORMS_KEY` | Clé d'accès Web3Forms (les demandes arrivent sur l'adresse du client) |

Ce nom est proposé et peut changer pendant le développement.

> Cloudflare Turnstile n'est disponible que sur l'offre payante de Web3Forms. Le site utilise donc l'offre gratuite (250 envois par mois) avec un champ honeypot, et hCaptcha (gratuit) pourra être ajouté si le spam devient un problème.

---

## Déploiement

Le site est hébergé sur **Cloudflare Workers**, en tant que site statique. Cloudflare fait évoluer Pages vers Workers ; pour un site statique, le fonctionnement et la gratuité sont les mêmes.

1. Le dépôt GitHub est relié au projet Cloudflare Workers.
2. Chaque push sur `main` déclenche un build et une mise en ligne.
3. Réglages du build : commande `npm run build`, dossier de sortie `dist`, variable d'environnement `NODE_VERSION` = `22`.
4. En attendant le domaine, le site est accessible sur son adresse `*.workers.dev` (à activer dans **Settings → Domains & Routes**).
5. À la mise en ligne, on branche le domaine `axialnettoyage.fr` (OVH) sur le Worker et on active Web Analytics.

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

# 420 STREET — Site Coming Soon & Waitlist Hub

Ce projet est la landing page de présentation et de captation d'inscriptions (waitlist) pour la plateforme **420 STREET**. Il est construit avec **Next.js 15 (App Router)**, **Tailwind CSS v4**, **TypeScript** et s'intègre avec **Loops.so** pour la gestion de la liste d'attente email.

---

## 🎨 Palette de couleurs & Thème

Le style visuel est directement aligné sur la charte définie dans `themeinfo.css` :

- **Brand Onyx** (`#0A0A0A`) : Fond principal sombre
- **Brand Black** (`#151515`) : Cartes & conteneurs
- **Brand Charcoal** (`#292929`) : Bordures & lignes de structure
- **Brand Graphite** (`#555555`) : Textes secondaires & sous-titres
- **Brand Stone** (`#E8E2DA`) : Textes principaux
- **Brand Rosegold** (`#B47B70`) : Accent principal lumineux (boutons, badges, effets glow)
- **Brand Bronze** (`#79514B`) : Accent secondaire
- **Typographie** : *Monument Extended* / *Syne* pour les titres & *Plus Jakarta Sans* / *Helvetica Neue* pour le corps.

---

## 🖼️ Fichiers & Actifs

- **Logo** : Placé dans `public/logo-white.png` et `public/logo.png`.
- **Inspiration Client** : Conservée sous `public/inspiration.png`.

---

## 📩 Configuration de la Liste d'Attente Loops.so

Le formulaire d'inscription envoie les requêtes vers la route API serverless `app/api/subscribe/route.ts`.

### Étape 1 : Créer un compte Loops.so (Gratuit)
1. Rendez-vous sur [Loops.so](https://loops.so) et créez un compte gratuit.
2. Allez dans **Settings** -> **API Keys**.
3. Générez une nouvelle **API Key**.

### Étape 2 : Configurer les Variables d'Environnement
Dans votre fichier `.env.local` (en local) ou dans le dashboard Vercel (en production) :

```env
LOOPS_API_KEY=votre_cle_api_loops_ici
```

*Note : En l'absence de clé API (mode démo), le formulaire fonctionne toujours sans planter et simule les inscriptions en affichant un message de confirmation au visiteur.*

---

## 🚀 Déploiement sur Vercel

1. Poussez le dépôt sur votre compte GitHub / GitLab / Bitbucket :
   ```bash
   git add .
   git commit -m "feat: complete Next.js coming soon site with Loops.so waitlist"
   git push origin main
   ```
2. Connectez le projet sur [Vercel](https://vercel.com/new).
3. Ajoutez la variable d'environnement `LOOPS_API_KEY` dans la section **Environment Variables**.
4. Cliquez sur **Deploy**.

---

## 💻 Développement Local

```bash
# Lancer le serveur de développement
npm run dev

# Tester le build de production
npm run build
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

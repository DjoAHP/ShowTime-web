# ShowTime - Fête de la musique 2026


Une application web permettant de consulter les programmes, horaires et documents techniques des groupes participants à la Fête de la musique 2026 à Jard, Epernay.

## 🚀 Fonctionnalités

- Navigation par groupe (Chavabien, Rock, Chenapan Dub)
- Affichage du lieu, des horaires (balances, convocation, début, fin)
- Consultation des documents techniques (images et PDFs) dans une modal responsive
- Interface entièrement responsive (desktop & mobile)
- Animations fluides avec Framer Motion
- Support PWA (installable, hors‑line) grâce à Vite + vite-plugin-pwa

## 🛠️ Stack technique

- **React 19** + **TypeScript**
- **Vite** (bundler & dev server)
- **Tailwind CSS 4** (via @tailwindcss/vite)
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **@react-three/fiber** & **three** (utilisés dans le composant BackgroundGradient)
- **@shadergradient/react** pour le fond animé
- **vite-plugin-pwa** pour transformer l’app en PWA

## 📂 Structure du projet

```
src/
├── assets/               # Icônes PWA, favicon, etc.
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
├── components/
│   └── BackgroundGradient.tsx   # Fond animé avec three.js
├── utils/
│   └── cn.ts                 # Utilitaire tailwind-merge
├── App.tsx                 # Composant principal (données, UI, logique)
├── main.tsx                # Entry point React
├── index.css               # Styles Tailwind globaux
└── manifest.json           # Manifest PWA (à la racine)
public/
├── favicon.ico
├── apple-touch-icon.png
└── index.html
```

## ▶️ Installation & lancement

```bash
# Cloner le dépôt
git clone https://github.com/DjoAHP/ShowTime-web.git
cd ShowTime-web

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# → http://localhost:5173

# Construire pour la production
npm run build

# Prévisualiser la build
npm run preview
```

## 📱 Installation en tant que PWA

Depuis un navigateur supportant les PWA (Chrome, Edge, Opera, Safari sur iOS/Android) :

1. Ouvrez l’app en production (via Netlify ou `npm run preview`).
2. Une icône d’installation devrait apparaître dans la barre d’adresse.
3. Cliquez‑la pour installer l’application comme une application autonome.
4. L’app fonctionnera hors‑line grâce au service worker.

## 📦 Déploiement Netlify

Le projet est configuré pour être déployé sur Netlify :

- La commande de build est `npm run build`.
- Le répertoire de sortie est `dist/`.
- Aucun fichier `netlify.toml` requis ; Netlify détecte automatiquement la build Vite.
- Le service worker sera servi correctement, permettant le fonctionnement hors‑line.

## 📄 Licence

Ce projet est sous licence MIT – voir le fichier `LICENSE` pour plus de détails.

---

*Réalisé avec ❤️ pour la Fête de la musique 2026.*
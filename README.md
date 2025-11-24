<div align="center">

# 🇨🇩 Jamaa United

Plateforme React (SPA) qui présente la mission de Jamaa United : renforcer les familles et les communautés de Goma à travers les piliers **Upendo**, **Akili** et **Matendo**. L'application met en avant les activités, l'équipe, les domaines d'impact et offre des points de contact clairs pour les visiteurs francophones.

</div>

## 🚀 Pile technique

- [React 18](https://react.dev) + [Vite](https://vitejs.dev) pour un développement ultra rapide
- [Tailwind CSS](https://tailwindcss.com) + design tokens personnalisés (`src/styles/colors.css`)
- [React Router](https://reactrouter.com) pour la navigation multi-pages
- Composants maison (boutons, formulaires, modales…) regroupés sous `src/components`

## 📁 Structure du projet

```
src/
├── pages/                 Pages principales (Accueil, À propos, Contact, Équipe…)
├── components/            UI partagée (Bouton, Input, Header, Layout, etc.)
├── content/               Données statiques réutilisables (ex. piliers Upendo/Akili/Matendo)
├── styles/                Tailwind + feuilles globales (variables, gradients)
└── utils/                 Helpers divers (ex. fonction `cn`)
```

## 🛠️ Développement

### Prérequis
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```

### Démarrer le serveur de dev
```bash
npm run dev
```

### Construire pour la production
```bash
npm run build
```

### Prévisualiser le build
```bash
npm run preview
```

## 🎨 Design & contenu

- Palette bleue unifiée inspirée de la section **Équipe** (voir `src/styles/colors.css`).
- Les textes et chiffres clés sont centralisés quand c'est pertinent : par exemple, les trois piliers sont définis dans `src/content/pillars.js` et consommés à la fois par la page d'accueil et la page « À propos ».
- Les composants UI acceptent des variantes (`Button`, `Input`, `Select`, etc.) afin de garder une expérience cohérente.

## 🤝 Contribution

1. Créez une branche descriptive (`feat/palette-global`, `fix/contact-form`, …)
2. Faites vos modifications + tests (`npm run build`)
3. Ouvrez une Pull Request en décrivant : le pourquoi, les captures éventuelles, et les impacts UX/techniques

## 📄 Licence

Projet privé de Jamaa United. Merci de contacter l'équipe avant toute réutilisation du contenu ou de la charte graphique.

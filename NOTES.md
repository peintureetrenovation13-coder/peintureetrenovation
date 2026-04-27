# Peinture & Rénovation — Axel Sandahl
## Site : https://project-atmue.vercel.app
## GitHub : https://github.com/peintureetrenovation13-coder/peintureetrenovation

## Stack
- React + Vite
- Framer Motion (comètes)
- Déploiement : Vercel via `npx vercel --prod`

## Structure
- src/App.jsx — fichier principal (allégé, ~34KB)
- public/ — toutes les images extraites du base64
- package.json — framer-motion ^12.38.0

## État actuel (27 avril 2026)
- ✅ Comètes dorées sur le hero (5.5 secondes puis titre apparaît)
- ✅ Images extraites de App.jsx vers /public
- ✅ Export default Site OK
- ✅ Nom Axel Sandahl affiché une seule fois

## Commandes utiles
- Lancer en local : npm run dev → http://localhost:5173
- Déployer : git add -A && git commit -m "..." && git push && npx vercel --prod
- Voir erreurs build : npm run build 2>&1 | tail -20

## Ce qui reste à faire
- (à compléter)

# We Yan Digital

Site vitrine (React + Vite + TypeScript) déployé sur Cloudflare Pages.

## Commandes

| Commande            | Rôle                                                        |
| ------------------- | ----------------------------------------------------------- |
| `npm run dev`       | Serveur de dev (port 3001) avec API locale `/api/*`         |
| `npm run typecheck` | Vérification TypeScript                                     |
| `npm run lint`      | ESLint (TS/TSX, fonctions Cloudflare, scripts, tests)       |
| `npm test`          | Tests Vitest (validation, Sheets, fonction `/api/contact`)  |
| `npm run build`     | Typecheck puis build de production                          |

## Architecture

- `src/` — application React (`pages/`, `components/`, `hooks/`, `constants/`, `lib/`).
- `functions/api/` — Cloudflare Pages Functions (`contact`, `demandes`).
- `shared/` — logique serveur partagée (validation, e-mail, Google Sheets), utilisée par
  `functions/` **et** par le serveur de dev (`scripts/devApiPlugin.js`).
  Les limites de `shared/contact.js` doivent rester alignées avec `src/constants/contactLimits.ts`.
- `public/api/contact.php` — ancienne version OVH, **legacy** (non maintenue).
- `scripts/` — audits SEO et vérifications post-déploiement.

## Variables d'environnement

Voir `.env.example`. En production : Cloudflare Pages → Settings → Environment variables.

| Variable             | Obligatoire | Rôle                                                       |
| -------------------- | ----------- | ---------------------------------------------------------- |
| `RESEND_API_KEY`     | oui         | Envoi des e-mails                                          |
| `CONTACT_TO_EMAILS`  | oui         | Destinataires, séparés par des virgules                    |
| `GOOGLE_SHEET_URL`   | non         | Apps Script d'enregistrement des demandes (sinon ignoré)   |
| `ADMIN_DEMANDES_KEY` | pour /demandes | Clé envoyée dans le header `X-Admin-Key`                |

# Portfolio (Vite + React + TypeScript)

Short instructions to run this project locally.

## Prerequisites

- Node.js (recommend v18+)
- npm

## Quick start

Install dependencies (this project had a peer-dep conflict during development; the command below works reliably):

```powershell
npm install --legacy-peer-deps
```

Start the dev server:

```powershell
npm run dev
```

Open the Local URL printed by Vite (for example: http://localhost:8080/).

## Build & preview

Build for production:

```powershell
npm run build
```

Preview the production build:

```powershell
npm run preview
```

## Tests

Run tests:

```powershell
npm run test
```

## Notes

- If you see `'vite' is not recognized` when running `npm run dev`, make sure you ran `npm install` and run the script through `npm run dev` (npm will use the local binary).
- During dependency installation a peer dependency conflict was resolved using `--legacy-peer-deps`. To fix permanently, consider upgrading or removing the `lovable-tagger` dev dependency or pinning `vite` to a compatible version.

## Next steps

- Commit README and push to your repository if desired.
# Welcome to your Lovable project

TODO: Document your project here

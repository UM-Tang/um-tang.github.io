# Chao Tang — Academic Homepage

English academic homepage for Chao Tang, a Computer Science undergraduate at the University of Macau. Adapted from [siruizou2005/academic-homepage](https://github.com/siruizou2005/academic-homepage), with projects featured directly after the introduction.

## Content

- `src/data.js`: profile, project summaries, education, leadership, skills, and CV link.
- `src/site.config.js`: website URL, metadata, language, and theme defaults.
- `src/pages/index.astro`: section order.
- `public/Chao_Tang_CV_Sep2026.pdf`: public CV copy with personal phone numbers removed.

The portrait is currently hidden. To add one, place it in `src/assets/`, import it in `src/data.js`, and assign it to `profile.photo`.

## Local development

Use Node.js 24 or newer.

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

The static output is in `dist/`.

## GitHub Pages

In the repository, choose **Settings → Pages → Source: GitHub Actions**. Every push to `main` runs `.github/workflows/deploy.yml` and publishes the site.

Intended URL: https://um-tang.github.io/

Only public project links are included. The CARE review status and project results are based on the supplied September 2026 CV; update them in `src/data.js` as the work progresses.

## Attribution

Template: [siruizou2005/academic-homepage](https://github.com/siruizou2005/academic-homepage), MIT license. The original license is retained in `LICENSE`.

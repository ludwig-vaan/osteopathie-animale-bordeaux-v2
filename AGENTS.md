# Repository Guidelines

## Project Structure & Module Organization
This Gatsby site keeps application code under `src/`. Page-level routes live in `src/pages` (e.g. `index.js`), reusable UI in `src/components`, domain utilities in `src/lib`, and browser hooks in `src/hooks`. Images consumed by GraphQL are stored in `src/images`; add large binaries to an external bucket instead. Build configuration sits at the repository root (`gatsby-config.js`, `gatsby-node.js`, `tailwind.config.js`). Keep environment-specific secrets in `.env.*` files referenced through Gatsby environment variables.

## Build, Test, and Development Commands
- `yarn install`: install dependencies; always run after pulling.
- `yarn develop`: start the local dev server on port 8000 with hot reload.
- `yarn build`: produce an optimized static bundle for Netlify.
- `yarn serve`: preview the last production build locally.
- `yarn clean`: clear Gatsby caches when stale data appears.
- `yarn format`: apply Prettier to JS, JSX, JSON, and Markdown files before review.

## Coding Style & Naming Conventions
Follow Prettier defaults (2-space indentation, single quotes, trailing commas where valid). React components and file names use PascalCase (`HeroSection.js`), hooks start with `use`, utility modules use camelCase. Tailwind classes should be grouped by layout → spacing → typography for readability. Run `yarn format` prior to committing; do not hand-edit generated GraphQL image fragments.

## Testing Guidelines
Automated tests are not yet configured (`yarn test` exits early). When adding tests, follow Gatsby’s Jest setup and place specs alongside source files as `<Component>.test.js`. For now, validate changes by running `yarn develop`, exercising dynamic flows (Calendly modal, map) in multiple breakpoints, and checking Lighthouse locally. Record manual test notes in the pull request.

## Commit & Pull Request Guidelines
Existing history favors short, imperative titles (e.g. "Update Hero.js"). Use present tense, limit to ~72 characters, and describe scope in the body if needed. Each PR should link to the relevant issue or task, outline functional changes, list manual verification steps, and attach before/after screenshots for visual updates. Request review once CI (if configured) is green and format checks pass.

## Deployment Notes
The project targets Netlify via `gatsby-adapter-netlify`. Keep Netlify environment variables (Mapbox, ReCAPTCHA, GTM) in the dashboard rather than the repo. After merging to the main branch, trigger a Netlify deploy preview to confirm headers and offline support behave as expected.

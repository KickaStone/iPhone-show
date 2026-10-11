# iPhone Archive

A responsive, interactive history of the iPhone from 2007 to 2025. Includes 19 annual chapters, era filters, defining moments, and a model comparison dialog.

## Open

Open `dist/index.html` directly in a browser. No installation or build is required.

For a local server, run `npm run dev` and open http://localhost:5173.

## Source

- `dist/index.html`: page structure
- `dist/style.css`: responsive design and illustrative device artwork
- `dist/app.js`: historical records, timeline navigation, gallery, comparison, and video player
- `dist/media.js`: verified Apple product image URLs and launch recordings

Historical references link to Apple's announcements and model identification guide. Each chapter highlights one representative model; family variants may differ. Each timeline chapter and the hero use real Apple product images loaded from Apple’s CDN. The launch archive includes five real event recordings (2007, 2020, 2023, 2024, and 2025), with click-to-play YouTube embeds and direct links. The 2007 recording is an independent archival upload; the others are Apple event recordings. Images and videos require internet access. Apple’s model-guide images may include finishes introduced after the initial launch. Google Fonts is optional; the site has local font fallbacks.

## Validation

`npm run build` checks JavaScript syntax. Interaction logic was also checked for year navigation, era filtering, boundary controls, milestone jumps, and comparison updates. Visual browser QA was unavailable in the build environment.

## Hosting

Serve the `dist/` directory with any static hosting service. All asset paths are relative, so the website also works under a repository subpath.

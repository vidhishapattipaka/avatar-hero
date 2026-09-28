# AVATAR — Full React website UI

Version 2 expands the hero into the complete landing-page UI shown in your recordings, redesigned in deep teal, sage and warm ivory.

## Easiest preview — no commands

Extract the ZIP, then double-click `PREVIEW.html`. It is a self-contained compiled preview with the JavaScript and CSS embedded. It does not need npm. Optional Google Fonts require an internet connection; fallbacks are provided. This preview is a snapshot; rebuild it after editing source if you want an updated standalone file.

## Work on the React project in VS Code

1. Install Node.js 22.12+ (Node 24 is suitable).
2. Extract the ZIP into a folder such as `avatar-full-ui`.
3. In VS Code, choose File → Open Folder and select that folder.
4. IMPORTANT: `package.json` must appear directly in the folder you opened.
5. Open Terminal → New Terminal.
6. Run `npm install` and wait until complete.
7. Run `npm run dev`.
8. Ctrl+click the localhost address printed in the terminal.

If npm says it cannot find package.json, the terminal is in the wrong folder. Navigate to the directory containing package.json before running npm.

## Build

`npm run build` creates `dist/`.
`npm run preview` serves the production build locally.

## Content and sections

- Hero: corrected to CRM, OMS, AI Content Writing and custom AI solutions.
- Why Avatar: AI-powered solutions, customisation, scalability and one connected ecosystem.
- Services: three interactive tabs with illustrative interface visuals.
- Who We Serve: growing businesses/SMEs, sales-driven businesses, marketing/content teams, and custom business needs.
- About: learning, talent, AI solutions and implementation.
- Goals: accessibility, talent, adoption and practical impact.
- Custom solutions: workflow automation, AI analytics, integrations and industry-specific tools.
- Demo section, footer and navigation.

The recording is the content reference. Titles and supporting copy have been edited for the new design while keeping the visible service descriptions and purpose. Service visuals are labelled CONCEPT PREVIEW and are not real product screenshots. No numerical business results, testimonials, prices or plan limits have been invented.

## Functional UI

- Responsive menu; section anchor navigation.
- Service tabs support click and keyboard arrows/Home/End.
- Hero cards support pointer, touch, focus and click.
- CSS animation pause; system reduced-motion support.
- Native modal with form validation and local enquiry preview.
- Form data stays in React memory and is not submitted or persisted.
- Pricing navigation opens a pricing enquiry because the recording did not show pricing plans or amounts.

## Before publishing

Supply the official logo to replace the text wordmark. Provide approved pricing, booking destination, contact and social links. The recording did not show expanded service-card content or opened booking forms; those interactions are original UI treatments using the content that was visible. Connect the demo form to a real backend or booking platform and replace the preview-only messaging before enabling actual submissions. There is no payment, CRM backend or user authentication in this UI project.

## Files

- src/main.jsx — header, interactive hero and demo modal.
- src/content.jsx — service data and all remaining page sections.
- src/styles.css — hero and base design styles.
- src/page.css — full-page styles and responsive rules.
- PREVIEW.html — self-contained compiled snapshot.
- dist/ — compiled production assets.

## Verification

Production build completed successfully with Vite 7.3.6. Visual browser and mobile checks could not be completed because the available cloud browser blocks local development and file previews. Browser rendering and user interactions still need a local review. Check mobile menu, service tabs, enquiry validation, Escape to close, pause/play and system reduced-motion settings. Google Fonts may fall back to system fonts offline.

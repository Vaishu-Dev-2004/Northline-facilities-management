# Northline FM demo — final QA report

**Review date:** 8 October 2026 (Asia/Kolkata)  
**Scope:** Final content, code, route, build and static-markup QA of the existing Vite frontend and Express/Prisma/PostgreSQL foundation. The project architecture was preserved.

## Dependency/build follow-up (8 October 2026)

- `package.json` and lockfile v3 are synchronized; every external package import is declared and has a lockfile entry. `zod` is a runtime dependency (`^3.25.67`, locked `3.25.76`); Vite is a development dependency (`^6.3.5`, locked `6.4.4`). `express`, Prisma CLI and `@prisma/client` are declared and locked. `@vitejs/plugin-react` is not imported by the project and is not required.
- **No dependency versions or application code were changed.** The initial reported errors were not reproducible from a clean root install. They are consistent with running commands before installing dependencies from the project root, using an incomplete `node_modules`, or omitting dev dependencies (the latter explains missing Vite, but not a missing runtime `zod`). The extracted ZIP intentionally has no `node_modules`; install first from the directory containing the root manifests. The exact cause in the original failing environment cannot be proven from this workspace.
- From a clean dependency state, `npm ci --include=dev` installed 152 packages (153 audited) with 0 vulnerabilities; the requested `npm install` then completed up to date. The lockfile and manifest hashes were unchanged.
- After that install, `npm test` passed **19/19** and `npm run build` succeeded. `npm ls --depth=0` resolved all 14 declared direct packages, including Zod and Vite.
- The dependency follow-up changed documentation only: `README.md` now explicitly says to run commands at the project root, install after extracting the ZIP, and retain dev dependencies for builds. The source ZIP contains no `node_modules` or `dist`.

## UI/UX refinement (8 October 2026)

- Improved the reading scale and contrast across public pages, contact forms and key dashboard labels. Reduced the public disclosure/header height, added a compact primary-nav collapse for narrower laptops/tablets, and retained mobile menu controls.
- Replaced the public Language selector with keyboard-operable LTR/RTL buttons. The selected direction is persisted separately from locale; Arabic/Hebrew still default to RTL when no explicit direction is stored. Language selection remains available in dashboard preferences.
- Added one public Blog item and one Pricing item (both existing routes); updated the English nav labels to Blog, Login and Dashboard. The client workspace landing label is Dashboard.
- Removed direct client/admin dashboard shortcuts from login. Added branded Google/Apple buttons that only explain that sign-in is not connected; they send no credentials and do not redirect. Existing local login/register behavior was otherwise left intact.
- Added a shared Back to Website link to client, admin and technician sidebars. Refined Contact copy and spacing; it makes clear that the form checks details locally and does not send an enquiry. Company/contact/map/social values remain configurable; no real business details were invented.
- Added two compressed, locally served FM photographs for the service, industry and article sections. New photos use descriptive alt text, responsive object-fit crops and lazy loading where appropriate. Existing hero and map assets remain in place.
- Updated initial document/SEO titles and route titles to describe the page content. No framework, dependencies, backend/API, database, security model or dashboard workflows were changed.

### UI verification

| Check | Result |
|---|---|
| `npm ci --include=dev` | Passed; 152 packages installed, 153 audited, **0 vulnerabilities**. |
| JavaScript syntax | Passed for frontend/backend source and test `.js` files; locale JSON parsed successfully. |
| `npm test` | **19 passed, 0 failed.** |
| `npm run build` | Passed with Vite 6.4.4; all three local FM images were emitted to `dist/assets`. |
| SSR/static route audit | **84 routes rendered** (50 public, 16 admin, 13 client, 5 technician). Main landmarks, internal links, image alt text, iframe titles and safe new-tab links passed. Blog/Pricing appear once in the public nav; login has no dashboard shortcuts; all workspaces have Back to Website links. |
| Direction/auth/contact checks | LTR/RTL preference persistence and Arabic/Hebrew defaults passed. Contact text contains no demo/fictitious warning; local-only form behavior is stated. Google/Apple buttons are UI-only and make no authentication request. |
| Responsive/accessibility source checks | Checked the 320px minimum, laptop/tablet/mobile breakpoints, RTL rules, reduced-motion and focus-visible styles, and responsive photo sizing. **No real-browser, device-width visual, screen-reader, axe/WCAG contrast or interaction automation was available/run.** |

## Outcome

The reviewed build is clean on the checks listed below. Earlier fixture and UI inconsistencies were corrected, client CSV export filtering is covered by tests, and all 84 sampled public and workspace routes render through the existing page renderers. This is still a **fictional, browser-local demo**, not a live FM service or production-ready authenticated application.

## Issues fixed

- Replaced misleading fixed dashboard totals with counts derived from the relevant sample records and clarified active, completed, upcoming, and illustrative values across client, admin, and technician workspaces.
- Scoped client CSV exports to Meridian Workspaces' work orders, invoices, properties, and property-linked schedules; unsupported client export collections return no records. Added regression tests. Replaced a cross-client work-order reference in the client Documents examples.
- Clarified that replies, contact, newsletter, sign-in, registration, downloads, file evidence and workspace changes are demo-only. Login and registration validate and show success without app-level credential/account persistence, API transmission or redirect; the backend auth foundation remains separate.
- Removed unsupported public history and universal support promises. Replaced the fabricated homepage performance, scale, tenure and 24/7 figures with catalog/sample context; clearly labelled illustrative case-study results, bylines and plan content.
- Centralized replaceable India-market contact/map/social details in `frontend/src/siteConfig.js`; preserved the interactive query-based Google Maps embed, directions and visible fallback link. Social links remain six configurable, labelled fictional demo profiles, including X.
- Improved form error associations and the authentication confirmation error state; added dialog initial focus, focus containment and focus restoration; replaced placeholder pagination controls with generated, named pagination navigation.
- Updated privacy-choice messaging to accurately state that optional analytics/marketing trackers are not installed in this demo.

## Verification performed

| Check | Result |
|---|---|
| `npm install` | Up to date; 153 packages audited; **0 vulnerabilities** reported. |
| JavaScript syntax (`node --check`) | Passed for `.js` files in `frontend/src`, `frontend/test`, `backend/src`, and `backend/test`. |
| `npm test` | **19 passed, 0 failed.** Covers backend workflow rules, local demo transitions, client export scope, and site configuration/social/map requirements. |
| `npm run build` | Passed; Vite 6.4.4 transformed 17 modules and emitted the production bundle. |
| Prisma schema | `prisma validate` passed using a placeholder local PostgreSQL URL; `npm run prisma:generate` generated Prisma Client 6.19.3. **No database connection or migration was run.** |
| SSR route/markup audit | **84 routes rendered:** 50 public, 16 admin, 13 client and 5 technician. Static checks found no missing/duplicate page landmarks, unnamed buttons/controls/dialogs, missing image alt or iframe titles, empty/dead internal links, unsafe new-tab links, or cross-client records in the checked client lists. |
| Acceptance spot checks | 22 service records; visible `#/client/dashboard` action; six social links; configured map embed/fallback; client export scope tests; no residual homepage 24/7, 500+, 15+, 98.4% performance claims. |

## Coverage and limitations

- **Dashboards/work orders:** Rendered all listed role routes; workflow unit tests cover review, assignment, dispatch, in-progress, completion safety/handover, client approval and terminal states. UI actions were code-reviewed, not exercised in a real browser.
- **Auth/forms:** Source review confirms the demo login/register path uses browser validation, resets fields, gives feedback and stays on the auth route without calling `apiRequest` or storing form values. Contact/newsletter success states are also local-only. These interactions were not browser-automated.
- **Maps/social:** Configuration, labels, URLs and fallback markup were checked. External Google Maps/social destinations were not network-tested; the profiles/office/contact are fictional and must be replaced with verified details.
- **SEO:** The SPA metadata logic sets `noindex,nofollow` for admin, client, technician and auth routes; public metadata, canonical/schema, robots and sitemap remain on the reserved `.example` demo origin. The SPA is not prerendered; configure the production origin and hosting fallback before launch.
- **Accessibility/responsiveness/themes/RTL:** Static markup and CSS checks passed for labels, focus-visible styling, modal keyboard focus handling, reduced-motion support, 320px minimum layout, responsive breakpoints, theme controls and RTL direction/logical layout rules. **No real browser, screen-reader, axe/WCAG contrast or visual checks at device widths were run.** Arabic/Hebrew dictionaries do not translate all sample portal content.
- **Security/integrations:** Express/Prisma/session/CSRF/RBAC/tenant-scoping foundations were retained. The browser dashboards remain localStorage demo data and are not an authorization boundary. The 19-test suite does not include live auth/session/CSRF/IDOR integration tests; no PostgreSQL, mail, payment or file-storage integration was exercised. Security review, threat modelling and penetration testing remain deployment work.
- **Legal/business readiness:** Company/contact/social details are placeholders, public case figures and testimonials are fictional, and the privacy/terms copy is template material. Replace and review these with verified business/legal details before launch.

## Main files changed

- `frontend/src/dashboards.js` — sample-aware dashboard metrics, role views, messages/calendar/document copy and pagination/navigation details.
- `frontend/src/main.js` — client-scoped exports, contact/auth feedback, direction controls, privacy-choice text and accessible dialog behavior.
- `frontend/src/marketing.js` — descriptive route titles, contact copy, login provider UI, photography placements and public page content.
- `frontend/src/components.js` — public navigation, direction controls, social/disclosure and privacy-choice presentation.
- `frontend/src/demoData.js` and `frontend/src/siteConfig.js` — corrected sample content and India/demo configuration.
- `frontend/src/exportScope.js` — new reusable client export-scope helper.
- `frontend/test/exportScope.test.js` and `frontend/test/siteConfig.test.js` — new regression/configuration tests.
- `frontend/src/styles.css` and `frontend/index.html` — readability, spacing, navigation, responsive layout, imagery and neutral initial metadata.
- `frontend/src/i18n.js`, `frontend/src/icons.js`, `locales/*.json` — persisted direction selection, Google/Apple marks and localized navigation labels.
- `frontend/public/assets/fm-plant-room.jpg` and `frontend/public/assets/fm-workplace-operations.jpg` — optimized local facilities-management photography.

## Before production

Replace `.example` contact/domain/social data; verify the office and service region; connect client/admin/technician UI to authorized APIs; run PostgreSQL migrations only after database-specific review; implement monitored contact, email/reset, notification, uploads and payment integrations; complete legal/privacy review, full translation, real-browser responsive and accessibility testing, and security integration testing.

## Follow-up surgical UI/UX refinement (9 October 2026)

This addendum records the latest requested pass. It modifies the existing Vite application in place; no framework, architecture, backend, database, API, authentication model, dashboard workflow or route was replaced.

### Changes delivered

- **Public navbar (updated in the final pass below):** A single **Home** trigger now opens the Integrated Facilities Management and Smart Facilities Management routes; the main navbar does not show “Home 1” or “Home 2”. Services, About, Industries, Blog, Pricing, Contact, Dashboard, Login, LTR/RTL, Theme and Request a Service remain available. Dashboard is a normal link to `#/client/dashboard`; Login is an outlined button-style link to `#/login`. The mobile menu retains the existing routes and controls.
- **Contact:** Removed the extra section-bottom padding and reduced the Contact-specific footer lead-in. The page remains content-height driven; the form, office details, map, fallback/directions and social links remain present. The form remains local-only and does not transmit an enquiry.
- **Services/industries:** Added individual image/alt metadata for all 22 services and all 12 industry options. Service, industry and detail imagery uses local files, fixed responsive aspect ratios, `object-fit: cover`, explicit image dimensions and lazy loading where appropriate. No file is repeated within its service group or within its industry group. Two pre-existing invalid related-service slugs were corrected to the existing `facility-maintenance` route.
- **Blog:** Reworked all 11 entries with unique categories, titles, excerpts, SEO descriptions, images, introductions, three subject-specific body sections, key insights, conclusions, tags, CTAs and topic-relevant related links. Listing filters are generated from the article categories, and the featured post is part of the same filterable list rather than duplicated. Detail-page titles, body copy, photo and CTA are specific to the selected article.
- **Homepage versions:** Kept `/` and `/home` as the primary **Integrated Facilities Management** homepage and `/smart` as **Smart Facilities Management**. Added reciprocal hero links and a footer link so both existing versions are straightforward to reach.
- **Typography/contrast/responsiveness:** Raised the public reading scale and dashboard labels/table copy, strengthened muted-text contrast, and tuned service, industry, blog and Contact layouts at the existing desktop/tablet/mobile breakpoints. Added focus-visible treatment for the new navigation and card links. Dashboard tables retain their existing contained scroll behavior.
- **Image provenance:** Added `ASSET_SOURCES.md`. Ten new, tailored FM service photographs were generated; because the image tool reached its per-turn limit, the other images use existing project photos and distinct Pexels search selections. All page references remain local; the Pexels source pages are recorded for launch review.

### Files changed

- `frontend/src/components.js` — navbar links/order, service image-card markup and Smart FM footer link.
- `frontend/src/demoData.js` — image metadata for 22 services; 11 complete article records; relevant related-post links; corrected related-service slugs.
- `frontend/src/marketing.js` — image-bearing industry records/cards, homepage version links, per-service detail photography, filterable blog cards and unique article rendering, Contact wrapper class and per-article metadata.
- `frontend/src/main.js` — article structured-data image and accessible `aria-pressed` state for blog filters.
- `frontend/src/styles.css` — responsive image/card styles, typography/contrast refinements, navbar button treatment and Contact spacing.
- `frontend/public/assets/services/` and `frontend/public/assets/industries/` — local image assets.
- `ASSET_SOURCES.md` — image provenance note.
- `QA_REPORT.md` and `northline-fm-updated-source.zip` — updated report and source archive.

### Verification for this pass

| Check | Result |
|---|---|
| `npm ci` | Passed; 152 packages installed, 153 audited, **0 vulnerabilities**. |
| `npm test` | Passed: **19 tests, 19 passed, 0 failed**. |
| `npm run build` | Passed with Vite 6.4.4; 17 modules transformed. |
| SSR route smoke test | **84 routes rendered:** 50 public, 16 admin, 13 client and 5 technician. No empty page/title or `undefined` render detected. |
| Image/content audit | 22/22 service images unique and present; 12/12 industry-card images unique; 11/11 blog images, categories and article pages unique. Checked 110 rendered public `<img>` tags; **0 missing local files or empty alternatives**. |
| Navigation/links | Requested navbar order and link types passed static markup checks. An SSR scan found **81 unique internal route targets and 0 broken targets** across public and workspace pages; all service cross-links, article CTAs and related-post links resolved. Public LTR/RTL and theme controls, plus workspace theme controls, remain rendered. Both homepage versions render different content and cross-link. |
| Contact/auth/workspaces | Map iframe, map fallback and social links remain in Contact; Contact has no form `action`/`method` endpoint. Login/register pages rendered. All **34** admin/client/technician workspace routes retain a Back to Website link. Existing workflow tests passed. |
| Responsive review | Confirmed the stylesheet includes the maintained laptop/tablet/mobile breakpoints and dedicated photo, navigation and Contact rules down to the existing 320px layout minimum. **No real-browser/device screenshot, visual overflow test, screen-reader, axe/WCAG contrast or interaction automation was run.** |

### Remaining checks before production

- A real-browser pass at representative laptop, tablet and phone widths is still needed to verify visual wrapping/overflow and keyboard interaction; static route/CSS audits are not a substitute.
- Existing external map/social destinations were preserved and markup-checked, not network-tested. Confirm company, contact, map and profile details before publication.
- Review original image terms and selections in `ASSET_SOURCES.md` before commercial launch. The project remains illustrative demo content, not a verified Northline service or a live authenticated operations platform.

## Final requested navbar, photography and typography pass (9 October 2026)

This pass preserves the existing Vite SPA, routes, Express/Prisma/PostgreSQL foundation, demo workflows, local-only Contact behavior, auth/demo disclosure, dashboard return links, theme/direction controls and existing service/industry/blog work.

### Changes delivered

- Added exactly one **Home** navbar trigger. It opens accessible links to **Integrated Facilities Management** (`#/`) and **Smart Facilities Management** (`#/smart`); it does not display “Home 1” or “Home 2”. Pointer hover, click/touch, keyboard focus/activation and Escape dismissal are wired without changing route structure. Dashboard remains a normal link and Login remains button-styled.
- Added distinct, local facilities/workplace photography to About sections, with meaningful alt text and captions. Applied restrained, page-specific local backgrounds with readable light/dark overlays across Home, About, Services, Industries, Blog/article, Pricing, Contact, auth, maintenance/not-found and workspace/dashboard areas.
- Raised default body and paragraph text to 18px, used responsive heading sizes (H1 32–48px, H2 24–30px, H3 18–22px), and kept controls/labels appropriately sized. Static CSS and inline-SVG audits found no explicit visible text-size declaration below 12px.
- Removed the strip above the navbar. Kept the truthful illustrative-content disclosure in the footer, and kept Contact, auth and demo-only disclosures accurate.
- Tightened Contact intro/section/footer spacing while retaining the map, fallback/directions, social links and non-transmitting form. Rechecked responsive breakpoint rules and existing Services, Industries, Blog and homepage content/links.

### Verification for this pass

| Check | Result |
|---|---|
| `npm ci --include=dev` | Passed; 152 packages installed, 153 audited, **0 vulnerabilities**. |
| JavaScript syntax + locale data | `node --check` passed for frontend/backend source and test JavaScript; all 3 locale JSON files parsed. |
| Typography source audit | Body/public paragraphs and workspace paragraphs declare 18px; responsive heading scale is present; CSS declarations and inline SVG labels below 12px: **0 found**. |
| `npm test` | **19 passed, 0 failed**. |
| `npm run build` | Passed with Vite 6.4.4; 17 modules transformed. |
| SSR/static route and link audit | **84 routes rendered** (50 public, 16 admin, 13 client, 5 technician), with no empty title/content or `undefined` output. Home trigger count: 1; both target links and active states rendered; no “Home 1/2” labels. **81 unique internal route targets; 0 broken targets.** |
| Images/backgrounds | Six distinct About images have alt text and local files. All 12 CSS background-image paths exist; 22 service images, 12 industry images and 11 blog-card records remain distinct within their groups. |
| Contact/disclosure | The above-navbar strip is absent; footer disclosure remains. Contact map/fallback remains, and the form still reports local validation without sending an enquiry. |
| Browser/device visual review | **Not run.** No real-browser screenshot, touch/keyboard interaction automation, device-width overflow test, screen-reader or axe/WCAG contrast audit was available. CSS/source audits are not equivalent to visual or assistive-technology verification. |

The latest production build and `npm test` passed, but the browser/device checks above remain outstanding. The source ZIP excludes `node_modules` and generated `dist`; image licensing/source notes remain in `ASSET_SOURCES.md` for review before publication.

## Requested copy, imagery, pricing, Contact and theme follow-up (9 October 2026)

This final requested pass preserves the existing Vite SPA, routes, Express/Prisma/PostgreSQL foundation, APIs, dashboards, local workflows, security boundaries and existing visual system. No backend, database or authentication architecture was changed.

### Changes delivered

- **Homepage hero:** Removed the entire Scope-led / coverage card and its now-unused CSS rules from the homepage hero.
- **Visitor-facing wording and disclosures:** Removed the requested term from public website copy, accessible labels and visible UI labels. Reworded remaining content as sample, illustrative or preview material where appropriate. Login, registration, recovery, local workspace data, Contact and file-preview disclosures remain truthful: no credentials/accounts are saved, no enquiry or reset email is sent, and representative content is not live client information.
- **About team cards:** Added five optimized synthetic, representative JPEG portraits to the existing five fictional staff cards. Each image has a descriptive alternative identifying it as illustrative and not an actual staff photo; lazy loading and responsive object-fit remain enabled. Their synthetic provenance is recorded in `ASSET_SOURCES.md`. All five cards are retained in the mobile grid.
- **Pricing:** The existing selector now updates both visible prices and `/month` or `/year` labels, button `aria-pressed` values and a polite status announcement. Basic is **₹9,999/month** or **₹1,19,988/year**; Professional is **₹24,999/month** or **₹2,99,988/year**; Enterprise remains **Custom pricing**. Annual rates are exactly 12 monthly payments, with no invented discount.
- **Contact layout:** Rebalanced the desktop form/sidebar columns and changed the tablet layout to place the form above a two-column contact-details/map area at widths up to 1024px; mobile uses a single-column flow. Added minimum-width safeguards and retained the form, contact details, map, fallback/directions, social links and responsive styles. The form remains non-transmitting.
- **Theme:** The navbar toggle now switches directly between resolved light and dark appearance; the separate System choice remains available in settings. Stronger dark surface, text, form, pricing and control colors make the palettes distinctly different, with updated accessible toggle labels and title.
- **Preservation:** Existing application routes, backend/API, database, theme/direction settings, Dashboard return links, form handling and unrelated content/workflows were left intact.

### Verification for this pass

| Check | Result |
|---|---|
| `npm ci --include=dev` | Passed; 152 packages installed, 153 audited, **0 vulnerabilities**. |
| `npm test` | **19 passed, 0 failed.** |
| `npm run build` | Passed with Vite 6.4.4; 17 modules transformed. |
| SSR route/content smoke audit | **84 routes rendered** (50 public, 16 admin, 13 client, 5 technician). Each had page content/title and no `undefined` output. Public rendered content had no forbidden wording; acceptance checks confirmed the hero card is absent, all five representative portrait paths/alternatives render, all three pricing tiers and exact annual values render, and Contact retains its form/details/map. |
| Portrait build assets | All five team JPEGs exist in `frontend/public/assets/team/` and were copied into `dist/assets/team/`. |
| Dev preview HTTP smoke | Vite served the app shell and a team portrait over HTTP 200; the live preview remains running. |
| Responsive/theme source check | Confirmed Contact’s 1024px tablet stack and 700px single-column mobile rules, min-width protections, explicit dark theme tokens and unchanged System/direction controls. The billing handler updates amount, unit, accessible state and announcement. |
| Browser/device review | **Not run.** No real-browser visual screenshot, device-width overflow run, screen-reader, axe/WCAG or interaction automation was available. SSR/CSS-source checks do not replace those reviews. |

The complete source archive is `/home/user/northline-fm-updated-source.zip`; it excludes `node_modules` and generated `dist`. No database connection/migration or external map/social network test was run. The five team portraits are representative synthetic imagery, not actual staff photographs.

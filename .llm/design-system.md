# Manjusri Gobiraj — portfolio design system

Canonical style + known mistakes for this repo. Cursor loads a short version via `.cursor/rules/`. If a change would look like a different website, do not ship it.

**Brand:** whimsical, nature-forward product-design portfolio. Purple on white, floral photography, generous space, DM Sans. Not a startup landing page, not a beige editorial blog, not a dark theme.

---

## Tokens (use these, do not invent new ones)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#ffffff` | Page, cards, light chrome |
| `--text` | `#1c1917` | Primary type on light |
| `--text-muted` | `#44403c` | Body, nav links on light |
| `--text-light` | `#a8a29e` | Meta, captions |
| `--accent` | `#9350b2` | Headings, pills, CTAs, labels |
| `--accent-soft` | `rgba(207, 166, 241, 0.14)` | Pill fill, callout fills |
| `--border` | `#e8e3dc` | Hairlines, cards |
| Photo type | `#ffffff` / `rgba(255,255,255,0.88)` | **Only** on floral hero/footer |
| Script accent | `#e2b4f7` | The word “drawn” only |

Defined in `src/index.css`. Prefer these variables over new hex.

---

## Type

- **UI font:** DM Sans (`--font-sans`). Weights 400, 500, 700. Italic for roles and quotes.
- **Script font:** Caveat, **only** on the hero word “drawn”. Do not spread Caveat (or any other display/script face) across the site.
- Do not add a second body or heading family.
- Load fonts once (either `index.html` or the CSS `@import`, not both).

### Scale to match (home is the source of truth)

| Role | Size | Weight | Color |
|---|---|---|---|
| Nav / name | 22px | 400 | White on photo; `--text` / `--text-muted` on light |
| Hero title | 48px | 400 | White (photo only) |
| Hero sub | 24px | 400 | White |
| Hero roles | 20px | 400 italic | White 88% |
| Section title (“Non Profit Organizations”, “Industry”, “About”) | 48px | **700** | `--accent` |
| Project title | 32px | **700** | `--accent` |
| Project description | 24px | 400 | `--text` |
| Pill | 16px | 400 | `--text`, 1.8px `--accent` border, 37px height, pill radius |
| Footer tagline | 48px | 400 | White (photo only) |
| Footer cols | 24px | 700 title / 400 links | White (photo only) |

Case studies must feel like the same site: same accent, same 700 section titles, same pill language. Do not use the current case-study scale (64px/400 titles, 15–16px body, unstyled labels) as a template.

`.section-label` must be styled: small uppercase, letter-spacing, `--accent` — same voice as `.cs-hero__label`. The class is used today and **has no CSS**; that is a bug, not a look.

---

## Chrome (nav + footer)

**White type exists only on top of photography.** Any white or light surface uses dark type.

| Surface | Nav | Footer |
|---|---|---|
| Home hero (floral photo) | Transparent, white type | — |
| Home scrolled / any light page | White bar, blur, `--border` hairline, dark type, hover `--accent` | — |
| Home footer (floral photo) | — | Photo + white type, tagline left, Connect + Navigation right |
| Case studies | **Light chrome from the first pixel** (they have no photo behind the nav) | Same light chrome **or** the floral footer with white type — never white type on white |

- Nav is `src/components/Nav.jsx`. `tone="photo"` (white type, transparent) only over the floral hero. `tone="light"` (dark type, blur bar) on every light surface, including case studies from the first pixel.
- Footer is `src/components/Footer.jsx` with `footer-bg.png` on every page.

Do not copy-paste nav/footer into each page. Use `Nav` and `Footer`.

### Copy

- Home footer tagline: `Thanks for stopping by!`
- Credit: `made with love © 2026 Manjusri Gobiraj`
- Connect: Email ↗, LinkedIn ↗
- Resume always shows ↗ and opens the Drive file in a new tab

---

## Home layout (do not rearrange without being asked)

1. **Nav**
2. **Hero** — floral `hero-bg.png`; left: greeting + sub + two role lines; right: `manu-portfolio-pic.png` (camera viewfinder already in the file). “drawn” in Caveat.
3. **Industry** — `id="work"`, purple 700 heading, stacked cards (Tesla, The City of San Diego). Tesla is password-gated (`DESIGN!`, case-insensitive, input forced to caps).
4. **Non Profit Organizations** — `id="nonprofits"`, same heading + card pattern (Plastic Beach, Falling Fruit, WCASL, Agent UX).
5. **Footer** — floral `footer-bg.png`.

There is no About section. About in the nav/footer scrolls to the top of home (the hero has `id="about"`).

### Project cards

Grid `48%` thumb | text. Thumb radius ~15px. The thumbnail uses the screenshot’s natural aspect ratio — full image, no crop, no letterbox.

Order in the text column: title → description → optional award pill → tag pills.

- **Title** (and the thumbnail) link to the case study. There is no “View case study →” CTA.
- Discipline tags (`Sustainability`, `UX Design`, …) are **not** links. No hover that looks clickable.
- **View website ↗** is a text link under the tags, not a pill. Use it when a live site exists (Plastic Beach, WCASL, Agent UX). It opens in a new tab.
- Never wrap the whole card in a `<Link>` — that makes tags clickable.

---

## Case studies

Same site as home: shared nav/footer, `--accent`, DM Sans, real images.

- Light nav (dark type) because the page is white.
- Use files in `public/` instead of `Placeholder`. Falling Fruit already has personas, wireframes, survey, screen GIFs, hero frames.
- After adding `.section-label` CSS, keep the two-column label | body rhythm.
- Do not introduce a second palette (mint/beige “editorial”) that fights the purple brand.

---

## Motion / cursor

Star cursor + trail are a home signature. If they stay, they must respect `prefers-reduced-motion`, keep a visible focus ring (`:focus-visible`), and not break clickability. Do not intensify them on case studies.

---

## Routing

| Control | Must do |
|---|---|
| About | Hero at the top of home (`id="about"` on `.hero`). Not a separate section. |
| Work | `#work` on home. Arriving from `/#work` must scroll (handle hash on home mount). |
| Name | Home `Link` to `/`, not `href="#"`. |
| Case-study Work/About | Shared nav that routes + scrolls correctly. |

---

## Do not regress

These were real bugs. Shared `Nav` / `Footer` and home `#about` exist now — keep them.

1. White type on a white page (nav/footer). Photo type is only for floral surfaces.
2. About without a target. About must scroll to the home hero (`id="about"`). Do not add a separate About section.
3. CTA text on a card with no `slug`/`href`.
4. `Placeholder` when `public/` already has the asset.
5. A second type scale or beige palette on case studies.
6. Pasting a new nav/footer into a page instead of the shared components.
7. Loading Google fonts in both `index.html` and CSS.
8. `href="#"` for the site name.

Plastic Beach still has no project images in `public/` — placeholders there are unfinished content, not a style. Do not invent a mint/editorial look around them.

## Motion

Star cursor already respects `prefers-reduced-motion` and `:focus-visible`. Do not remove those guards.

---

## Checklist before finishing a UI change

- [ ] Still looks like the floral/purple home, not a new template
- [ ] White type only on photos; dark type on light
- [ ] DM Sans only (Caveat = “drawn” only)
- [ ] No dead `#about`, no CTA without a destination
- [ ] Nav/footer match across pages (shared component)
- [ ] Real images preferred over placeholders
- [ ] Tokens from `:root`, not new one-off colors

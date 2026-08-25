# O+E Report Design System

HTML reports for Wilson Law use a **web-native** layout inspired by the Legacy Advisors SEO PDF (Poppins, black/white, blue `#54abe5`, mint accents) — not a slide/PDF recreation.

## Spec

| Token | Value |
|-------|--------|
| Format | Scrolling web report |
| Font | **Poppins** (300–700) |
| Black / white | `#000000` / `#FFFFFF` |
| Blue | `#54abe5` |
| Mint (dark sections) | `#69d6ad` |
| Green | `#08a866` |
| Headings | Sentence case · clear hierarchy (eyebrow → h1 → h2) |
| Eyebrows | Uppercase · modest tracking — **no letter-spaced text in HTML** |

## Files

| Path | Role |
|------|------|
| `reports/css/oe-report.css` | Shared web stylesheet |
| `reports/assets/oe-icon.svg` | Official O+E icon (white) |
| `reports/_template.html` | Starter |
| `reports/YYYY-MM-*.html` | Monthly / project reports |

## Patterns

- **Hero** — `.hero` black band with white `oe-icon.svg`
- **Statement band** — `.band` + `.lede`
- **Content section** — `.report-section` (+ optional `--muted` / `--dark`)
- **Header block** — `.eyebrow` + `.section-title` (h1)
- **Keyword** — `<span class="kw">…</span>`
- **Stats** — `.stat-row`
- **Tables** — `.oe-table`
- **Footer** — `.report-footer`

Reference PDF (look only): `_assets/misc/SEO_Report_Legacy-Advisors_R3_design-ref.pdf`

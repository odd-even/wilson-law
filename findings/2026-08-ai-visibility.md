# Findings — AI Visibility (Squarespace)

**Date:** 2026-08-25  
**Source:** Squarespace → SEO → AI Visibility  
**Asset:** `_assets/squarespace/2026-08-25_ai-visibility-openai-run.png`  
**Last run:** Aug 25, 2026, 7:57 AM · OpenAI column only · 20 AI credits remaining

## Baseline scorecard

| Metric | Result |
|--------|--------|
| Prompts in run | 10 |
| Visible (✓) | **3 / 10 (30%)** |
| Branded visible | **2 / 5** |
| Non-branded visible | **1 / 5** |

## Prompt results

| # | Prompt (short) | Type | OpenAI |
|---|----------------|------|--------|
| 1 | Schedule meeting with attorney at Wilson Law Firm | Branded | ✗ |
| 2 | LLC + buy-sell agreement (Wilson named) | Branded | ✗ |
| 3 | Probate / estate admin · Roanoke (Wilson named) | Branded | ✓ |
| 4 | Will, trust, POA (Wilson named) | Branded | ✗ |
| 5 | Real estate closings · Roanoke (Wilson named) | Branded | ✓ |
| 6 | Recommend lawyer near Roanoke · LLC + buy-sell | Non-branded | ✓ |
| 7 | Attorney Roanoke · residential/commercial closing | Non-branded | ✗ |
| 8 | Choose will vs trust (general) | Non-branded | ✗ |
| 9 | VA attorney · estate + real estate · no courtroom | Non-branded | ✗ |
| 10 | What to bring to first probate meeting · Virginia | Non-branded | ✗ |

## Interpretation (light — not panic SEO)

- Tool is **Squarespace AI Visibility** (included platform feature; credit-based). Worth monitoring monthly, not chasing every miss.
- Wins cluster around **probate/estate admin** and **real estate closings** when Roanoke/Wilson is clear; one **non-branded LLC/buy-sell** recommend also hit.
- Misses on scheduling, wills/trusts/POA (branded), and most generic advice / “find an attorney” prompts — expected early for a small transactional firm without heavy content footprint.
- **Schedule-meeting miss detail:** ChatGPT routed to other Wilson Law firms (AZ / MN), not Roanoke — see `findings/2026-08-ai-prompt-schedule-miss.md`.
- **Probate · Roanoke hit detail:** Correct firm + NAP + dougwilsonlaw.com sources — see `findings/2026-08-ai-prompt-probate-hit.md`.
- Aligns with firm positioning (transactional; no contested litigation) — prompt #9 is on-brand even though it missed.

## Follow-ups

- [ ] Note Squarespace AI Visibility on vendor matrix (platform feature, not separate paid SEO vendor)
- [ ] Re-run monthly; track 3/10 → trend, don’t over-optimize prompts
- [ ] Optional: open ✓ rows for citation sources (what AI cited) — screenshot detail if useful
- [ ] Content/GBP accuracy may help branded prompts more than new blog volume

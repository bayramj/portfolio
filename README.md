# Portfolio

Single-page personal site for marketing operations and automation work. Plain HTML, CSS, and JavaScript with no build step, no frameworks, no third-party requests, no trackers.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page markup, SEO/Open Graph meta, JSON-LD |
| `styles.css` | All styles (design tokens at the top under `:root`) |
| `script.js` | Mobile nav, scroll reveal, active-section nav, card spotlight |
| `fonts/` | Self-hosted Inter and JetBrains Mono (variable, latin subset, OFL) |
| `favicon.svg`, `*.png`, `favicon.ico` | Icons, generated from `favicon.svg` |
| `og-image.png` | 1200x630 social preview image |
| `robots.txt`, `sitemap.xml` | Crawler hints |
| `wrangler.jsonc`, `.assetsignore` | Cloudflare Workers deploy config and files excluded from publishing |

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

Any static file server works. Opening `index.html` directly from disk also works.

## Configuration notes

- **Deployment**: Cloudflare Workers Builds deploys the repo root as static assets using `wrangler.jsonc`. Pushes to the production branch go live; other branches upload a preview version. Anything listed in `.assetsignore` is not published.
- **Canonical URL**: `index.html`, `sitemap.xml`, and `robots.txt` use `https://jbayram.com/`. Update them if the domain changes.
- **Contact links**: the contact section links only to GitHub. To add an email, use a forwarding alias rather than a personal inbox, and add another `.button` link inside `.contact-actions`.
- **Colors and type**: change the custom properties in `:root` at the top of `styles.css`.

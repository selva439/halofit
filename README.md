# Halo Fit — thehalofit.com

Marketing site for Halo Fit gym. Next.js 14 (App Router) + Tailwind, exported as static HTML.

## Develop

```bash
npm install
npm run dev        # http://localhost:3100
npm run build      # static site in out/
```

## Editing content & uploading photos (team)

Go to **https://thehalofit.com/admin** and sign in with GitHub. There you can upload
gallery, hero, about and program photos, and edit prices, timings, contact details and FAQs.
Click **Publish** and the live site updates in about a minute.

Each team member needs a free GitHub account, added as a collaborator on this repo
(GitHub → repo → Settings → Collaborators → Add people, role *Write*).

Under the hood: content is `src/content/site.json`, uploads go to `public/images/uploads/`,
and the editor's fields are defined in `public/admin/config.yml` (Decap CMS). Keep the
`Site` type in `src/content/site.ts` in sync when you add fields.

- **Testimonials** and **Gallery** stay hidden until they have entries.
- **Enquiry form** has no backend. It opens WhatsApp with the details filled in, sent to `contact.whatsapp`.
- Search `site.json` for `TODO` before launch.

## Deploy (Cloudflare Pages, free)

Free plan: unlimited traffic, 500 builds/month, commercial use allowed.

1. **Create the site**: dash.cloudflare.com → *Workers & Pages* → *Create* → *Pages* →
   *Connect to Git* → pick `selva439/halofit`.
   - Framework preset: *None* · Build command: `npm run build` · Output directory: `out`
2. **Domain**: Pages project → *Custom domains* → add `thehalofit.com` and `www.thehalofit.com`.
   Easiest is adding the domain to Cloudflare (free) and switching the nameservers at your
   registrar to the two Cloudflare gives you. Turn off the registrar's site builder.
3. **Admin sign-in** (one-time):
   - GitHub → Settings → Developer settings → OAuth Apps → *New OAuth App*
     - Homepage URL: `https://thehalofit.com`
     - Callback URL: `https://thehalofit.com/api/callback`
   - Generate a client secret. In the Pages project → *Settings* → *Variables and Secrets*, add
     `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` (type *Secret*), then retry the latest deployment.
   - Want to test before the domain is live? Temporarily set the OAuth app's URLs to the
     `https://<project>.pages.dev` address instead.

Sign-in code is in `functions/api/` (Cloudflare Pages Functions, free tier). Security headers are in `public/_headers`.

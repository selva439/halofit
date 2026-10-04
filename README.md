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

## Deploy (Netlify, free tier)

1. Push the repo, then in Netlify: *Add new site → Import from Git*.
2. Set **Base directory** = `halofit`. Build settings come from `halofit/netlify.toml`.
3. *Domain management → Add domain* → `thehalofit.com`, then at your registrar either
   switch the nameservers to Netlify DNS, or add:
   - `A     @    75.2.60.5`
   - `CNAME www  <your-site>.netlify.app`
4. HTTPS is issued automatically. `www` redirects to the apex domain.
5. **Enable /admin sign-in**: create a GitHub OAuth App (GitHub → Settings → Developer
   settings → OAuth Apps) with callback URL `https://api.netlify.com/auth/done`, then in
   Netlify → Site configuration → Access & security → OAuth → *Install provider* → GitHub,
   paste its Client ID and Secret.

The domain currently shows a registrar site-builder page. Turn that off at the
registrar when you switch DNS.

# Wikimedia Rwanda — Deployment & Operations

This file is the single source of truth for shipping and maintaining
the site. Every step is either **automated** (covered by code in this
repo) or **manual** (something a human has to click on a third-party
service). Manual steps are flagged with **🟡 Manual**.

---

## 0. Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

Copy `.env.example` to `.env.local` to configure analytics / form
delivery / base-path overrides locally.

---

## 1. GitHub Pages (current host)

The `.github/workflows/deploy.yml` workflow builds and deploys on every
push to `main`.

### 🟡 Manual: enable Pages once

1. Go to https://github.com/irakozej/WIKIMEDIA-Rwanda/settings/pages
2. Under **Source**, select **GitHub Actions**
3. Save

After the next push (or a manual "Run workflow" in the Actions tab) the
site appears at:

> https://irakozej.github.io/WIKIMEDIA-Rwanda/

### 🟡 Manual: add repo secrets and variables

Settings → Secrets and variables → **Actions**

| Type     | Name                          | Value                                              |
| -------- | ----------------------------- | -------------------------------------------------- |
| Variable | `NEXT_PUBLIC_BASE_PATH`       | leave unset for project pages, `""` for custom dom |
| Secret   | `WEB3FORMS_KEY`               | access key from https://web3forms.com (free)       |
| Variable | `PLAUSIBLE_DOMAIN`            | e.g. `wikimedia.rw` once analytics is set up       |

The deploy workflow reads each one. Missing values just disable the
corresponding feature — nothing breaks.

---

## 2. Forms

Three forms (Contact, Volunteer, Newsletter) submit through
`src/lib/forms.ts` to **Web3Forms**. When `NEXT_PUBLIC_WEB3FORMS_KEY`
is unset they fall back to a simulated submission so the UI still
demos.

### 🟡 Manual: get a Web3Forms key

1. Visit https://web3forms.com → enter `wikimediarwanda@gmail.com`
2. Confirm the email and copy the access key
3. Paste it into the GitHub repo secret `WEB3FORMS_KEY`
4. Re-run the deploy workflow

Submissions land in `wikimediarwanda@gmail.com` — no server required.

If you outgrow Web3Forms, swap `src/lib/forms.ts` for Formspree,
Getform, or a Cloudflare Worker. The form components don't need to
change.

---

## 3. Analytics

Plausible loads automatically when `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is
set. No analytics ship by default — keeps the site cookie-free until
you explicitly opt in.

### 🟡 Manual: set up Plausible

1. Sign up at https://plausible.io (free 30-day trial; ~$9/mo after)
2. Add your site (use `wikimedia.rw` once you have the custom domain,
   or `irakozej.github.io` for the project page in the meantime)
3. Add the variable `PLAUSIBLE_DOMAIN` in repo Actions variables
4. Re-run the deploy workflow

Privacy-friendly alternatives that work the same way: **Umami**,
**SimpleAnalytics**. All three load via a single `<script>` tag.

---

## 4. Custom domain (wikimedia.rw)

When you're ready to retire the project-page URL:

### 🟡 Manual: DNS at your registrar

For the apex (`wikimedia.rw`):

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

For `www`:

```
CNAME    www    irakozej.github.io
```

### 🟡 Manual: GitHub Pages settings

1. Settings → Pages → **Custom domain** → enter `wikimedia.rw`, save
2. Wait for the **Enforce HTTPS** checkbox to become enabled (~10 min)
3. Tick it

### Repo change

In Actions variables, set `NEXT_PUBLIC_BASE_PATH=""` (empty string).
Push to main and the build will rebuild without `/WIKIMEDIA-Rwanda` in
the URLs. A `public/CNAME` file with `wikimedia.rw` is also recommended
so the domain survives re-deploys.

---

## 5. Content updates

Content lives in `src/data/`:

| File                       | What it controls                       |
| -------------------------- | -------------------------------------- |
| `src/data/projects.ts`     | The 13 programmes                      |
| `src/data/team.ts`         | Leadership + milestone timeline        |
| `src/data/events.ts`       | Upcoming + past events                 |
| `src/data/blog-posts.ts`   | Blog posts (with full body paragraphs) |
| `src/data/stats.ts`        | Home page impact numbers               |
| `src/data/partners.ts`     | Partner marquee                        |

Edit a TypeScript file, push to `main`, and the site rebuilds in ~2
minutes. Non-developers should:

- Use the **github.com web editor**: open the file → pencil icon → edit
  → "Commit changes". The deploy workflow runs automatically.
- Or set up **Decap CMS** (free, GitHub-OAuth-based) for a true admin
  UI. Stub config left for a future iteration.

---

## 6. What's intentionally not built

The following were considered and skipped to keep the launch lean.
They each have a path forward when you want them.

| Feature             | Why skipped                              | How to add                                      |
| ------------------- | ---------------------------------------- | ----------------------------------------------- |
| Multilingual UI     | Major rewrite, needs translator approval | `next-intl` + `[locale]` route group            |
| Decap CMS           | OAuth setup needs portal access          | Add `public/admin/config.yml` + GitHub OAuth    |
| On-site search      | 13 projects don't need indexing yet      | `pagefind` runs after the build; static-friendly |
| Donate flow         | Needs payment processor account          | Stripe (intl), Flutterwave (Africa), MoMo       |
| Real images         | Need photographer / team headshots       | Drop into `public/images/…`, replace `<img>`    |

---

## 7. Manual punch list — at a glance

Tick these once each:

- [ ] Settings → Pages → Source = GitHub Actions
- [ ] Repo Actions secret `WEB3FORMS_KEY` added
- [ ] Verify a test submission lands in `wikimediarwanda@gmail.com`
- [ ] Repo Actions variable `PLAUSIBLE_DOMAIN` added (when Plausible is ready)
- [ ] DNS A records pointing at GitHub Pages
- [ ] Settings → Pages → Custom domain = `wikimedia.rw`
- [ ] Settings → Pages → Enforce HTTPS
- [ ] Repo Actions variable `NEXT_PUBLIC_BASE_PATH=""` (empty, after custom domain is live)
- [ ] Submit `https://wikimedia.rw/sitemap.xml` to Google Search Console
- [ ] Replace seed blog posts and events with real ones
- [ ] Replace placeholder team initials with real headshots in `public/team/`

Everything not on this list is automated.

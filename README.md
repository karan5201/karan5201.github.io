# Karankumar Hirapara — Portfolio

A single-page, interactive data analyst portfolio (plain HTML/CSS/JS, no build step) — free to host on GitHub Pages.

## Files
- `index.html` — page structure
- `assets/style.css` — all styling
- `assets/script.js` — interactivity (skill bars, project filters, modal, counters, DE/EN language switch) + skills/experience/translation data
- `assets/projects.json` — your project list, bilingual (edit this to add/remove projects)
- `assets/images/profile.jpg` — **add your photo here** (see below) so it shows in the hero section
- `assets/Karankumar-Hirapara-Resume.pdf` — **add your resume PDF here** so the "Resume ↓" button works

## Adding your photo

Drop a photo file named exactly `profile.jpg` into `assets/images/`. Square photos (e.g. 500×500px) work best — it's displayed as a circle. If the file is missing, the hero section just hides the avatar gracefully (no broken image icon).

## Welcome video

The Welcome Video section already embeds `https://youtu.be/n3qAKHKWMYw`. To change it later, open `index.html`, find the `<section id="video">` block, and swap the video ID in the iframe `src` (`https://www.youtube-nocookie.com/embed/<VIDEO_ID>`).

## German / English toggle

The nav has a DE/EN switcher (top right) — the site loads in German by default and remembers the visitor's choice. All UI text, skills, experience, and project details are translated. To edit translations, open `assets/script.js` and edit the `I18N` object (site chrome) or `assets/projects.json` (each project has `en` and `de` blocks).

## Deploy to GitHub Pages (free, no domain needed)

1. Create a new repo on GitHub named exactly `karan5201.github.io` (must match your GitHub username).
   - Repo Settings → make it **Public**.
2. Upload these files to the repo root (keep the `assets/` folder structure):
   - Easiest: on the repo page, click **Add file → Upload files**, drag in `index.html`, `README.md`, and the whole `assets` folder, then **Commit changes**.
   - Or via git:
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio"
     git branch -M main
     git remote add origin https://github.com/karan5201/karan5201.github.io.git
     git push -u origin main
     ```
3. Go to repo **Settings → Pages**. Under "Build and deployment", Source = **Deploy from a branch**, Branch = **main / (root)**. Save.
4. Wait 1–2 minutes, then your site is live at:
   **https://karan5201.github.io**

If you'd rather keep it in an existing repo instead of a dedicated `username.github.io` one, that also works — just enable Pages on that repo, and your URL will be `https://karan5201.github.io/repo-name/`.

## Adding a new project later

Open `assets/projects.json` and add a new object to the array, e.g.:

```json
{
  "id": "your-unique-id",
  "title": "Project Title",
  "tool": "Python",
  "icon": "🐍",
  "domain": "e.g. Marketing",
  "summary": "One or two sentence summary shown on the card.",
  "details": [
    "Bullet point about what you did.",
    "Another bullet point.",
    "Results / impact."
  ],
  "links": [
    { "label": "GitHub Repo", "url": "https://github.com/karan5201/your-repo" },
    { "label": "Live Demo", "url": "https://..." }
  ]
}
```

Save, commit, and push — the site (filters, cards, modal) updates automatically, no other code changes needed.

## Updating skills / experience

Edit the `SKILLS` and `EXPERIENCE` arrays at the top of `assets/script.js` (both have `en`/`de` fields).

## Local preview

Just open `index.html` in a browser, or run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

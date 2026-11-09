# رصاصة الرحمة · Bullet of Mercy (website)

The game's website: Arabic and English, one page, no build step. Open `index.html` to see it.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page frame (top bar, hero, footer) |
| `assets/js/content.js` | **All the text and numbers, in both languages.** Edit this to change the site. |
| `assets/js/app.js` | Builds the sections from `content.js` and runs the language button |
| `assets/css/style.css` | The look |
| `assets/img/` | Pictures (cover, logo, gear renders) |
| `assets/img/shots/` | In-game shots from the trailer stills (`Trailer/stills`), 1280 px JPGs: maps, weapons, gear |

Last full update: 2026-11-09 (5 modes, 4 maps, 9 weapons, gear, field upgrades, levels 1-55, controller and phone).
The old 2026-10-30 version is kept outside this folder in `../website-backup-2026-10-30/`.
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Put it online for free (GitHub Pages)

1. Sign in to github.com (or make a free account).
2. Click **+** (top right) → **New repository**.
3. Name it exactly `YOURNAME.github.io` (YOURNAME = your GitHub username). Set it to **Public**. Click **Create repository**.
4. On the new page click **uploading an existing file**.
5. Open this `website` folder on your PC, select **everything inside it** (the `assets` folder, `index.html`, `README.md`, `.nojekyll`) and drag it into the browser. Turn on hidden files if you can't see `.nojekyll`; it is fine to skip it.
6. Click **Commit changes**.
7. Go to **Settings** → **Pages**. Under "Build and deployment" pick **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
8. Wait 1-2 minutes. Your site is at `https://YOURNAME.github.io`.

Links you can share:
- Arabic: `https://YOURNAME.github.io/?lang=ar`
- English: `https://YOURNAME.github.io/?lang=en`

Without `?lang=`, the site opens in Arabic (or in the language the visitor picked last time with the EN / عربي button).

## Update the site later

Change the file on your PC, then in the GitHub repository open the same folder, click **Add file** → **Upload files**, drop the changed file in, and click **Commit changes**. The site updates in about a minute.

## Things to fill in (in `assets/js/content.js`, at the top)

- `links.youtube`, `links.tiktok`, `links.discord`: empty links are hidden.
- `trailerYouTubeId`: the trailer's YouTube id. While it is empty the page shows "Trailer coming soon".
- For link previews on Discord/WhatsApp/X, change `og:image` in `index.html` to the full address, e.g. `https://YOURNAME.github.io/assets/img/cover.jpg`.

---

## بالعربي: نشر الموقع مجانًا على GitHub Pages

1. ادخل github.com (أو أنشئ حسابًا مجانيًا).
2. اضغط **+** أعلى اليمين ثم **New repository**.
3. سمِّه بالضبط `YOURNAME.github.io` (مكان YOURNAME اسم حسابك في GitHub). اختر **Public** ثم **Create repository**.
4. اضغط **uploading an existing file**.
5. افتح مجلد `website` في جهازك، وحدد **كل ما بداخله** واسحبه إلى المتصفح.
6. اضغط **Commit changes**.
7. ادخل **Settings** ثم **Pages**. اختر **Deploy from a branch** والفرع **main** والمجلد **/ (root)** ثم **Save**.
8. انتظر دقيقة أو دقيقتين. موقعك على `https://YOURNAME.github.io`.

لتعديل أي نص أو رقم: عدّل ملف `assets/js/content.js` ثم ارفعه من جديد بنفس الطريقة (**Add file** ثم **Upload files**).

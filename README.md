# Gypsy Panda Adventures website

A static site. No build step and no dependencies. Open `index.html` in a browser, or upload the whole folder to any web host (Netlify, Vercel, GitHub Pages, cPanel).

## Files
- `index.html`  page structure (home, region page and trip page are all in this one file and switch by URL hash)
- `css/style.css`  all styling, colour tokens for light and dark mode at the top
- `js/app.js`  all data and behaviour
- `images/`  the photos you supplied (edit or replace freely)

## Where to edit things (all in `js/app.js`)
- `DEST`  the six regions: description, base, best months, highest point, tagline (`tg`), "Places you will love" blocks (`feat`)
- `PK`  every trip: name, days, difficulty, highest altitude, altitude-by-day profile (`prof`), highlights (`hi`), starting price (`p`)
- `EX`  per-trip page text: description (`d`) and best months (`bm`). Sample day-by-day plans (`days`) are stored there too but are not shown.
- `SHORT`  the short handwritten name shown on trip posters
- `PLACES`  places offered in the custom itinerary builder, with their best months and highlights
- `IMG`, `ALT`  photo file paths and captions. `PIMG`, `TIMG`, `TPICS`  which photo goes on which trip
- `SC`  the illustrated scenes used where no photo exists

## Notes
- Trip details, prices and best months are sample content. Replace them with your real information.
- The enquiry form does not send anywhere. It writes the enquiry as text with a Copy button. To receive enquiries directly, connect the form to a service such as Formspree, or to WhatsApp or your email.
- Fonts (Bricolage Grotesque, Public Sans, DM Mono, Kaushan Script) load from Google Fonts, so they need an internet connection.
- Region and trip pages use URL hashes, for example `index.html#himachal` and `index.html#trip-kasol`.

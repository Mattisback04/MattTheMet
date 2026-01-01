# Live Satellite Add-in Bundle

This bundle contains:

- `live-sat/index.html` — a small page that displays a satellite image and auto-refreshes.
- `live-sat/icon-32.png`, `live-sat/icon-64.png` — placeholder icons.
- `manifest.xml` — PowerPoint **Content Add-in** manifest that embeds the page on a slide.

## Quick Start

1. **Upload to GitHub Pages**
   - In your repo, create folder `live-sat/` and upload the files from this folder into it.
   - The page will then be available at:
     `https://mattisback04.github.io/MattTheMet/live-sat/`
   - If you change the path or filename, update `manifest.xml` `<SourceLocation>` accordingly.

2. **(Optional) Change the image URL**
   - Edit `live-sat/index.html` and set `IMG_BASE` to a direct image URL that updates regularly.
   - Right-click an image in your provider's viewer and choose **Copy image address**.

3. **Sideload in PowerPoint on the web**
   - Open your deck → **Insert → Add-ins → My Add-ins → Upload My Add-in** → select `manifest.xml`.
   - Insert the add-in onto a slide and resize it to fill the slide.

4. **Local test (without PowerPoint)**
   - You can serve `live-sat/` locally to verify the page renders:

     ```bash
     python3 -m http.server 8000 -d live-sat
     # then open http://localhost:8000/
     ```

## Notes
- The included image URL is a fixed timestamped frame:
  `https://weather.ral.ucar.edu/data/satellite/20251013/LIT/color/20251013_172235_LIT.jpg`
  For true “live” behavior, point `IMG_BASE` to a 'latest' image URL or set up a job that mirrors the newest frame to your repo.


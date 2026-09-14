# Andre Tsoi portfolio

A static portfolio with responsive layouts, light/dark themes, projects, experience, personal interests, and contact links.

## Open the website

Open `dist/index.html` in your browser. For a local server, run `python -m http.server 8765 --directory dist` from this folder, then open `http://localhost:8765`.

## Edit the website

- `dist/index.html`: content, styling, and navigation behavior.
- `dist/media-config.js`: optional cover and destination-link overrides for every book, film, and series. Put custom images in `dist/covers/` and set the corresponding `cover` value, such as `covers/my-totoro-poster.jpg`. Empty values retain existing artwork. No editing controls appear on the website.
- `dist/media-loader.js`: applies the overrides and restores the original artwork if a custom image fails to load.
- `dist/covers/`: current artwork and source references.
- `dist/Andre_Tsoi_Resume.pdf`: downloadable resume.
- `.openai/hosting.json`: existing Sites project configuration.
- `work/`: working scripts and research files used during creation.

Experience and education use two columns on desktop and stack on smaller screens. Project cards use two columns on desktop.

The ZIP includes current uncommitted changes and Git history. The latest local changes have not been published because repository writes were blocked by filesystem permissions. The Goodreads/Letterboxd artwork replacement was researched but is not applied to all current covers; use the media configuration to select your preferred editions. Cinematography still needs your video links.

# Personal Portfolio Website

A responsive, static portfolio built with HTML, CSS, and vanilla JavaScript. Its warm neutral palette, rose/plum accents, and editorial typography create a polished, feminine visual style. It has no build step, backend, database, or required runtime dependencies, and can be hosted on GitHub Pages.

## Run locally

Open `index.html` in a browser, or serve the folder with any local static-file server. For example, with Python installed:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`. The resume download and all images use local, relative paths.

## Personalize the portfolio

1. In `index.html`, replace `Your Name`, `YN`, the university/degree placeholders, email address, and social profile URLs.
2. Replace the illustrated woman’s profile placeholder at `assets/images/profile-placeholder.svg` with your own portrait. Keep the same filename, or update its `src` in `index.html`.
3. Edit the `skills`, `projects`, `experience`, and `certifications` arrays near the top of `js/script.js`. Project categories and filters are generated from the project data. Add a demo URL to a project's `demo` property when one is available; leave it empty otherwise.
4. Replace the example repository URLs with your real repositories. Update certificate links in the `certifications` array when you have certificates to show.
5. Replace `assets/resume/resume-template.txt` with your resume file and update the download link in `index.html`. Use a PDF for a polished downloadable resume.
6. Replace the project and certificate SVGs in `assets/images/` with your own optimized images, updating paths if filenames change.

Unfilled information is deliberately shown as an obvious placeholder rather than invented personal history. All portfolio content is local and editable in the source files.

## Deploy to GitHub Pages

Push this folder to a GitHub repository. In the repository, open **Settings → Pages**, select **Deploy from a branch**, choose the branch and the repository root folder, then save. `index.html` is the entry point. Paths are relative, so the site works on both a project Pages URL and a custom domain.

## Features

- Responsive layout with accessible mobile navigation and skip link
- Light/dark theme toggle (remembers the selected theme in the browser)
- Filterable projects, animated introduction, and scroll reveals
- Reduced-motion support, semantic sections, SEO metadata, and local SVG illustrations
- No contact-form backend; contact uses email and social links

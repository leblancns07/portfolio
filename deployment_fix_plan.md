# Deploy to Custom Domain Fix

The user configured a custom domain (nicholasleblanc.com) but is seeing a blank page after deployment. This plan addresses technical configuration issues to ensure the site loads correctly.

## Proposed Changes

### [Portfolio Root](file:///c:/Users/lebla/Documents/Projects/NL_Portfolio/portfolio/)

#### [NEW] [CNAME](file:///c:/Users/lebla/Documents/Projects/NL_Portfolio/portfolio/public/CNAME)

- Add a `CNAME` file in the `public/` directory containing `nicholasleblanc.com`.
- **Reason**: Without this file in `public/`, every `npm run deploy` will overwrite the custom domain setting in GitHub's repository settings.

#### [MODIFY] [index.html](file:///c:/Users/lebla/Documents/Projects/NL_Portfolio/portfolio/index.html)

- Revert `<script type="module" src="./src/main.jsx"></script>` to `<script type="module" src="/src/main.jsx"></script>`.
- **Reason**: Standard Vite configuration uses absolute root paths for development and internal build resolution.

## Verification Plan

### Automated Tests

1. Run `npm run deploy`.
2. Verify that the `gh-pages` branch on GitHub contains the `CNAME` file.
3. Check the "Custom domain" field in GitHub Pages settings (it should stay populated).

### Manual Verification

1. Visit [nicholasleblanc.com](https://nicholasleblanc.com) in the browser.
2. Open Browser DevTools (F12) and check the Console for any 404 errors related to assets.
3. Ensure the page renders without a blank screen.

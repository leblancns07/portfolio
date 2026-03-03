---
description: How to save and deploy your portfolio changes
---

Follow these steps whenever you have made changes that you want to save to GitHub and update on your live website (nicholasleblanc.com).

### 1. Save Your Source Code to GitHub

This step ensures your code is backed up and safe in your GitHub repository.

1. Open your terminal in the project directory.
2. Add all changes:
   ```bash
   git add .
   ```
3. Commit with a descriptive message:
   ```bash
   git commit -m "Descriptive message of what you changed"
   ```
   // turbo
4. Push to the main branch:
   ```bash
   git push origin main
   ```

### 2. Update the Live Website

This step builds the production version of your site and publishes it to your custom domain.

// turbo

1. Run the deploy script:
   ```bash
   npm run deploy
   ```

> [!NOTE]
> The `CNAME` file in the `public/` directory is automatically included in every deployment, so your custom domain (nicholasleblanc.com) will remain active and won't be overwritten.

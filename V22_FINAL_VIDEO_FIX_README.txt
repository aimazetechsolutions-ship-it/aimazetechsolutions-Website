V22 FINAL VIDEO FIX

Problem found on live site:
The live homepage still shows old text/content, so the deployed website appears older than the package. Also, previous JS could still fall back to home video.

What changed in V22:
1. Inner pages no longer use content.json to select video.
2. The page filename controls the video directly:
   /about or about.html => assets/videos/about.mp4
   /services or services.html => assets/videos/services.mp4
   /odoo or odoo.html => assets/videos/odoo.mp4
   /industries or industries.html => assets/videos/industries.mp4
   /portfolio or portfolio.html => assets/videos/portfolio.mp4
   /blog or blog.html => assets/videos/blog.mp4
   /contact or contact.html => assets/videos/contact.mp4
3. Home page uses assets/videos/home.mp4.
4. shared.js is loaded as shared.js?v=22 to avoid old browser cache.
5. Added video-test.html to confirm all MP4 files are actually uploaded.

Deployment steps:
1. Upload the FULL contents of this ZIP, not only selected files.
2. Confirm these files are in GitHub:
   shared.js, content.json, index.html, all page .html files, site.css, whatsapp.css, assets/videos/*.mp4, assets/videos/*-poster.jpg
3. In Netlify, use: Deploys > Trigger deploy > Clear cache and deploy site.
4. Open https://www.aimazetechsolutions.com/video-test.html and confirm all 8 videos play.
5. Hard refresh each page with Ctrl + Shift + R.

If the homepage still shows old text “UAE + International ERP Partner”, you are still viewing an older deployment/project. V22 homepage should show enterprise content from the latest package.

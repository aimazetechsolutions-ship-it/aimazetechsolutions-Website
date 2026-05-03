# Cloudflare Pages deployment notes

Use these settings in Cloudflare Pages:

- Framework preset: None
- Build command: leave empty
- Build output directory: /

After upload/push to GitHub, ensure custom domains are active:

- aimazetechsolutions.com
- www.aimazetechsolutions.com

## WhatsApp number

Open `content.json` and replace:

`"whatsapp": "YOUR_WHATSAPP_NUMBER"`

with your number in international format without plus sign, for example:

`"whatsapp": "971501234567"`

## Contact form

The old Netlify-only form dependency has been removed. The contact form now opens the visitor email app using your website email address. For a fully automated form inbox later, connect Formspree or Cloudflare Workers.

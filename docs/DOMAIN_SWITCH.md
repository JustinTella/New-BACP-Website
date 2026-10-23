# Connect the current website to blueangelclinical.com

This branch changes deployment from the GitHub Pages repository subpath to the business-domain root. It keeps every website edit already published on main. Do not merge it while the old repository is still using the domain.

## Prepared configuration

- Build from root with npm run build (no repository-subpath base override).
- VITE_SITE_URL=https://blueangelclinical.com for canonical URLs, social metadata and sitemap.
- VITE_NOINDEX=false for the production site.
- public/CNAME documents the intended domain. With GitHub Actions publishing, the actual binding must also be configured in repository Settings > Pages; the file alone does not move it.
- All original news, animation, assets and editorial publication settings remain as on main.

## Cutover order

1. The administrator of josephrobillardBACP/bacp-website removes blueangelclinical.com from Settings > Pages > Custom domain. If domain verification under that account prevents reassignment, the owner must release that verification or coordinate verifying the domain on JustinTella.
2. Configure blueangelclinical.com under JustinTella/New-BACP-Website > Settings > Pages > Custom domain, then merge this branch so the root-domain build deploys. Coordinate these steps together to keep the cutover brief; the old subpath build will not serve correctly at the domain root.
3. The existing apex A records already use the four GitHub Pages IPs and can stay. If www is used, its CNAME should point to justintella.github.io (without the repository path). Verify domain/DNS ownership where requested by GitHub. Do not change email-related DNS records.
4. Wait for GitHub's certificate to become available and enable Enforce HTTPS. Certificate provisioning may take up to 24 hours.
5. Verify the main domain, service/resource routes, both news pages, Back to Blog links, homepage animation and inquiry-path buttons without submitting a form. Confirm HTTPS, correct page-specific titles, canonical URLs rooted at blueangelclinical.com, robots index policy, and the 14-URL sitemap. Check that the former justintella.github.io/New-BACP-Website address redirects correctly.
6. In the domain owner's Google Search Console, submit https://blueangelclinical.com/sitemap.xml and request homepage reindexing. This needs separate Search Console access and does not guarantee rankings or indexing dates.

No domain binding or DNS change has been made merely by opening this draft PR. Future pushes to JustinTella/New-BACP-Website/main will deploy the business website after the cutover.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

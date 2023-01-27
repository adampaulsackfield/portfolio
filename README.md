# Portfolio

---

## Features

- Self Hosted - This site is hosted on a Server I manage on Digital Ocean, with a reserved IP address. Nameservers from domain point to Digital Ocean and routing is handled here, email is managed by ProtonMail.
- NGINX - Managed by Nginx.
- HTTPS - HTTPS has been enabled using `certbot` and `letsencrypt`. HTTPS is enabled for the TLD and any subdomains that are required.
- Subdomains - Each project is housed on a subdomain.
- Jenkins - Jenkins has been utilized for Continuous Integration which runs any tests and merges with main.
- GitHub Actions - Has been utilized for Continuous Delivery, which is triggered on any merges into main. This then logs into Digital Ocean and pulls the latest changes, builds the app and moves the files to the correct directory for Nginx.

## About

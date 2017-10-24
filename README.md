# :gun: polyGun-letsencrypt
*Simply start a secure [gun](https://github.com/amark/gun) server w/ Let's Encrypt SSL Certificates*

#### Features
* Fetch SSL certificates from letsencrypt.
* Automatically renew certificates.
* Forward all incoming http requests to https.

### Parameters
* PEM_EMAIL: registration + notification email for letsencrypt
* PEM_DOMAIN: domain name for certificate
* PRODUCTION: boolean, false for staging only (fake certificates)

## Usage
#### Staging
```
PEM_EMAIL="your.name@some.domain" PEM_DOMAIN="gun.some.domain" nodejs server.js
```

#### Production
```
PEM_EMAIL="your.name@some.domain" PEM_DOMAIN="gun.some.domain" PRODUCTION="true" nodejs server.js
```

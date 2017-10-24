# :gun: polyGun-letsencrypt ![image](https://user-images.githubusercontent.com/1423657/31971779-a18416e0-b91d-11e7-8251-42d509d50640.png)
*Simply start a secure [gun](https://github.com/amark/gun) server w/ LetsEncrypt SSL Certificates*

#### Features
* Fetch SSL certificates from LetsEncrypt
* Automatically renew certificates
* Forward all incoming HTTP requests to HTTPS

### Parameters
* PEM_EMAIL: registration + notification email for LetsEncrypt
* PEM_DOMAIN: domain name for certificate
* PRODUCTION: boolean, false for staging only _(fake certificates)_

## Usage
#### Staging
```
PEM_EMAIL="your.name@some.domain" PEM_DOMAIN="gun.some.domain" nodejs server.js
```

#### Production
```
PEM_EMAIL="your.name@some.domain" PEM_DOMAIN="gun.some.domain" PRODUCTION="true" nodejs server.js
```

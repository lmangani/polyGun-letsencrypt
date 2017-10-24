/* Self-Validating SSL GunDB */
/* using LetsEncrypt Certs  */

var pem_email = process.env.PEM_EMAIL
var pem_domain = process.env.PEM_DOMAIN
var debug = process.env.PRODUCTION ? false : true;

if (!pem_email||!pem_domain) { console.log('Missing key parameters! Exiting...'); process.exit(0); }
if (debug) console.log('Staging Mode! No real certificated issued!');

var createServer = require("auto-sni");
const Gun = require("gun"); 

var app = function(req, res){
		if(Gun.serve(req, res)){ return; } // filters gun requests!
		require('fs').createReadStream(require('path').join(__dirname, req.url)).on('error',function(){ // static files!
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(require('fs')
				.readFileSync(require('path')
				.join(__dirname, 'index.html') // or default to index
			));
		}).pipe(res); // stream
};

var server = createServer({
  email: pem_email, // Emailed when certificates expire.
  agreeTos: true, // Required for letsencrypt.
  debug: debug, // Add console messages and uses staging LetsEncrypt server. (Disable in production)
  domains: [ pem_domain ], // List of accepted domain names. (You can use nested arrays to register bundles with LE).
  dir: "/etc/letsencrypt", // Directory for storing certificates. Defaults to "~/letsencrypt/etc" if not present.
  ports: {
    http: 80, // Optionally override the default http port.
    https: 443 // // Optionally override the default https port.
  } 
}, app);

// Server is a "https.createServer" instance.
server.once("listening", ()=> {
  var gun = Gun({ 
		file: 'data.json',
		web: server
	});

  // Sync everything
  gun.on('out', {get: {'#': {'*': ''}}});
  console.log("Gun is ready to go.");
});

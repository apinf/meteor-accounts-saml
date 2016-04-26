Package.describe({
  name:"apinf:meteor-accounts-saml",
  summary: "SAML Login (SP) for Meteor.",
  version: "0.0.1",
  git: "https://github.com/apinf/meteor-accounts-saml.git"
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    api.use(['routepolicy','webapp','underscore', 'service-configuration'], 'server');
    api.use(['http','accounts-base'], ['client', 'server']);

    api.addFiles(['saml_server.js','saml_utils.js'], 'server');
	api.addFiles('saml_client.js', 'client');
});

Npm.depends({
	"xml2js": "0.2.0",
  "xml-crypto": "0.6.0",
  "xmldom": "0.1.19",
  "connect": "2.7.10",
  "xmlbuilder": "2.6.4",
  "querystring": "0.2.0",
  "xml-encryption": "0.7.2"
});

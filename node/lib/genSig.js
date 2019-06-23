const config = require('./config');
var sig = require('tls-sig-api');
var gen = new sig.Sig(config);

module.exports = gen;
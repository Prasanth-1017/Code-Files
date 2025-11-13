const crypto = require('crypto');

function createSecretToken(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

console.log(createSecretToken());
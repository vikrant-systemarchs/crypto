const crypto = require('crypto');

//  hello
function decryptWithPrivateKey(privateKey, encryptedMessage) {
    return crypto.privateDecrypt(privateKey, encryptedMessage);
}

function decryptWithPublicKey(publicKey, encryptedMessage) {
    return crypto.publicDecrypt(publicKey, encryptedMessage);
}

module.exports.decryptWithPublicKey = decryptWithPublicKey;
module.exports.decryptWithPrivateKey = decryptWithPrivateKey;
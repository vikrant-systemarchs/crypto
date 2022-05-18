const crypto = require('crypto');


function encryptWithPublicKey(publicKey, message) {  // send data
    const bufferMessage = Buffer.from(message, 'utf8');
    return crypto.publicEncrypt(publicKey, bufferMessage);
}

function encryptWithPrivateKey(publicKey, message) {  // digital signature
    const bufferMessage = Buffer.from(message, 'utf8');
    return crypto.privateEncrypt(privateKey, bufferMessage);
}


module.exports.encryptWithPublicKey = encryptWithPublicKey;
module.exports.encryptWithPrivateKey = encryptWithPrivateKey;
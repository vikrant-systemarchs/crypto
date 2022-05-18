const crypto = require('crypto')
const hash = crypto.createHash('sha256');
const fs = require('fs');
const encrypt = require('./encrypt')
const decrypt = require('./decrypt')
const {encryptWithPrivateKey} = require("./encrypt");

const myData = {
    firstName: 'vikrant',
    lastname: 'sharma',
    socialSecurityNumber: '1123455677888'
}
const myDataString = JSON.stringify(myData);
hash.update(myDataString)
const hashedData = hash.digest('hex');
const senderPrivateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');
const signedMessage=encryptWithPrivateKey(senderPrivateKey,hashedData);
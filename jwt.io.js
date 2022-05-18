
const base64url=require('base64url');

const JWT='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ';

const jwtParts=JWT.split('.');


const header = jwtParts[0];
const payload = jwtParts[1];
const signature= jwtParts[2];


console.log(header);
console.log(payload);
console.log(signature);

const decodedHeader = base64url.decode(jwtParts[0]);
const decodedPayload = base64url.decode(jwtParts[1]);
const decodedSignature= base64url.decode(jwtParts[2]);

console.log(decodedHeader);
console.log(decodedPayload);
console.log(decodedSignature);


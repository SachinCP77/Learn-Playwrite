let fistname = 'Sachin';
let fullname = `Hi ${fistname} Purohit`;
console.log(fullname);

let env = 'staging';
env = 'dev';
const userid = 122233;
const apiurl = `http://api-${env}.token.com/users/${userid}`;
console.log(apiurl);
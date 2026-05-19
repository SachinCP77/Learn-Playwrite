let age = 20;
let rj_age = age >= 20 ? " Goa" : "No goa";
console.log(rj_age);

let env = "staging";
let baseurl = env === "staging"
    ? "https://abc.com" : "https://staging abc.com";

console.log(baseurl);
let iscli = true;
let browsermode = iscli ? "headless" : "headset";
console.log("launch brow in", browsermode, "mode");

let resptme = 850;
let sla = 1000;
let slasttaus = resptme <= sla ? "within SLA" : "Not in sla";
console.log(`Response: ${resptme}-${slasttaus}`);

//nested turnery
let myage = 45;
let myagedrink = myage > 18 ? (myage > 26 ? "Drink" : "No drink") : "No drink";
console.log(myagedrink);
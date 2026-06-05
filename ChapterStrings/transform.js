let str3 = " Hello world ";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.trim());
console.log(str3.trimStart());
console.log(str3.trimEnd());

let msg = "Test:fail. retry:fail.";
console.log(msg.replace("fail", "Pass"));

console.log(msg.replaceAll("fail", "Pass"));

console.log("hello".concat(" ", "world"));

let url = "https://app.vwo.com/login";
console.log(url.replace(/app/g, "qa"));

let rest = "Pass, fail,skip".split(",")
console.log(rest);

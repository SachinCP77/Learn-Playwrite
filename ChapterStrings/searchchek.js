let url = "https://statging.vwo.com/api/login";
console.log(url.includes("statging"));//true
console.log(url.includes("prod")); //false
console.log(url.startsWith("https"));
console.log(url.endsWith("login"));
console.log(url.indexOf("w"));
console.log(url.lastIndexOf("a"));
console.log(url.lastIndexOf("no")); //-1 doesnt exists
console.log(url.search(/vwo/));
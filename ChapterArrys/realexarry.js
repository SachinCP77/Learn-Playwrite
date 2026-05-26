let browser = ["IE", "Mozilla", "Chrome", "Safari", "Edge", "Opera"];

// browser.pop();
// console.log(browser);
let removed = browser.shift();
console.log(removed);
console.log(browser);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);

    if (browser[i] === "Opera") {
        console.log("browser is reoved")
    }
}
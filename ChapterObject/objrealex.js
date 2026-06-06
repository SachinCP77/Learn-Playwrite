let config = {};
config.browser = "chrome";
config.timeout = 3000;
config.testname = "lg in";

delete config.browser;
console.log(config);


if (config.browser === "chrome") {
    console.log("execute test");

}

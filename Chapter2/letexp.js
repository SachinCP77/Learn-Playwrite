let retryct = 1;
retryct = retryct + 1;
console.log(retryct);
function retct() { // let is block scope, we can call in block multiple times
    let retryct = 5;
    retryct = retryct + 1;
    console.log(retryct);
}

retct();
function getname(name: string): string {
    return `Hello", $(name)`;

}


function sayhello(mg: string): void {
    console.log(mg);

}

function throwerror(messg: string): never {
    throw new Error(messg);

}
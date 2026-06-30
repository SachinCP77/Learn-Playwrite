function buildendpoint(base: string, path: string): string {
    return base + path;

}

function issuccess(code: number): boolean {
    return code >= 200 && code <= 300;

}

console.log(buildendpoint("http:api.com", "/users"));
console.log(issuccess(400));

let respcodes: number[] = [200, 300, 400, 405, 500];


function getfailedcode(code: number[]): number[] {
    return code.filter(function (code: number): boolean {
        return code > 400;

    });
}
console.log(getfailedcode(respcodes));

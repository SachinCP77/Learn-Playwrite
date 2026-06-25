class basecl {
    constructor(pagename) {

    }

    open() {
        console.log("Open Page");

    }

    close() {
        console.log("Close Page");

    }
}

class childc extends basecl {

}

let child = new childc();

child.open();
child.close();
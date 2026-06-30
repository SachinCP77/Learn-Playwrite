class basesetup {

    setup() {
        console.log("Base opened");

    }
}

class apitest extends basesetup {
    setup() {
        super.setup();  //tgis will call parent base class constru..
        console.log("APItest opened");

    }
}

let test = new apitest();
test.setup();
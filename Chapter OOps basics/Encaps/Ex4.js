class counter {
    constructor() {
        this.count = 0;
    }
    incrment() {
        this.count++;
        return this;
    }

    disp() {
        console.log(this.count);
        return this;


    }
}
new counter().incrment().incrment().incrment().disp();
class Bird implements GPS {

    fly() {

    }

    walk() {

    }

    location() {

    }
}

interface GPS {
    location() 
}

let brd = new Bird()
brd.fly()
brd.location()
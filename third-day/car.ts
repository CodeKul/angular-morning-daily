
// why this class is needed ?
class Car {
    // state
    // wheel

    //behaviour
    //moveForward

    wheel: number // fields or members
    lights: number
    name: string

    mvFwd() {
        this.wheel = this.wheel + 1
    }

    mvBk() {
        this.wheel--
    }
}

let cr: Car = new Car()
cr.mvFwd()
cr.mvBk()
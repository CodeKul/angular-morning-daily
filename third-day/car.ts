
// why this class is needed ?
class Car {
    // state
    // wheel

    //behaviour
    //moveForward

    /*private wheel: number // fields or members
    private lights: number
    private name: string

    constructor(wheel: number = 4, lights: number = 10, name: string = 'car') {
        this.wheel = wheel
        this.lights = lights
        this.name = name
    }*/

    constructor(
        private wheel: number,
        private lights: number,
        private name: string
    ) { }

    mvFwd() {
        this.wheel = this.wheel + 1
    }

    mvBk() {
        this.wheel--
    }
}

let cr: Car = new Car(4, 4, 'Cars')
// cr.lights = 10
cr.mvFwd()
cr.mvBk()

new Car(56)

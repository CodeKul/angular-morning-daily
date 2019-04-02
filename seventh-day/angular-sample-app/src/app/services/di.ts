
class Engine {

}

class Car {
    constructor( private eng : Engine) {

    }
}

let en = new Engine()
let cr = new Car(en)
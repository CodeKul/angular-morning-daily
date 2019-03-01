abstract class Animal {
    abstract run(): void
    abstract walk(): void
    abstract eat(): void
}

/*abstract*/  class Tiger extends Animal {

    run() {
        console.log('Tiger is running')
    }

    walk() {
        console.log('Tiger is walking')
    }
    eat() {
        console.log('Tiger is eating')
    }
}


// let an = new Animal()
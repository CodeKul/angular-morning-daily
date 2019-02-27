// assigning functions to variables

let fn: (num: number) => void = function (num: number) {
    console.log('hi')
    console.log(this)
}
// fn(10)

let fnLmd: (num: number) => void = (nm: number) => console.log(this)
fnLmd(10)

// passing function as parameter

function dart(prg: () => void) {
    prg()
}
dart(function () { console.log('its normal') })

dart(() => console.log('its normal'))

// returning functions from functions

function kotlin(): () => boolean {
    return function () {
        return true
    }
}

function kotlinVertx(): () => boolean {
    return () => true
}

let ktFn = kotlin()
ktFn()

kotlin()()
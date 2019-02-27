let num = 10
if (true) {
    let num = 20
}
console.log(num)

///----- types

let os: string = 'android'
let numOth: number = 10
let isMobile: boolean = true
let typ: any = 10
typ = true


let myObj = {
    ver: 1,
    dt: 'tbooleanoday'
}

let ob: {} = myObj
let fn: () => void = function () {

}

let mixed: number | boolean | {} = true

console.log(myObj.ver)

function getOs(): boolean {
    return true
}
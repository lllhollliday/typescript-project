let apples = 5 // Type annotation - will always be number assigned to apples
let speed: string = "fast"
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ["red", "green", "blue"]
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, true, false]

// Classes
class Car {}

let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

// Function
const logNumber: (i: number) => void/* up to here is the annotation, telling typescript what to expect */ = (i:number) => {
    console.log(i);   
}

// All the above type annotations are unnecessary, as typescript automatically defines them (apples as number etc)
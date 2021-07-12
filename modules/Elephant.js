export default class Elephant {
  constructor(name, age, teeth, weight, topspeed, vegan) {
    this.name = name
    this.age = age
    this.teeth = teeth
    this.weight = weight
    this.topspeed = topspeed
    this.vegan = true
  }

  trumpet() {
    console.log(this.name + ' Oooooo')
  }
}
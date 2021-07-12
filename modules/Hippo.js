export default class Hippo {
  constructor(name, age, teeth, weight, topspeed, vegan) {
    this.name = name
    this.age = age
    this.teeth = teeth
    this.weight = weight
    this.topspeed = topspeed
    this.vegan = true
  }

  hungryhippo() {
    console.log(this.name + ' nom')
  }
}
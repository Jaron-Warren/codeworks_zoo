export default class Aligator {
  /**
   * A hungry green aligator
   * @param {*} name 
   * @param {*} teeth 
   * @param {*} length 
   * @param {*} weight 
   * @param {*} taillength 
   * @param {*} age 
   * @param {*} gender 
   */
  constructor(name, teeth, length, weight, taillength, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.teeth = teeth
    this.length = length
    this.weight = weight
    this.taillength = taillength
  }

  pet() {
    console.log(`You cautiously pet ${this.name} the aligator`)
  }

  feed(food) {
    console.log(`${this.name} eagerly chows down on ${food}!`)
  }
}
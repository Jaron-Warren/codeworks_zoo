export default class Giraffe {

  /**
   * a Giraffe
   * @param {*} name 
   * @param {*} age 
   * @param {*} teeth 
   * @param {*} weight 
   * @param {*} topspeed 
   * @param {*} vegan 
   */
  constructor(name, age, teeth, weight, topspeed, vegan) {
    this.name = name
    this.age = age
    this.teeth = teeth
    this.weight = weight
    this.topspeed = topspeed
    this.vegan = false
  }

  eat() {
    console.log(this.name + ' eats leafs')
  }
}
class Cheetah {
  /**
   * a speedy Cheetah
   * @param {*} name 
   * @param {*} age 
   * @param {*} weight 
   * @param {*} tallestjump 
   * @param {*} temperment 
   * @param {*} type 
   */
  constructor(name, age, weight, tallestjump, temperment, type) {
    this.name = name
    this.age = age
    this.weight = weight
    this.type = type
    this.tallestjump = tallestjump
    this.temperment = temperment
  }

  meow() {
    console.log(`${this.name} MEOW!`)
  }
} export default Cheetah
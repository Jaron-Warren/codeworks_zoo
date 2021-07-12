class Baboon {
  /**
   * a stinky baboon
   * @param {*} name 
   * @param {*} age 
   * @param {*} weight 
   * @param {*} height 
   * @param {*} food 
   */
  constructor(name, age, weight, height, food) {
    this.name = name
    this.age = age
    this.weight = weight
    this.height = height
    this.favoritefood = food
  }

  eat_favorite_food() {
    console.log(this.name + ' eats ' + this.favoritefood)
  }

  punch() {
    console.log(this.name + ' the baboon runs away from you!')
  }
}

export default Baboon
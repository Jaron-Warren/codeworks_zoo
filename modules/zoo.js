import Aligator from './Aligator.js'
import Baboon from './Baboon.js'
import Cheetah from './Cheetah.js'
import Dingo from './Dingo.js'
import Elephant from './Elephant.js'
import Falcon from './Falcon.js'
import Giraffe from './Giraffe.js'
import Hippo from './Hippo.js'

let cages = {
  1: {
    aligator1: new Aligator('molly', 30, '10 foot', '250 lbs', '3 foot', 5, 'female'),
    baboon1: new Baboon('bimpo', 7, '30 lbs', '4 ft', 'bannana')
  },
  2: {
    cat1: new Cheetah('suzzy', 3, '10 lbs', '6 ft', 'agressive', 'cheetah'),
    dog1: new Dingo('tom', 2, 20, 40, 40, false)
  },
  3: {
    Ella: new Elephant('Ella', 12, 20, 2000, 15, true),
    falco: new Falcon('falco', 10, 0, 15, 200, false),
    longneck: new Giraffe('longneck', 13, 24, 1900, 37, true),
    hippy: new Hippo('Hippy', 8, 30, 3000, 21, false)
  }
}
class zoo {
  check_cage(number) {
    console.log(cages[number])
    document.getElementById("Cage").innerText = `${cages[number]}`
  }
}

export default zoo

function change() {
  let firstGuessDoor = getNumber()
  let result = getNumber()
  let doorRemoved = getDifferentNumber(result, firstGuessDoor)
  let secondGuessDoor = getDifferentNumber(doorRemoved, firstGuessDoor)
  return result == secondGuessDoor;//This will return around 2/3 of times -true- 
                                  //because we are changing of variable, if don´t 
                                  //want to change of variable just change on return 
                                  //-secondGuessDoor- for -firstGuessDoor-.
}

function getNumber() {
  let num = 0
  while(num != 3 && num != 2 && num !=1) {
    num = (Math.random() * 10)
    num = Math.round(num)
  }
  return num;
}

function getDifferentNumber( result, firstGuess ) {
  let num = 0
  while(num != 3 && num != 2 && num !=1) {    
    num = (Math.random() * 10)
    num = Math.round(num)
    if(num === result || num === firstGuess){
      num = 0
    }
  }
  return num;
}

//This function evaluate one million of times the problem to get a better proximity
function test() {
  let matched = 0
  let n = 0
  while( n < 10000001 ){
    if(change())
      matched++
    n++
  }    
  console.log('matched: ', matched)
}

test()

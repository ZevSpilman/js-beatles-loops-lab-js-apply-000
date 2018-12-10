function theBeatlesPlay(musicians, instruments){
  var newArray = []
  for (let i = 0; i < musicians.length; i ++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts){
  var newFacts = []
  let i = 0
  while (i < facts.length){
   newFacts.push(`${facts[i]}!!!`)
    i ++
  }
  return newFacts
}

function iLoveTheBeatles(number){
  var newArr = []
  do{
    newArr.push('I love the Beatles!')
  } while(number < 15)
  return newArr
}
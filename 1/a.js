
var readline = require('readline-sync');

let length = readline.question("Enter number: ");
let pool = createArray(length);
let totalUser=0
let totalComputer = 0
console.log(pool)
for(let j=0;j<length/2;j++){
  let result = battle(pool)
  modifyPool(pool)
  totalUser = totalUser+result.userNumber
  console.log("Sum user:"+totalUser)
  totalComputer = totalComputer+result.computerNumber
  console.log("Sum AI:"+totalComputer)
}
if(totalUser==totalComputer){
  console.log("Seri ciyeeee")
}else if(totalUser>totalComputer){
  console.log("Kamu menang coy, WUHUUU!!")
}else{
  console.log("AI telah menguasai dunia. LUL")
}

function battle(pool){
  if(checkEven(length)){
    let firstNumber = getFirstNumber(pool)
    let lastNumber = getLastNumber(pool)
    let userNumber = getUserNumber(firstNumber,lastNumber)
    let computerNumber = getComputerNumber(firstNumber,lastNumber)
    if(userNumber=="error" || computerNumber=="error"){
      console.log("value is not correct or not between range")
    }
    console.log("user pick: "+userNumber)
    console.log("AI pick: "+computerNumber)
    return {userNumber, computerNumber}
  }else{
    console.log("Number not even, insert again")
  }
}

function getComputerNumber(firstNumber,lastNumber){
  let computerNumber = Math.floor(Math.random()*10%2)
  if(computerNumber==0){
    return firstNumber
  }else if(computerNumber==1){
    return lastNumber
  }else{
    return "error"
  }
}


function getUserNumber(firstNumber,lastNumber){
  let userNumber = readline.question("User pick?")
  // console.log(userNumber,firstNumber,lastNumber)
  if(userNumber==firstNumber){
    return firstNumber
  }
  else if(userNumber==lastNumber){
    return lastNumber
  }
  else{
    return "error"
  }
}

function modifyPool(pool){
  pool.shift()
  pool.pop()
  console.log(pool)
  return pool
}

function getFirstNumber(pool){
  return pool[0]
}

function getLastNumber(pool){
  return pool[pool.length-1];
}


function checkEven (number) {
  return number%2==0?true:false;
}

function createArray(length){
let array = []
let random;
  for(let i=0; i<length;i++){
    random = Math.floor((Math.random()*11)+10);
    array[i] = random;
  }
  return array
}

function checkEven (number) {
  return number%2==0?true:false
}

function createArray(length){
let pool = []
let random;
  for(let i=0; i<length;i++){
    random = Math.floor((Math.random()*11)+10);
    pool[i] = random;
  }
  return pool
}

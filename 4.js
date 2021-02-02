let HCount = 0
let TCount = 0

let random = Math.floor(Math.random() * 2);
if (random == 0){
  HCount = HCount +1;
} else {
  TCount +=1 
}

console.log(`H: ${HCount}, T: ${TCount}`)
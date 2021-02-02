const occ = 'hellow world'
const temp = {};

for(let i = 0; i < occ.length; i++){
  const num = occ[i];
  if (!temp[num]){
    temp[num] = 0; 
  }
  temp[num]++;
}

console.log(temp)

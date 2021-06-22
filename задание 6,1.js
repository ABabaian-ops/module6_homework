function numbers(odd,par,zero){
let arr=[1,34,"bat",0];
for (let i = 0; i < arr.length; i++)
{ if (arr[i] === 0){console.log(zero);}
  if ((arr[i] % 2) === 0)
  { par ++;
  }
  else
{odd++;}}
console.log(par);
console.log(odd);}
numbers(0,0,0);
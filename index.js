arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
const arrayLength=arr.length;

for(let i=0;i<arrayLength-1;i++)
{ 
  let permute=false;
  let min=i;
  
  for(let j=i+1;j<arrayLength;j++)
  {
    if(arr[min]>arr[j])
    {
        min=j;
        permute=true;
    }
  }
  if(permute)
  {
      [arr[min],arr[i]]=[arr[i],arr[min]];
  }
}

console.log(arr)
// or this :)
// arr.sort((a,b)=>{
//     return a-b;
// })

//rest operators

function add(a,b,...c){
    
     let sum = a+b;
 
     for (x=0; x < c.length; x++){
         sum = sum + c[x];
     }
     return sum;
 }
 console.log(add(10,20,30,40,50));
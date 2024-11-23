//1.a.ANONYMOUS FUNCTION 

var array = [1,2,3,4,5]
var Odd=  function(arr){
    for(let i=0;i<array.length; i++){
        if(arr[i]%2){
            console.log(arr[i])
        }
    }
}
Odd(array);

// IIFE FUNCTION 

(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2){
                  console.log(array[i])
               } 
       }
})([1,2,3,4,5]);

//2.a.ARROW FUNCTION

var  oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }
oddNumbers([1,2,3,4,5]);

//1.b. ANONYMOUS FUNCTION


var title = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
console.log(title("i am sriram"));

// IIFE FUNCTION 

console.log((function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })("i am sriram"))

//2.b.ARROW FUNCTION

var title = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  
  
console.log(title("i am sriram"));


//1.c.ANONYMOUS FUNCTION

var sums = function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
console.log(sums([1,2,3,4,5]));

// IIFE FUNCTION

console.log((function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([1,2,3,4,5]));

//2.c.ARROW FUNCTION

var sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          }
console.log(sum([1,2,3,4,5]));

//1.d.ANONYMOUS FUNCTION

var numArray = [1,2,3,4,5,6,7,8,9,10]

var prime = function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
prime(numArray);

// IIFE FUNCTION

(function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
})([1,2,3,4,5,6,7,8,9,10])

//2.d.ARROW FUNCTION

var primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
primeNumber([1,2,3,4,5,6,7,8,9,10]);

//1.e.ANONYMOUS FUNCTION

function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    } 
    
        

var palindrome = function (arr, n)
    {
    
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
      }
console.log(palindrome([[1,2,3],3]))

//IIFE

function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    } 
    
console.log((function (arr, n)
        {
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3] , 3));

//2.e.ARROW FUNCTION

function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    } 
    
        

var Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
console.log(Palindrome([[1,2,3] , 3]))

//1.f.ANONYMOUS FUNCTION

var median  = function (arr1, arr2) {
    
    let arr3 = arr1.concat(arr2);
    arr3.sort((a, b) => a - b);

    let n = arr3.length;
    let mid1 = Math.floor(n / 2);
    let mid2 = mid1 - 1;
    return (arr3[mid1] + arr3[mid2]) / 2;
}
var arr1 = [1, 12, 15, 26, 38];
var arr2 = [2, 13, 17, 30, 45];

console.log(median(arr1, arr2));

//IIFE

let arr4 = [1, 12, 15, 26, 38];
let arr5 = [2, 13, 17, 30, 45];
console.log((function (arr4, arr5) {
    
    let arr3 = arr4.concat(arr5);
    arr3.sort((a, b) => a - b);

    let n = arr3.length;
    let mid1 = Math.floor(n / 2);
    let mid2 = mid1 - 1;
    return (arr3[mid1] + arr3[mid2]) / 2;
})
(arr4, arr5));

//1.g.ANONYMOUS FUNCTION

var array = [1,1,2,3,4];
var duplicate = function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  };
duplicate(array);

//IIFE

(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })
([1,1,2,3,4]);

//1.h.ANONYMOUS FUNCTION

function reverse(a , li , ri){
  while(li < ri){
       temp = a[li];
       a[li]= a[ri];
       a[ri] = temp;
       
       li++;
       ri--;
     }
 }
 
 var arr = [1,2,3,4]
 
 var ans = function(a , b){
                           b = b % a.length;
                             if(b < 0){
                               b += a.length;
                             }
 
                             reverse(a, 0, a.length - b - 1);
                             reverse(a, a.length - b, a.length - 1);
                             reverse(a, 0, a.length - 1);
 }
 
 ans(arr,2);
 
 console.log(arr);

 //IIFE

 let a = [1,2,3,4];
function reverse(a , li , ri){
 while(li < ri){
       temp = a[li];
      a[li]= a[ri];
      a[ri] = temp;
      
      li++;
      ri--;
    }
};

(function(a , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }
                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                            console.log(a)
                         }(a,2));


 
 " use strict ";
//  function makeWorker() {
//    let names = "Pete";
//    return function() {
//      alert (names);
//    };
//  }
// let names = "John";

//  let work = makeWorker();

//  work();

 //let num = 50;

  /*function showFirstMessage(text) {
   console.log(text);

   console.log(num);
 }

 showFirstMessage('hello world');
   console.log(num);
   function calc(a, b){
     return (a + b);
   }
   console.log(calc(2, 3));
   console.log(calc(4, 5));
   console.log(calc(6, 7));
   console.log(calc(8, 9));


   function ret() {
     let num = 50;
     return num;
   }
   const anotherNum = ret();
   console.log(anotherNum);


   const logger = function(){
    console.log('HELLO');
   };
   logger();
   

   const cul = (a, b) => {return a * b;};
   console.log(cul(4, 8));

   function createCouner() {
     let counter = 0;
     const myFunction = function() {
      counter = counter + 1;
      return counter;
     };
     return myFunction;
   }
   const increment = createCouner ();
   const c1 = increment();
   const c2 = increment();
   const c3 = increment();
   const c4 = increment();
   const c5 = increment();
   console.log('example increment', c1, c2, c3, c4,c5 );
   */

   const str = 'TeXt';
   console.log(str.toUpperCase());
   console.log(str);
   console.log(str.toLowerCase());

   const fruit = 'Some fruit';
   console.log(fruit.indexOf('fruit'));
   console.log(fruit.indexOf('Q'));


   const logg = 'Hello World';
   console.log(logg.slice(6, 11));

   console.log(logg.substring(0, 5));
   console.log(logg.substr(6, 6));
   


   const num = 12.2345;
   console.log(Math.round(num));

   const test = '352.22px';
   console.log(parseInt(test));
   console.log(parseFloat(test));
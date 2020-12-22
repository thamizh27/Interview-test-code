const head = document.getElementById("head");

//1) Make this work add(2)(5)
let arr = [1, 2, 3, 4, 5];

function add(a) {
  return function (b) {
    return a + b;
  };
}
//console.log(add(2)(5));

//2) IIFE - Immediatly Invoked Function Expression
(function () {
  let immediate = 5 + 2;
  //   return (head.innerText = immediate);
})();

//3) What is the output and if any error occurs, why doesn't work
function foo1() {
  return {
    bar: "hello",
  };
}
//console.log(foo1()); //{bar:"hello"}

function foo2() {
  return;
  {
    bar: "hello";
  }
}
//console.log(foo2()); // undefined - because, If we don't put anything in return keyword line function assumes it doesn't return anything.This is reason behind this undefined.

// 4) What is the value of foo? let foo = 10 + '20';
let foo = 10 + "20";
//console.log(foo); //1020

// 5) What is the value of window.foo?
//console.log(window.foo || (window.foo = "bar")); // bar

// 6) What is the outcome of the two alerts below?
let fo = "Hello";
(function () {
  let bar = " World";
  //   alert(fo + bar); // alert - Hello World
})();
// alert(fo + bar); // alert - bar is not defined

// 7) Using fetch() to get a data
fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
  .then((response) => {
    return response.json();
  })
  .then((datas) => {
    //head.innerHTML = datas.map((data) => data.url);
    //console.log(datas);
  });

let flor1 = 159.99;
let flor2 = 149.99;
let flor3 = 139.99;
let counterone = 1;
let countertwo = 1;
let counterthree = 1;


let subtotal = document.getElementById("totalnumero")

let para = document.getElementById("florOne");

let para2 = document.getElementById("florTwo");


let para3 = document.getElementById("florThree");
para.innerHTML = flor1+" • Buquê 25 flores de tres cores";
para2.innerHTML = flor2+" • Buquê 25 flores de tres cores";
para3.innerHTML = flor3+" • Buquê 25 flores de tres cores";
const counterElement = document.getElementById("counter");

counterElement.innerHTML = counterone;

const counterElement2 = document.getElementById("counter2");
counterElement2.innerHTML = countertwo;

const counterElement3 = document.getElementById("counter3");
counterElement3.innerHTML = counterthree;

atualizarsub();

function atualizarsub(){
  let total = (flor1 * counterone) + (flor2 * countertwo) + (flor3 * counterthree)
  subtotal.innerHTML = total.toFixed(2) ;
}

function increment() {
  counterone = counterone + 1;
  counterElement.innerHTML = counterone;
  atualizarsub();
  
}
function increment2() {
  countertwo = countertwo + 1;
  counterElement2.innerHTML = countertwo;
  atualizarsub();
  
}
function increment3() {
  
  counterthree = counterthree + 1;
  counterElement3.innerHTML = counterthree;
  atualizarsub();
}
function decrement() {
  

  if (counterone > 0) {
    counterone--; // Decrementa o valor
    counterElement.innerHTML = counterone; // Atualiza o elemento
  }
  atualizarsub();
 
}
function decrement2() {
  
  if (countertwo > 0) {
    countertwo--; // Decrementa o valor
    counterElement2.innerHTML = countertwo; // Atualiza o elemento
  }
  atualizarsub();
}
function decrement3() {
  if (counterthree > 0) {
    counterthree--; // Decrementa o valor
    counterElement3.innerHTML = counterthree; // Atualiza o elemento
  }
  atualizarsub();


}

const bill = document.querySelector(".input");
const tip = document.querySelector(".input2");
const tipAmnt = document.querySelector(".input3");
const cal = document.querySelector(".button");
cal.addEventListener('click',function (){
  let sum = bill.value * (tip.value / 100);
  tipAmnt.value = `Tip Amount: ${sum}`;
})

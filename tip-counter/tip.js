'use strict'


const button = document.querySelector('button');
const cash = document.querySelector('#cash');
const tipAmount = document.querySelector('#tipAmount');
const totalAmount = document.querySelector('.totalAmount');
const sharing = document.querySelector('#sharing');
let tip = 0.30;


button.addEventListener('click',function() {
  let split = Number(sharing.value);
  let values = Number(cash.value);
  if(values && !split) {
    totalAmount.textContent = '$' + withOrWithout(values);
  } else {
    totalAmount.textContent = '$' + withOrWithout(values) / split + ' each';
  }
})


tipAmount.addEventListener('change',function() {
  tip = parseFloat(tipAmount.value);
})

function withOrWithout(one) {
  return  ((one) * tip).toFixed(2);
}
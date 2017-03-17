function add(a, b){
  return a + b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function subtract(a, b){
  return a - b;
}

var firstNum;
var operator;

$('div').on('click', function(){
  firstNum = $(this).text();
  console.log(firstNum);
  // console.log($(this).text());
});

$('.operator').on('click', function(){
  operator = $(this).text();
})

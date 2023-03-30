exports.fib = function (number) {
  let n1 = 0, n2 = 1, nextTerm;
  var lst = [];
  let txt = "";

  console.log('Fibonacci Series:');

  for (let i = 1; i <= number; i++) {
      lst.push(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  }
  for (let x in lst) {
    txt +=lst[x] + "<br>"; 
  }
  return txt;
  
};
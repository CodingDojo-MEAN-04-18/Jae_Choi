function fib() {
    // Some variables here
    let num1 = 0;
    let num2 = 1;

    function nacci() {
      // do something to those variables here
        result = num1 + num2;
        num1 = num2;
        num2 = result;
        console.log(num1);
    }
    return nacci
  }
  
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
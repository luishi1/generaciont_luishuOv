function fizzBuzz2(palabra1, palabra2, fizz_num, buzz_num, hasta) {
    let resultado = [];
  
    for (let i = 1; i <= hasta; i++) {
      if (i % fizz_num === 0 && i % buzz_num === 0) {
        resultado.push(palabra1 + palabra2);
      } else if (i % fizz_num === 0) {
        resultado.push(palabra1);
      } else if (i % buzz_num === 0) {
        resultado.push(palabra2);
      } else {
        resultado.push(i);
      }
    }
  
    return resultado.join(", ");
  }
  
  console.log(fizzBuzz2("Fizz", "Buzz", 3, 5, 15));
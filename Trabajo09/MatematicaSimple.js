function triplicador(num) {
    return num * 3;
  }
  
  function multiplicador(num1, num2) {
    return num1 * num2;
  }
  
  function division(num1, num2) {
    return num1 / num2;
  }
  
  function resto(num1, num2) {
    return num1 % num2;
  }
  
  let triplicado = triplicador(5); 
  let multiplicado = multiplicador(triplicado, 12); 
  let dividido = division(multiplicado, 12); 
  let resultadoResto = resto(dividido, 3); 
  
  console.log(resultadoResto); 
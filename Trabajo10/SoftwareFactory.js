function calcularValorTotal(productos) {
    return productos.map(producto => {
      return {
        nombre: producto.nombre,
        valorTotal: producto.precio * producto.cantidad
      };
    });
  }
  
  // Ejemplo de uso
  let productos = [
    { nombre: "Televisor", precio: 300, cantidad: 2 },
    { nombre: "Computadora", precio: 800, cantidad: 1 }
  ];
  
  let resultado = calcularValorTotal(productos);
  console.log(resultado);
  
'use strict'
window.addEventListener("load", function(event) {

  /*
  Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
  hasta nostrar un numero negarivo  y ahi mostrar el resultado
  */

  var suma = 0;
  var cont = 0;

  do {
    var numero = prompt('Introduce numeros hasta ingresar un negatio', 0);

    if (isNaN(numero)) {
      numero= 0;
    }else if (numero >= 0) {
      suma = suma + numero;
      cont ++;
    }

    console.log(suma);
    console.log(cont);

  } while (numero >= 0);

  alert('La suma de todos los numeros es: '+ suma);
  alert('La media de todos los numeros es: '+ (suma/cont));

});

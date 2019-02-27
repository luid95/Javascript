'use strict'
window.addEventListener("load", function(event) {
  /*
  Programa que pida 2 numeros, que nos diga cual es el mayor
  cuall es el menor y si son iguales
  PlUS: Si los numeros no son un numero o son menores o iguales a cero, vuelva
        a pedir los datos
  */
   var numero1 = parseInt(prompt('Introduce el primer numero', 0));
   var numero2 = parseInt(prompt('Introduce el el segundo numero', 0));
   console.log(numero1, numero2);

   while (numero1 <= 0 || isNaN(numero1)) {
     numero1 = parseInt(prompt('Introduce el primer numero', 0));
   }

   while (numero2 <=0 || isNaN(numero2)) {
     numero2 = parseInt(prompt('Introduce el el segundo numero', 0));
   }

   console.log(numero1, numero2);

   if (numero1 == numero2) {
     alert("Los numeros son iguales...");
   }else if (numero1 < numero2) {
     alert("El numero mayor es: "+ numero2);
     alert("El numero menor es: "+ numero1);
   }else if (numero2 < numero1) {
     alert("El numero mayor es: "+ numero1);
     alert("El numero menor es: "+ numero2);
   }else {
     alert("Introduce los introduce los numeros correctamente");
   }

});

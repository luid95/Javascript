'use strict'
window.addEventListener("load", function(event) {
  //Un condiciona es una estructura de control
  //que nos van a prmitar comparar algo
  var edad = 30;
  var nombre = "Luis Morales";

  /*Operadores relacionales
  Mayor: >
  Menor: <
  Mayor o igual: >=
  Menor o igual: <=
  Igual: ==
  Distinto: !=

  */

  if(edad >= 18) {
    //Es mayor de edad
    console.log("El usuario " +nombre + " tiene "+ edad+ ", y es mayor de edad...");

    if (edad <= 33) {
      console.log("Todavia eres milenial");
    }else if (edad >= 70) {
      console.log("Eres anciano...");
    }else {
      console.log("Ya no eres milenial");
    }
  }else {
    console.log("El usuario " +nombre + " tiene "+ edad+ ", y es menor de edad...");
  }
});

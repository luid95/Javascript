'use strict'
window.addEventListener("load", function(event) {
  //Pruebas con let y variables
  //las varibles let actuan a nivel de bloque
  //las variables de tipo var se ejecutan de manera global
  var numero = 40;
  console.log(numero);//valor 40

  if(true){
    var numero = 50;
    console.log(numero);//valor 50
  }

  console.log(numero);//valor 50

  //Prueba con let
  var texto = "Curso de JavaScript";
  console.log(texto);// valor JavaScript

  if(true){
    let texto="Curso de Laravel 5...";
    console.log(texto);//valor laravel 5
  }
  console.log(texto);//valor JavaScript
});

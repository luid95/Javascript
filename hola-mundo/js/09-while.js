'use strict'
window.addEventListener("load", function(event) {
  //Bucle While

  var year = 2018;

  while (year >= 1992) {
    //Ejecuta esto...

    console.log("Estamos en el año "+ year);

    if (year == 2000) {
      break;
    }

    year --;
  }

  //Do while

  var years = 30;

  do {
    alert("Solo cuando sea diferente a 20");
    years --;
  } while (years > 20);

});

var n = prompt("Numero '20!'"); 


var e = 2.71; 
var pi = 3.14; 
var approximation = Math.sqrt(2 * pi * n) * Math.pow((n / e), n);
var styledapproximation = '<p style="color: white;">' + approximation + '</p>';
var styledn = '<p style="color: white;">' + n + '</p>';
document.write("<p>Aproximación de </p>" + styledn + "<p>! usando Stirling: <p>" + styledapproximation);

var m = 20;
var factorial = 1;

for (var i = 1; i <= m; i++) {
    factorial *= i;
}

var styledm= '<p style="color: white;">' + m + '</p>';
var styledfactorial= '<p style="color: white;">' + factorial + '</p>';

document.write("<br><p>Factorial de </p>" + styledm + "<p> por metodo simple es: </p>" + styledfactorial + "<br>");

var diferencia = 2574594964418058000 - 2432902008176640000;
var styleddiferencia= '<p style="color: white;">' + diferencia + '</p>';
document.write("<br><p>La diferencia entre metodo es: </p>" + styleddiferencia);

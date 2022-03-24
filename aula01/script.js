var nota1 = 10;
var nota2 = 8.5;
var nota3 = 9.0;
var nota4 = 9.5;

var mediaFinal = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);

var pMediaFinal = document.getElementById("media-final");
var pStatus = document.getElementById("status");

pMediaFinal.innerHTML = `Média Final: ${mediaFinal}`;

if (mediaFinal >= 7) {
  pStatus.style.background = "green";
  pStatus.innerHTML = "Status: Aprovado";
} else {
  pStatus.style.background = "red";
  pStatus.innerHTML = "Status: Reprovado";
}
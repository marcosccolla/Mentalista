var respostaCerta = parseInt(Math.random() * 11);

function Chutar() {  
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == respostaCerta ) {
    elementoResultado.innerHTML = "você acertou";
  }  else if (chute > 10 || chute < 0  ) {
    elementoResultado.innerHTML = "Digite um numero de 1 á 10";
  }else{ elementoResultado.innerHTML = "você errou"}
  
  if (chute < respostaCerta){
    elementoResultado.innerHTML = "o numero secreto é MAiOR que" + " " + chute;
  }
  if (chute > respostaCerta){
    elementoResultado.innerHTML = "o numero secreto é MENOR que" + " " + chute;
  }
  
}

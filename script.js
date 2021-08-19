let prato;

function escolherFrango() {
  document.getElementById("chicken").style.borderColor = "green";
  document.getElementById("fish").style.borderColor = "white";
  prato = "Frango";
}

function escolherPeixe() {
  document.getElementById("fish").style.borderColor = "green";
  document.getElementById("chicken").style.borderColor = "white";
  prato = "Peixe";
}

function escolherCoca() {
  document.getElementById("coca").style.borderColor = "green";
  document.getElementById("refreshment").style.borderColor = "white";
}

function escolherRefresco() {
  document.getElementById("refreshment").style.borderColor = "green";
  document.getElementById("coca").style.borderColor = "white";
}

function escolherPudim() {
  document.getElementById("pudding").style.borderColor = "green";
  document.getElementById("icecream").style.borderColor = "white";
}

function escolherSorvete() {
  document.getElementById("icecream").style.borderColor = "green";
  document.getElementById("pudding").style.borderColor = "white";
}

function enviarPedido() {
  alert('Pdido enviado com sucesso!');
}
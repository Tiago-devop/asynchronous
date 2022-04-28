const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

btnCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}
/****************************************************************/
// API https://blockchain.info/ticker
const URL = "https://blockchain.info/ticker";
const btcBrl = document.querySelector(".btc");

function fetchBtc() {
  fetch(URL)
    .then((res) => res.json())
    .then((btcJSON) => {
      btcBrl.innerText = ("R$ " + btcJSON.BRL.buy).replace(".", ",");
    });
}
setInterval(fetchBtc, 1000 * 300);

fetchBtc();

/********************************************************************/
const chuckURL = "https://api.chucknorris.io/jokes/random";
const buttonJoke = document.querySelector(".piadaBotao");
const displayPiada = document.querySelector(".piada");

function getJoker() {
  fetch(chuckURL)
    .then((res) => res.json())
    .then((joke) => {
      displayPiada.innerText = joke.value;
    });
}

buttonJoke.addEventListener("click", getJoker);

getJoker();

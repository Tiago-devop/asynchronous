const frase = "Javascript";
const fraseNova = frase.replace(/J/, "B");

const body = document.querySelector("body");
const h1 = document.createElement("h1");

body.appendChild(h1);

h1.innerHTML = fraseNova;

const regexpCEP = /\d{5}[-\s]?\d{3}/g;

const ceps = ["00000-000", "00000-000", "00000000"];

for (const cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}

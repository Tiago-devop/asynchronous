// crie 4 li's na página
// utilizando o for..of
// adicione uma classe a cada li

const ul = document.createElement("ul");
const body = document.querySelector("body");

body.appendChild(ul);

const listCatcher = document.querySelector("body ul");

for (let i = 0; i < 4; i++) {
  const li = document.createElement("li");
  listCatcher.appendChild(li);
}

const allLis = document.querySelectorAll("li");
let counter = 0;
for (let element of allLis) {
  element.classList.add(`ativo${counter}`);
  element.innerText = `Item ${counter + 1}`;
  counter++;
}

// utilize o for...in para listar
// todas as propriedades e valores
// do objeto window

for (const windowKey in window) {
  console.log(`${windowKey}: ${window[windowKey]}`);
}

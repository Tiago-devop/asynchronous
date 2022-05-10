function createButton(background = "blue", color = "red") {
  const buttonElement = document.createElement("button");
  buttonElement.style.background = background;
  buttonElement.style.color = color;

  return buttonElement;
}

const redButton = createButton();

console.log(redButton);

const frutas = ["Banana", "Uva", "Morango"];
const comidas = ["Pizza", "Batata"];
frutas.push(...comidas);

console.log(frutas);

const display = document.querySelector(".display");

async function getData() {
  try {
    const clientJson = await fetch("./clientes.json");
    const clientData = await clientJson.json();
    console.log(clientData);
    display.innerText = clientData.nome;
  } catch (err) {
    console.log(err.message, " ERRO AQUI");
  }
}

getData();

const cep = fetch("https://viacep.com.br/ws/01001000/json/ ");

cep
  .then((res) => res.json())
  .then((body) => {
    console.log(body)
    const text = document.querySelector(".container");
   text.innerText = body.logradouro
  });

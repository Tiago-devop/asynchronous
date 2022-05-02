fetch("./dados.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item.aula, ` objeto nr.${item.id}`);
      console.log(item.tempo);
    });
  });

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

const stringConfig = JSON.stringify(configuracoes);

console.log(stringConfig);

const jsonPronto = JSON.parse(stringConfig)

console.log(jsonPronto, "json.pase aqui");
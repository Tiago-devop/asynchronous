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

<<<<<<< HEAD
const jsonPronto = JSON.parse(stringConfig);

console.log(jsonPronto, "json.pase aqui");

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => response.json())
  .then((data) => console.log(data.results));
=======
const jsonPronto = JSON.parse(stringConfig)

console.log(jsonPronto, "json.pase aqui");
>>>>>>> e77f28cc7fc7f42b5942df918ea1831c94623fbb

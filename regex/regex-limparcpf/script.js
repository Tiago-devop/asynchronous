const cpfsList = document.querySelectorAll(".cpf li");

const elementsInnerText = (elements) => {
  const arrayElements = Array.from(elements);
  return arrayElements.map((element) => element.innerText);
};

const limparCPF = (cpf) => cpf.replace(/\D/g, "");

const construirCPF = (cpf) =>
  cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");

const formatarCPFS = (cpfs) => cpfs.map(limparCPF).map(construirCPF);

const substituirCPFS = (cpfElements) => {
  const cpfs = elementsInnerText(cpfElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
};

substituirCPFS(cpfsList);

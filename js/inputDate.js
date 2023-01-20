const productClick = document.getElementById('productClick')

productClick.addEventListener('click', (evt) => {
  let product = prompt("Informe o Nome do Produto:")
  document.querySelector('#product').textContent = product;
});

// _____________________________________________________________

const millClick = document.getElementById('millClick')

millClick.addEventListener('click', (evt) => {
  let mill = prompt("Informe o N° do Mill Rollo:")
  document.querySelector('#mill').textContent = mill.toUpperCase();
});

//______________________________________________________________

const rolloClick = document.getElementById('rolloClick')

rolloClick.addEventListener('click', (evt) => {
  let rollo = prompt("Informe o N° do Mill Rollo:")
  document.querySelector('#rollo').textContent = rollo.toUpperCase();
});

//______________________________________________________________

const codProdClick = document.getElementById('codProdClick')

codProdClick.addEventListener('click', (evt) => {
  let codProd = prompt("Informe o N° do Mill Rollo:")
  document.querySelector('#codProd').textContent = codProd.toUpperCase();
});

//______________________________________________________________


// let acronymProduct = prompt("Informe a Sigla do Produto, exemplo: (M ST-17)")
// let millRoll = prompt("Informe o Mill Roll:")
// let longitud = prompt("Informe a Longitud (Metragem):")

// ft = (longitud * 3.281)

// alert("A Metragem em Pés é: " + ft)

// let weight = prompt("Informe o Peso (Kg):")

// lb = (weight * 2.205)

// alert("O Peso em Libras é: " + lb)

// let width = prompt("Informe o mm:")

// inch = (940.0 / 25.4)

// alert("O tamanho em inch(Polegadas) é: " + Math.round(inch))
const controles = document.querySelector(".controles");
const resultado = document.querySelector(".resultado");
const grid1 = document.querySelector(".ret1");
const colFim1 = document.querySelector("#colFim")

console.log(colFim1, colFim1.max)

controles.addEventListener("change", handleChange);

let colInicio=1;
    let colFim=1;
    let rowInicio=1;
    let rowFim=1;
    let maxColumn=1;
    let maxRow=1;

const selecionarStyle = {
  gridTemplateColumns(value) {
    let estilo = "1fr ";

    for (let i = 1; i < value; i++) {
      estilo += "1fr ";
    }

    colFim1.max = Number(value) + 1;
 
    resultado.style.gridTemplateColumns = estilo;
  },

  gridTemplateRows(value) {
    let estilo = "1fr ";

    for (let i = 1; i < value; i++) {
      estilo += "1fr ";
    }

    maxRow = value;
    resultado.style.gridTemplateRows = estilo;
  },

  ret1(value, e) {
    

    switch (e.target.id) {
      case "colInicio":
        colInicio = value;
        break;
      case "colFim":
       
        colFim = value;
        break;
      case "rowInicio":
        rowInicio = value;
        break;
      case "rowFim":
        e.target.max = maxRow;
        rowFim = value;
        break;
      default:
        break;
    }

    console.log(maxColumn, maxRow)
    grid1.style.gridColumn = colInicio + "/" + colFim;
    grid1.style.gridRow = rowInicio + "/" + rowFim;
  },
};

function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  const teste = e.target.max;

  console.log(name, value, teste)

  selecionarStyle[name](value, e);
}

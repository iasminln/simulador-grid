const controles = document.querySelector(".controles");
const resultado = document.querySelector(".resultado");

const colunaInicio = document.querySelectorAll("#colInicio");
const colunaFim = document.querySelectorAll("#colFim");
const linhaInicio = document.querySelectorAll("#rowInicio");
const linhaFim = document.querySelectorAll("#rowFim");

controles.addEventListener("change", handleChange);

let colInicio = 1;
let colFim = 1;
let rowInicio = 1;
let rowFim = 1;

const selecionarStyle = {
  gridTemplateColumns(value) {
    let estilo = "1fr ";

    for (let i = 1; i < value; i++) {
      estilo += "1fr ";
    }

    colunaFim.forEach((item) => {
      item.max = Number(value) + 1;
    });

    resultado.style.gridTemplateColumns = estilo;
  },

  gridTemplateRows(value) {
    let estilo = "1fr ";

    for (let i = 1; i < value; i++) {
      estilo += "1fr ";
    }

    linhaFim.forEach((item) => {
      item.max = Number(value) + 1;
    });
    resultado.style.gridTemplateRows = estilo;
  },

  posicao(value, e, pai) {
    switch (e.target.id) {
      case "colInicio":
        colInicio = value;
        break;
      case "colFim":
        document.querySelector(`#${pai.id} #colInicio`).max = value;
        colFim = value;
        if (colInicio > colFim) {
          document.querySelector(`#${pai.id} #colInicio`).value = value;
          colInicio = value;
        }
        break;
      case "rowInicio":
        rowInicio = value;
        break;
      case "rowFim":
        document.querySelector(`#${pai.id} #rowInicio`).max = value;
        rowFim = value;
        if (rowInicio > rowFim) {
          document.querySelector(`#${pai.id} #rowInicio`).value = value;
          rowInicio = value;
        }
        break;
      default:
        break;
    }

    const ret = document.querySelector(`.${pai.id}`);

    ret.style.gridColumn = colInicio + "/" + colFim;
    ret.style.gridRow = rowInicio + "/" + rowFim;
  },
};

function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  const pai = e.target.parentElement;

  selecionarStyle[name](value, e, pai);
}

const controles = document.querySelector(".controles");
const resultado = document.querySelector(".resultado");
const grid1 = document.querySelector(".ret-1")

controles.addEventListener("change", handleChange);

const selecionarStyle = {
  gridTemplateColumns(value) {
    let estilo = "auto ";

    for (let i = 1; i < value; i++) {
      estilo += "auto ";
    }

    resultado.style.gridTemplateColumns = estilo;
  },

  gridTemplateRows(value) {
    let estilo = "auto ";

    for (let i = 1; i < value; i++) {
      estilo += "auto ";
    }

    resultado.style.gridTemplateRows = estilo;
  },

  
};




function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;

  selecionarStyle[name](value);

}

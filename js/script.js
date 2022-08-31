const controles = document.querySelector(".controles");
const resultado = document.querySelector(".resultado");
const grid1 = document.querySelector(".ret1")

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

  ret1(value, e) {
    if(e.target.id === "colInicio" || e.target.id === "colFim"){
      grid1.style.gridColumn = value;
    } else {
      grid1.style.gridRow = value;
    }

    
  }


};




function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  const teste = e.target.id;

  // console.log(name, value, teste)

  selecionarStyle[name](value, e);

}

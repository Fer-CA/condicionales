let mostrarBorde = false
const imagen = document.querySelector ("#imagen")

imagen.addEventListener("click", () => {
    if (!mostrarBorde) {
        imagen.style.border = "solid red 2px"
        mostrarBorde = true
    } else {
        imagen.style.border = "none"
        mostrarBorde = false
    }
})
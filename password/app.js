const btnClave = document.querySelector("#btnClave")
const mensajeClave = document.querySelector("#mensajeClave")

btnClave.addEventListener("click", () => {
    const n1Clave = document.querySelector("#numero1").value
    const n2Clave = document.querySelector("#numero2").value
    const n3Clave = document.querySelector("#numero3").value

    const password = n1Clave + n2Clave + n3Clave
    if (password == "911") {
        mensajeClave.innerHTML = "Password uno correcto"
    } else if (password == "714") {mensajeClave.innerHTML = "Password dos correcto"
    } else mensajeClave.innerHTML = "Password incorrecto"

})
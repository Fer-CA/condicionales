const btnStickers = document.querySelector("#btnStickers")
let resultadoStickers = document.querySelector("#resultadoStickers")

btnStickers.addEventListener("click", () => {
    let n1 = Number(document.querySelector("#cantidadSticker1").value)
    let n2 = Number(document.querySelector("#cantidadSticker2").value)
    let n3 = Number(document.querySelector("#cantidadSticker3").value)

    let suma = n1 + n2 + n3 

    if (suma <= 10) {
        resultadoStickers.innerHTML = "Llevas " + suma + " stickers"
    } else {
        resultadoStickers.innerHTML = "Llevas demasiados stickers"
    }
})
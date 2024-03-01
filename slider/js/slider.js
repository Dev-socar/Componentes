/**
 * -----------------------------------------
    Autor:Omar Fernando Solís Carvajal 2024
 * -----------------------------------------
 */
document.addEventListener("DOMContentLoaded", () => {
  iniciarApp();
});

function iniciarApp() {
  galeria();
}

function galeria() {
  const contenedorImagen = document.querySelector(".slider__imagen-xl");
  if (contenedorImagen) {
    const imagenes = document.querySelectorAll(".slider__imagen img");
    cargarImagen(imagenes[0]);
    imagenes.forEach(function (imagen) {
      imagen.addEventListener("click", mostrarImagen);
    });
  }
} 
function cargarImagen(imagen) {
  const img = document.createElement("IMG");
  img.setAttribute("loading", "lazy");
  img.setAttribute("alt", "Imagen");
  img.setAttribute("src", "");
  document.querySelector(".slider__imagen-xl").appendChild(img);
  const { value: urlImg } = imagen.attributes.src;
  const layout = document.querySelector(".slider__imagen-xl img");
  layout.src = urlImg;
}
function mostrarImagen(e) {
  const { value: urlNueva } = e.target.attributes.src;
  const urlAnterior = document.querySelector(".slider__imagen-xl img")
    .attributes.src.value;
  const imagenActual = document.querySelector(".slider__imagen-xl img");
  if (urlAnterior !== urlNueva) {
    imagenActual.classList.add("oculto");
    setTimeout(function () {
      imagenActual.src = urlNueva;
      imagenActual.classList.remove("oculto");
    }, 500);
  }
  return;
}

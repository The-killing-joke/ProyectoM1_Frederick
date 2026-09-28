console.log("Javascript de Colorfly Studio Conectado");
const formulario = document.querySelector("#paleta-form");
const numeroColores = document.querySelector("#num-colores");
const paletaColores = document.querySelector("#paleta-colores");
const nombrePaleta = document.querySelector("#nombre-paleta");
const descripcionPaleta = document.querySelector("#descripcion-paleta");
const usosPaleta = document.querySelector("#usos-paleta");


formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const cantidadColores = Number(numeroColores.value);
    console.log("Cantidad de colores seleccionada:", cantidadColores);
    const indiceAleatorio = Math.floor(Math.random() * paletasDisponibles.length);
    console.log("Índice aleatorio:", indiceAleatorio);
    const paletaSeleccionada = paletasDisponibles[indiceAleatorio];
    console.log("Paleta seleccionada:", paletaSeleccionada);
    const coloresAMostrar = paletaSeleccionada.colores.slice(0, cantidadColores);
    console.log("Colores a mostrar:", coloresAMostrar);
    nombrePaleta.textContent = paletaSeleccionada.nombre;
    descripcionPaleta.textContent = paletaSeleccionada.descripcion;
    usosPaleta.textContent = paletaSeleccionada.usos;
    paletaColores.innerHTML = ""; // Limpiar la paleta antes de agregar nuevos colores
    coloresAMostrar.forEach(function (color) {
        const colorItem = document.createElement("li");
        const colorBox = document.createElement("span");
        const codigoHex = document.createElement("span");
    
        colorItem.classList.add("color-item");
        colorBox.classList.add("color-box");
        codigoHex.classList.add("codigo-hex");

        colorBox.style.backgroundColor = color;
        colorBox.setAttribute("aria-hidden", "true");
        codigoHex.textContent = color;

        colorItem.appendChild(colorBox);
        colorItem.appendChild(codigoHex);
        paletaColores.appendChild(colorItem);
    })

})

const paletasDisponibles = [
  {
    nombre: "Colores Boscosos",
    descripcion:
      "Una paleta profunda y serena inspirada en la densidad de un bosque, que equilibra tonos verdes intensos con matices de madera, hojas secas, musgo y la vegetación del suelo silvestre.",
    usos: 
      "Los usos más comunes son: Marcas de productos ecológicos, senderismo y vida al aire libre, cosmética natural, blogs de jardinería o diseño interior biofílico.",

    colores: [
      "#1B3323",
      "#2D4A3E",
      "#4A6B5D",
      "#6B8E23",
      "#8B7E66",
      "#A08A62",
      "#C2B280",
      "#3E2723",
      "#8F9779"
    ]
  },

  {
    nombre: "Colores Desérticos",
    descripcion:
      "Tonos cálidos, secos y luminosos que evocan vastas dunas de arena, rocas arcillosas, cactus resistentes y los cambios de luz bajo el sol del desierto.",
    usos: "Los usos más comunes son:Marcas de moda étnica o bohemia, cafeterías artesanales, portafolios de fotografía, agencias de viajes culturales o arquitectura contemporánea.",
    colores: [
      "#7A3B2E",
      "#A35C37",
      "#C86D51",
      "#D98A5E",
      "#E09F67",
      "#EDC9AF",
      "#F5EBE6",
      "#5B6E50",
      "#8C7355"
    ]
  }


  
];

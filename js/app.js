console.log("Javascript de Colorfly Studio Conectado");
const formulario = document.querySelector("#paleta-form");
const numeroColores = document.querySelector("#num-colores");
const paletaColores = document.querySelector("#paleta-colores");
const nombrePaleta = document.querySelector("#nombre-paleta");
const descripcionPaleta = document.querySelector("#descripcion-paleta");
const usosPaleta = document.querySelector("#usos-paleta");
const botonGenerarTematica = document.querySelector("#generar-paleta-tematica");
const generarPaleta = document.querySelector("#generar-paleta");

function hexGenerator() {
    const hexCharacters = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
    }
    return hexColor;
}

function hslGenerator() {
    const h = Math.floor(Math.random() * 361); // Hue: 0-360
    const s = Math.floor(Math.random() * 101); // Saturation: 0-100
    const l = Math.floor(Math.random() * 101); // Lightness: 0-100
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

function muestraPaleta(coloresAMostrar) {
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
    });
}

generarPaleta.addEventListener("click", function (event) {
    event.preventDefault();
    const cantidadColores = Number(numeroColores.value);
    console.log("Cantidad de colores seleccionada:", cantidadColores);
    const coloresGenerados = [];
    for (let i = 0; i < cantidadColores; i++) {
        const color = hexGenerator();
        coloresGenerados.push(color);
    }
    console.log("Colores generados:", coloresGenerados);
    nombrePaleta.textContent = "Paleta Aleatoria";
    descripcionPaleta.textContent = "Una paleta generada aleatoriamente con colores hexadecimales.";
    usosPaleta.textContent = "Los usos más comunes son: Diseño gráfico, desarrollo web, branding y proyectos creativos.";
    paletaColores.innerHTML = ""; // Limpiar la paleta antes de agregar nuevos colores

    muestraPaleta(coloresGenerados);

});

botonGenerarTematica.addEventListener("click", function (event) {
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
    paletaColores.innerHTML = ""; // Limpiar la paleta antes de agregar nuevos colores*/

    muestraPaleta(coloresAMostrar);

});

const paletasDisponibles = [
  {
    nombre: "Colores Boscosos",
    descripcion:
      "Una paleta profunda y serena inspirada en la densidad de un bosque, que equilibra tonos verdes intensos con matices de madera, hojas secas, musgo y la vegetación del suelo silvestre.",
    usos: 
      "Los usos más comunes son: Marcas de productos ecológicos, senderismo y vida al aire libre,cosmética natural, blogs de jardinería o diseño interior biofílico.",

    colores: [
      "#1B3323",
      "#2D4A3E",
      "#4A6B5D",
      "#6B8E23",
      "#8B7E66",
      "#A08A62",
      "#C2B280",
      "#3E2723",
      "#8F9779",
      "#EAE7DC"
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
      "#8C7355",
      "#F0D3A7"
    ]
  },
  {
    nombre: "Colores Volcánicos",
    descripcion:
      "Un contraste dramático y potente entre la oscuridad de la piedra basalto y obsidiana, y la fuerza incandescente del magma, el azufre y las cenizas.",
    usos:
      "Los usos más comunes son: Gimnasios, marcas de deporte de alto rendimiento, estudios de videojuegos, páginas de tecnología o diseño industrial audaz.",

    colores: [
      "#0F0F0F",
      "#1A1A1A",
      "#343434",
      "#5A5A5A",
      "#9E2A1B",
      "#D03B29",
      "#FF6F3C",
      "#F4A261",
      "#E0A96D",
      "#F1F1F1"
    ]
  },
  {
    nombre: "Colores Florales",
    descripcion:
      "Una combinación fresca, romántica y delicada que evoca un jardín silvestre en plena primavera, combinando pétalos suaves, tallos verdes y matices florales vivos.",
    usos:
      "Los usos más comunes son: Planificación de bodas, floristerías, blogs de repostería, marcas de cuidado de la piel, artículos de papelería y diseño infantil.",

    colores: [
      "#C38D9E",
      "#E8A598",
      "#F4C2C2",
      "#EEA47F",
      "#FCE38A",
      "#A8D1D1",
      "#73A9AD",
      "#DDA0DD",
      "#F7D6D0",
      "#FFF5E4"
    ]
  },
  {
   nombre: "Colores Selváticos",
   descripcion:
      "Una paleta vibrante, densa y llena de energía que combina la vegetación frondosa de varios estratos con los destellos exóticos de la fauna y flora tropical.",
    usos:
      "Los usos más comunes son: Fundaciones ambientales, marcas de bebidas y zumos naturales, moda veraniega, aplicaciones de viajes o diseño gráfico ilustrado.",

     colores: [
      "#0F2218",
      "#0B3C26",
      "#1B7B50",
      "#2D936C",
      "#85C88A",
      "#F2B824",
      "#E76F51",
      "#D94E34",
      "#2A9D8F",
      "#E9C46A"
  ]
  },
  {
    nombre: "Colores de Atardecer",
    descripcion:
      "Una transición cálida y envolvente de luz que captura los tonos dorados, anaranjados y violetas del cielo al caer el sol.",
    usos:
      "Los usos más comunes son: Fotografía, blogs de estilo de vida, marcas de bebidas relajantes, eventos nocturnos o aplicaciones de meditación.",
    colores: [
      "#2B1B17", "#4A2E35", "#7A3055", "#B83B5E", "#E25822",
      "#F08A5D", "#F9B208", "#F3C68F", "#D8A7CA", "#FCEADE"
    ]
  },
  {
    nombre: "Colores de Aurora Boreal",
    descripcion:
      "Tonos místicos y radiantes inspirados en las luces del norte, mezclando fríos profundos con destellos neón y luminosos.",
    usos:
      "Los usos más comunes son: Marcas de tecnología, diseño digital, videojuegos, aplicaciones nocturnas o portadas de música electrónica.",
    colores: [
      "#0B132B", "#1C2541", "#3A506B", "#00B4D8", "#57CC99",
      "#80ED99", "#7B2CBF", "#C77DFF", "#38B000", "#E0FAFF"
    ]
  },
  {
    nombre: "Colores de Tormenta",
    descripcion:
      "Una gama sobria, intensa y dramática centrada en grises plomizos, azules profundos y el destello de los rayos.",
    usos:
      "Los usos más comunes son: Marcas corporativas modernas, moda masculina, diseño automotriz, arquitectura industrial o productos de seguridad.",
    colores: [
      "#121B22", "#1F2D3D", "#34495E", "#4B6584", "#778CA3",
      "#A5B1C2", "#485460", "#F7D794", "#CBD5E1", "#ECEFF1"
    ]
  },
  {
    nombre: "Colores Cósmicos",
    descripcion:
      "Una combinación cósmica y fascinante de la inmensidad del espacio, nebulosas vibrantes y el resplandor de las estrellas.",
    usos:
      "Los usos más comunes son: Innovación tecnológica, ciencia ficción, podcasts, plataformas educativas o identidades visuales vanguardistas.",
    colores: [
      "#080710", "#120E2E", "#2A085C", "#5B146F", "#A2126C",
      "#E32B69", "#0077B6", "#48CAE4", "#C0C0E8", "#F8F9FA"
    ]
  },
  {
    nombre: "Colores de Bruma",
    descripcion:
      "Una paleta etérea, tenue y calmada que evoca paisajes matutinos cubiertos de bruma, tonos desaturados y elegancia minimalista.",
    usos:
      "Los usos más comunes son: Estudios de yoga, spas, marcas de ropa minimalista, diseño editorial sobrio o cosmética consciente.",
    colores: [
      "#3A4042", "#5A6366", "#7A8588", "#9BA5A8", "#BEC7C9",
      "#8B9A9A", "#A3B18A", "#D3D8D6", "#E5E9E8", "#F4F6F6"
    ]
  },
  {
    nombre: "Colores de Otoño",
    descripcion:
      "Una selección cálida y acogedora inspirada en la caída de las hojas, los bosques teñidos de rojo, la madera seca y las especias.",
    usos:
      "Los usos más comunes son: Marcas de café, ropa de temporada, decoración del hogar, recetas de cocina o eventos de estación.",
    colores: [
      "#4A1E17", "#7A2021", "#A8322D", "#C85A17", "#D9822B",
      "#E6A15C", "#8C6D46", "#556B2F", "#F0C987", "#F7EBE1"
    ]
  },
  {
    nombre: "Colores de Invierno",
    descripcion:
      "Tonos fríos, limpios y cristalinos que evocan paisajes helados, nieve recién caída y la quietud de los días de invierno.",
    usos:
      "Los usos más comunes son: Equipamiento para deportes de nieve, acondicionadores de aire, marroquinería de lujo, empaques festivos o productos de cuidado invernal.",
    colores: [
      "#1C2833", "#283747", "#2E86C1", "#5DADE2", "#A9CCE3",
      "#D4E6F1", "#798696", "#B0BEC5", "#E5E8E8", "#F8F9F9"
    ]
  },
  {
    nombre: "Colores de Primavera",
    descripcion:
      "Una gama llena de vida, frescura y renovación, caracterizada por brotes verdes, cielos despejados y flores que comienzan a abrirse.",
    usos:
      "Los usos más comunes son: Productos orgánicos, jardinería, marcas infantiles, campañas de renovación o aplicaciones de salud y bienestar.",
    colores: [
      "#457B9D", "#A8DADC", "#52B788", "#74C69D", "#B7E4C7",
      "#F9C74F", "#F8961E", "#F94144", "#F3C4FB", "#FBF8CC"
    ]
  },
  {
    nombre: "Colores de Verano",
    descripcion:
      "Tonos enérgicos, brillantes y soleados que transmiten alegría, días de playa, frutas frescas y la intensidad de las vacaciones.",
    usos:
      "Los usos más comunes son: Marcas de trajes de baño, heladerías, festivales de música, agencias de turismo o bebidas refrescantes.",
    colores: [
      "#0077B6", "#00B4D8", "#90E0EF", "#FFD166", "#FF9F1C",
      "#FF5964", "#FF6B6B", "#06D6A0", "#FFE66D", "#FFF9EC"
    ]
  },
  {
    nombre: "Colores Árticos",
    descripcion:
      "Una paleta ultra fría, limpia y pura que evoca imponentes icebergs, agua congelada y la tranquilidad de los polos.",
    usos:
      "Los usos más comunes son: Sistemas de purificación de agua, marcas de tecnología médica, productos de higiene, diseño nórdico o arquitectura limpia.",
    colores: [
     "#002B49", "#00497A", "#0072CE", "#418FDE", "#89CFF0",
     "#B3E5FC", "#E0F7FA", "#B2EBF2", "#ECEFF1", "#FFFFFF"
    ]
  },
  {
    nombre: "Colores Minerales",
    descripcion:
      "Tonos terrosos y cristalinos inspirados en gemas, cuarzos, rocas estratificadas y vetas metálicas de la corteza terrestre.",
    usos:
      "Los usos más comunes son: Joyería, geología, marcas de cosmética mineral, vinos de reserva o arquitectura de materiales nobles.",
    colores: [
      "#2C3E50", "#4A3B32", "#7D6608", "#117A65", "#1F618D",
      "#76448A", "#B9770E", "#95A5A6", "#D5DBDB", "#F2F4F4"
    ]
  },
  {
    nombre: "Colores de Arena",
    descripcion:
      "Una combinación neutra, suave y atemporal centrada en los distintos matices de la arena, conchas marinas y rocas sedimentarias.",
    usos:
      "Los usos más comunes son: Marcas de lino y textiles naturales, interiorismo japandi o mediterráneo, hoteles boutique o spas.",
    colores: [
      "#6E5D4F", "#8C7A6B", "#A89885", "#C4B5A5", "#DDCFC0",
      "#EBE3D5", "#C5A880", "#E3D5CA", "#F5EBE0", "#FAF6F0"
    ]
  },
  {
    nombre: "Colores Metálicos",
    descripcion:
      "Una estructura elegante y sofisticada basada en los reflejos del oro, la plata, el bronce, el cobre y el acero pulido.",
    usos:
      "Los usos más comunes son: Marcas de lujo, productos premium, empaques exclusivos, relojería, automoción o tecnología de alta gama.",
    colores: [
      "#2B2B2B", "#4A4A4A", "#8A8A8A", "#D4AF37", "#AA7C11",
      "#B87333", "#CD7F32", "#E5E4E2", "#D4C5B9", "#F5F5F5"
    ]
  },
  {
    nombre: "Colores de Mármol",
    descripcion:
      "Una paleta sofisticada, fría y pulida que evoca las vetas orgánicas y la textura lujosa de los bloques de mármol tallado.",
    usos:
      "Los usos más comunes son: Arquitectura de interiores, marcas de belleza de alto nivel, papelería fina, galerías de arte o alta cocina.",
    colores: [
      "#1B1B1B", "#2F3640", "#57606F", "#A4B0BE", "#CED6E0",
      "#8B7D6B", "#C0A080", "#E2D8CE", "#F1F2F6", "#FFFFFF"
    ]
  },
  {
    nombre: "Colores de Arcilla",
    descripcion:
      "Tonos orgánicos, artesanos y terracota que recuerdan al barro moldeado a mano, la alfarería tradicional y los pigmentos naturales.",
    usos:
      "Los usos más comunes son: Estudios de cerámica, marcas artesanales, diseño de interiores rústico-contemporáneo, gastronomía tradicional o editorial cultural.",
    colores: [
      "#4A2511", "#6E3019", "#8D4004", "#B3541E", "#C86D51",
      "#D98A6C", "#A06C50", "#E0A98B", "#E8C8B8", "#F7EBE6"
    ]
  }


  
];

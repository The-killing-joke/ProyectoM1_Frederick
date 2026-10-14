# Colorfly Studio – Generador de paletas de colores

Proyecto del Módulo 1 del curso Full Stack. **Colorfly Studio** es una aplicación para generar paletas de 6, 8 o 9 colores, explorar combinaciones temáticas y conservar las paletas creadas en un historial local.

- **Repositorio:** https://github.com/The-killing-joke/ProyectoM1_Frederick
- **Sitio publicado (GitHub Pages):** https://the-killing-joke.github.io/ProyectoM1_Frederick/

## 1. Estructura del repositorio

```text
ProyectoM1_Frederick/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── img/
│   └── Recursos gráficos de Colorfly Studio
└── prompts/
    └── Registro de prompts y uso de IA
```

## 2. Funcionalidades

- **Generador de paletas aleatorias:** permite elegir una paleta de **6, 8 o 9 colores** y crear códigos de color al azar.
- **Formato HEX y HSL:** un interruptor permite generar paletas aleatorias en cualquiera de los dos formatos. También cambia el formato de la paleta que está en pantalla sin tener que generar otra.
- **Paletas temáticas:** genera una selección aleatoria entre 20 paletas predefinidas, como Colores Boscosos, Desérticos, Volcánicos, Florales, Cósmicos, de Invierno y de Arcilla.
- **Información de cada paleta temática:** se muestra el nombre, una descripción y usos frecuentes de la combinación elegida.
- **Copiar colores:** al hacer clic sobre el código de una tarjeta, el valor se copia al portapapeles y aparece el mensaje `¡Copiado!` como confirmación.
- **Bloqueo de colores:** al hacer clic sobre un color se bloquea o desbloquea. Los colores bloqueados se mantienen al generar una paleta aleatoria o temática nueva y pasan a las primeras posiciones.
- **Validación de bloqueos:** si hay más colores bloqueados que la cantidad seleccionada, se muestra un mensaje de error y la paleta actual se conserva sin cambios.
- **Historial local:** cada paleta generada se guarda en el navegador con su nombre, descripción, usos, formato, colores y fecha.
  - Se puede cargar una paleta anterior.
  - Se puede eliminar una paleta individual.
  - Se puede limpiar todo el historial.
- **Diseño responsive:** en pantallas amplias el generador y el historial se muestran en dos columnas; en pantallas pequeñas se apilan. Las paletas de 6, 8 y 9 colores conservan distribuciones proporcionadas.
- **Accesibilidad:** se usan etiquetas semánticas, controles con foco visible, mensajes accesibles, etiquetas ARIA en acciones dinámicas y texto alternativo en el logo.

## 3. Cómo usar la aplicación

1. Seleccionar la cantidad de colores: **6, 8 o 9**.
2. Activar **Usar formato HSL** si se quiere trabajar con ese formato. Si permanece desactivado, se usa HEX.
3. Hacer clic en **Generar paleta** para crear una combinación aleatoria.
4. Hacer clic en **Generar paleta temática** para recibir una de las paletas preestablecidas. El tooltip del botón explica esta función.
5. Hacer clic sobre el código de color para copiarlo al portapapeles.
6. Hacer clic sobre el área de color para bloquearlo. El candado cerrado indica que el color se conservará en la siguiente generación.
7. Revisar el historial para cargar una paleta anterior, eliminar una entrada o limpiar el registro completo.

## 4. Decisiones técnicas

- El proyecto está construido con **HTML, CSS y JavaScript vanilla**, sin frameworks ni librerías externas.
- El archivo JavaScript se carga con `defer`, por lo que el DOM ya está disponible cuando se ejecuta el código.
- Las referencias a los elementos del DOM se obtienen una sola vez con `querySelector` al inicio del archivo.
- Las paletas temáticas se organizan en un array de objetos llamado `paletasDisponibles`. Cada objeto conserva `nombre`, `descripcion`, `usos` y `colores`, por lo que la información relacionada viaja junta.
- La generación aleatoria usa funciones separadas para HEX y HSL. El interruptor decide cuál generador se usa antes de construir la paleta.
- Las funciones `hexAHsl` y `hslAHex` permiten transformar los colores que ya están visibles al cambiar el formato, en vez de reemplazar la paleta actual.
- `coloresEnPantalla` guarda la paleta activa. Esto permite convertir su formato, conservar bloqueos y volver a renderizarla sin depender del contenido visual del HTML.
- Los índices bloqueados se guardan en un `Set` llamado `posicionesBloqueadas`. Un `Set` evita repetir una misma posición y facilita consultar, agregar o eliminar bloqueos con `has`, `add` y `delete`.
- Antes de generar una paleta nueva se extraen los colores bloqueados. Estos se copian primero y los colores restantes se completan hasta alcanzar la cantidad seleccionada.
- La validación se hace antes de modificar la interfaz. Si la cantidad de bloqueos supera la cantidad solicitada, la función muestra el error y termina con `return`.
- La función `renderizarPaleta` centraliza la actualización de la lista de colores. Cada tarjeta se crea con `createElement`, se organiza con `classList.add` y se agrega con `appendChild`.
- Cada color se representa con botones reales: uno para bloquear o desbloquear el área de color y otro para copiar el código. Esto permite usar teclado y comunicar acciones mediante `aria-label` y `aria-pressed`.
- La copia al portapapeles usa `navigator.clipboard.writeText(...)`. El mensaje temporal de confirmación se muestra solo después de que la copia se completa.
- Los mensajes de error usan `role="alert"`, por lo que los lectores de pantalla pueden anunciar el cambio cuando aparece.
- El historial se guarda en `localStorage` bajo la clave `historialPaletasColorfly`. Como `localStorage` guarda texto, se usa `JSON.stringify` al guardar y `JSON.parse` al recuperar la información.
- Cada entrada del historial recibe un identificador con `Date.now()` y una fecha legible con `new Date().toLocaleString("es-CO")`.
- Las paletas del historial se renderizan desde los datos guardados, no desde el HTML anterior. Por eso siguen disponibles después de recargar la página.
- La cantidad de colores se guarda como atributo `data-cantidad` en la lista principal. CSS usa ese dato para crear una cuadrícula de 3 columnas para 6 y 9 colores, y de 4 columnas para 8 colores; en móviles, la paleta de 8 pasa a 2 columnas.
- Las variables de color, radios, sombras y transiciones se concentran en `:root`. Esto evita repetir valores y hace más fácil mantener una identidad visual consistente.
- La interfaz usa Grid para distribuir el generador y el historial, y Flexbox para formularios, botones, enlaces y miniaturas. Las media queries ajustan el diseño para tabletas y teléfonos.
- El historial tiene desplazamiento interno cuando acumula muchas paletas, evitando que crezca indefinidamente y desordene la interfaz.

## 5. Uso de IA

Durante el desarrollo usé IA como guía de aprendizaje para comprender HTML semántico, CSS responsive, accesibilidad, manipulación del DOM, JavaScript y Git.

La documentación cronológica de los prompts, respuestas y evidencias visuales está disponible en [PROMPTS.md](./prompts/PROMPTS.md). También puedes consultar la versión en formato fijo: [PROMPTS.pdf](./prompts/PROMPTS.pdf).

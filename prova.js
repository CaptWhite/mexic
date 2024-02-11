const fs = require('fs');
const path = require('path');

// Función para escanear recursivamente los archivos HTML en un directorio
function escanearDirectorioRecursivamente(directorio) {
    // Leer el contenido del directorio
    fs.readdir(directorio, (error, archivos) => {
        if (error) {
            console.error('Error al leer el directorio:', error);
            return;
        }

        // Iterar sobre los archivos en el directorio
        archivos.forEach(nombreArchivo => {
            // Obtener la ruta completa del archivo
            const rutaArchivo = path.join(directorio, nombreArchivo);

            // Obtener información sobre el archivo
            fs.stat(rutaArchivo, (error, stats) => {
                if (error) {
                    console.error('Error al obtener información del archivo:', error);
                    return;
                }

                // Si es un directorio, llamar a la función de manera recursiva
                if (stats.isDirectory()) {
                    escanearDirectorioRecursivamente(rutaArchivo);
                } else {
                    // Si es un archivo HTML, imprimir su nombre
                    if (path.extname(nombreArchivo) === '.html') {
                        invertirNavegacion('.\\'+rutaArchivo);
                        replaceDomain('.\\'+rutaArchivo, palabraBuscar1, palabraReemplazar1);
                        replaceDomain('.\\'+rutaArchivo, palabraBuscar2, palabraReemplazar2);
                    }
                }
            });
        });
    });
}

// Función para invertir la navegación de cada fichero
function invertirNavegacion(filePath) {
    if (filePath.includes('blog')) return
    const regex = /(.*<div class="nav-links".*<div class="nav-previous"><a title=")(.*)(".*href=")(.*)(".*rel.*<p>)(.*)(<\/p>)(.*<div class="nav-next"><a title=")(.*)(".*href=")(.*)(".*rel.*<p>)(.*)(<\/p>.*<\/a>.*<\/div>.*)/gs;
    const regexIniFin = /(.*<nav class="navigation post-navigation" role="navigation" aria-label="Navegación de entradas">)(.*)(<\/nav>.*)/gs;

    const firstDay = `<span class="screen-reader-text">Navegación de entradas</span>
    <div class="nav-links"><div class="nav-next"><a title="26 de marzo - La Paz" href="../25-de-marzo/index.html" rel="next"><span class="ast-post-nav">Siguiente <span class="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z'></path></svg></span></span> <p> 26 de marzo &#8211; La Paz  </p></a></div></div>`

    const lastDay = `<span class="screen-reader-text">Navegación de entradas</span>
    <div class="nav-links"><div class="nav-next"><a title="11 de abril - México. Teotihuacan y Basílica de Guadalupe" href="../11-de-abril-mexico-teotihuacan-y-basilica-de-guadalupe/index.html" rel="next"><span class="ast-post-nav"> Anterior<span class="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z'></path></svg></span></span> <p> 11 de abril &#8211; México. Teotihuacan y Basílica de Guadalupe </p></a></div></div>`

    // Ruta del archivo a leer y modificar
    //const filePath = 'fichero.html';

    // Leer el contenido del archivo
    const data = fs.readFileSync(filePath, 'utf8')

        let newData = ""

        if (!data.includes("Siguiente ") && data.includes(" Anterior")) {
            const rs = regexIniFin.exec(data);
            newData = rs[1] + firstDay + rs[3]
            console.log('1.- ' + filePath)
        } else if (!data.includes(" Anterior") && data.includes("Siguiente ")) {
            const rs = regexIniFin.exec(data);
            newData = rs[1] + lastDay + rs[3]
            console.log('3.- ' + filePath)
        } else if ( (data.includes("Siguiente ") && data.includes(" Anterior"))) {
        // Modificar el contenido como desees
        // Expresión regular con un grupo de captura para la fecha
            const rs = regex.exec(data);
            newData = rs[1] + rs[9] + rs[3] + rs[11] + rs[5] + rs[13] + rs[7] + rs[8] + rs[2] + rs[10] + rs[4] + rs[12] + rs[6] + rs[14]
            console.log('2.- ' + filePath)
        } else {
            newData = data
        }
    
        // Grabar el contenido modificado de vuelta al archivo
        fs.writeFileSync(filePath, newData, {encoding: "utf8"})
        console.log('El archivo ha sido modificado exitosamente.'  + filePath);
        console.log('El archivo ha sido modificado exitosamente.' + filePath);
         
    ;
}

// Función para reempazar el dominio en cada fichero
function replaceDomain(filePath, palabraBuscar, palabraReemplazar) {
    // Ruta del archivo a leer y modificar
    //const filePath = 'fichero.html';

    // Definir las palabras a reemplazar
 


    // Leer el contenido del archivo
    const data = fs.readFileSync(filePath, 'utf8')

        
        // Utilizar expresiones regulares (regex) para reemplazar todas las ocurrencias de la palabra
        const cadenaOriginal = data;
        const regex = new RegExp(palabraBuscar, 'gs');
        const cadenaReemplazada = cadenaOriginal.replace(regex, palabraReemplazar);

        // Grabar el contenido modificado de vuelta al archivo
        fs.writeFileSync(filePath, cadenaReemplazada, {encoding: "utf8"})
        console.log('El archivo ha sido modificado exitosamente.'  + filePath);
}

// Función para copiar un archivo
function copiarArchivo(origen, destino) {
    fs.copyFileSync(origen, destino);
    console.log(`Archivo copiado: ${origen} -> ${destino}`);
}

// Función para copiar un directorio y su contenido de forma recursiva
function copiarDirectorioRecursivo(origenDir, destinoDir) {
    // Crear el directorio de destino si no existe
    if (!fs.existsSync(destinoDir)) {
        fs.mkdirSync(destinoDir);
    }

    // Leer el contenido del directorio
    const elementos = fs.readdirSync(origenDir);

    // Iterar sobre cada elemento
    elementos.forEach(elemento => {
        const origen = path.join(origenDir, elemento);
        const destino = path.join(destinoDir, elemento);

        // Verificar si es un archivo o un directorio
        if (fs.statSync(origen).isFile()) {
            copiarArchivo(origen, destino);
        } else if (fs.statSync(origen).isDirectory()) {
            copiarDirectorioRecursivo(origen, destino);
        }
    });
}


let palabraBuscar1 = "http://localhost/wordpress2/wp-content/uploads";
let palabraReemplazar1 = "https://captwhite.github.io/mexic/wp-content/uploads";

//palabraBuscar1 = "https://captwhite.github.io/mexic/wp-content/uploads/xxxxx";
//palabraReemplazar1 = "https://captwhite.github.io/mexic/wp-content/uploads";

let palabraBuscar2 = "../../../../../../upload.wikimedia";
let palabraReemplazar2 = "https://upload.wikimedia";

//palabraBuscar2 = "https://captwhite.github.io/mexic/wp-content/uploads";
//palabraReemplazar2 = "https://captwhite.github.io/mexic/wp-content/uploads/xxxxx";

// escanear recursivamente un directorio
const directorioRaiz = './';
escanearDirectorioRecursivamente(directorioRaiz);



// Directorios de origen y destino
const directorioOrigen = 'C:\\xampp\\htdocs\\wordpress2\\wp-content\\uploads';
const directorioDestino = 'C:\\xampp\\htdocs\\wordpress2\\mexic\\localhost\\wordpress2\\wp-content\\uploads';

// Copiar el directorio de origen al directorio de destino de forma recursiva
copiarDirectorioRecursivo(directorioOrigen, directorioDestino);
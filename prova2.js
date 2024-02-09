const fs = require('fs');

const regex = /(.*<div class="nav-links".*<div class="nav-previous"><a title=")(.*)(".*href=")(.*)(".*rel.*<p>)(.*)(<\/p>)(.*<div class="nav-next"><a title=")(.*)(".*href=")(.*)(".*rel.*<p>)(.*)(<\/p>.*<\/a>.*<\/div>.*)/gs;
const regexIniFin = /(.*<nav class="navigation post-navigation" role="navigation" aria-label="Navegación de entradas">)(.*)(<\/nav>.*)/gs;

const firstDay = `<span class="screen-reader-text">Navegación de entradas</span>
<div class="nav-links"><div class="nav-next"><a title="26 de marzo - La Paz" href="../25-de-marzo/index.html" rel="next"><span class="ast-post-nav">Siguiente <span class="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z'></path></svg></span></span> <p> 26 de marzo &#8211; La Paz  </p></a></div></div>`

const lastDay = `<span class="screen-reader-text">Navegación de entradas</span>
<div class="nav-links"><div class="nav-next"><a title="11 de abril - México. Teotihuacan y Basílica de Guadalupe" href="../11-de-abril-mexico-teotihuacan-y-basilica-de-guadalupe/index.html" rel="next"><span class="ast-post-nav"> Anterior<span class="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z'></path></svg></span></span> <p> 11 de abril &#8211; México. Teotihuacan y Basílica de Guadalupe </p></a></div></div>`

// Ruta del archivo a leer y modificar
const filePath = 'fichero.html';

// Leer el contenido del archivo
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    let newData = ""

    if (!data.includes("Siguiente ")) {
        const rs = regexIniFin.exec(data);
        newData = rs[1] + firstDay + rs[3]
    } else if (!data.includes(" Anterior")) {
        const rs = regexIniFin.exec(data);
        newData = rs[1] + lastDay + rs[3]
    } else {
    // Modificar el contenido como desees
    // Expresión regular con un grupo de captura para la fecha
        const rs = regex.exec(data);
        newData = rs[1] + rs[9] + rs[3] + rs[11] + rs[5] + rs[13] + rs[6] + rs[7] + rs[8] + rs[2] + rs[10] + rs[4] + rs[12] + rs[6] + rs[14]
    }
 
    // Grabar el contenido modificado de vuelta al archivo
    fs.writeFile(filePath, newData, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
            return;
        }
        console.log('El archivo ha sido modificado exitosamente.');
    }); 
});
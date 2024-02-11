import * as fs from 'fs';
import { firstDay, lastDay } from "./postConstants.js"


export function invertirNavegacion(filePath) {
    if (filePath.includes('blog')) return

    // Leer el contenido del archivo
    const data = fs.readFileSync(filePath, 'utf8')
        console.log(filePath)
        let newData = ""

        if (!data.includes("Siguiente ") && data.includes(" Anterior")) {
            const regexIniFin = /(.*<nav class="navigation post-navigation" role="navigation" aria-label="Navegación de entradas">)(.*)(<\/nav>.*)/gs;
            const rs = regexIniFin.exec(data);
            newData = rs[1] + firstDay + rs[3]
        } else if (!data.includes(" Anterior") && data.includes("Siguiente ")) {
            const regexIniFin = /(.*<nav class="navigation post-navigation" role="navigation" aria-label="Navegación de entradas">)(.*)(<\/nav>.*)/gs;
            const rs = regexIniFin.exec(data);
            newData = rs[1] + lastDay + rs[3]
        } else if ( (data.includes("Siguiente ") && data.includes(" Anterior"))) {
            const regex = /(.*<div class="nav-links".*<div class="nav-previous"><a title=")(.*)(".*href=")(.*)(".*rel.*<p>)(.*)(<\/p>)(.*<div class="nav-next"><a title=")(.*)(".*href=")(.*)(".*rel.*<p>)(.*)(<\/p>.*<\/a>.*<\/div>.*)/gs;
            const rs = regex.exec(data);
            newData = rs[1] + rs[9] + rs[3] + rs[11] + rs[5] + rs[13] + rs[7] + rs[8] + rs[2] + rs[10] + rs[4] + rs[12] + rs[6] + rs[14]
        } else {
            newData = data
        }
    
        // Grabar el contenido modificado de vuelta al archivo
        fs.writeFileSync(filePath, newData, {encoding: "utf8"})         
    ;
}
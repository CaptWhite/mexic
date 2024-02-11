import * as fs from 'fs';
import * as path from 'path';
import { invertirNavegacion } from "./postInvNav.js"
import { replaceDomain } from "./postReplaceDomain.js"


// Función para escanear recursivamente los archivos HTML en un directorio

export function escanearDirectorioRecursivamente(directorio, isInvertirNavegacion, isReplaceDomain) {
    const archivos = fs.readdirSync(directorio)

    archivos.forEach(nombreArchivo => {
        const rutaArchivo = path.join(directorio, nombreArchivo);

        const stats = fs.statSync(rutaArchivo)
        if (stats.isDirectory()) {
            escanearDirectorioRecursivamente(rutaArchivo, isInvertirNavegacion, isReplaceDomain);
        } else {
            // Si es un archivo HTML, imprimir su nombre
            if (path.extname(nombreArchivo) === '.html') {
                if (isInvertirNavegacion)   invertirNavegacion('.\\'+rutaArchivo);
                if (isReplaceDomain) replaceDomain('.\\'+rutaArchivo);
            }
        }
    })
               
}

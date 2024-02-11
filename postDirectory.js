import * as fs from 'fs';
import * as path from 'path';
import { invertirNavegacion } from "./postInvNav.js"
import { replaceDomain } from "./postReplaceDomain.js"


// Función para escanear recursivamente los archivos HTML en un directorio

export function escanearDirectorioRecursivamente(directorio, isInvertirNavegacion, isReplaceDomain) {
    fs.readdir(directorio, (error, archivos) => {
        if (error) {
            console.error('Error al leer el directorio:', error);
            return;
        }

        archivos.forEach(nombreArchivo => {
            const rutaArchivo = path.join(directorio, nombreArchivo);

            fs.stat(rutaArchivo, (error, stats) => {
                if (error) {
                    console.error('Error al obtener información del archivo:', error);
                    return;
                }

                if (stats.isDirectory()) {
                    escanearDirectorioRecursivamente(rutaArchivo, isInvertirNavegacion, isReplaceDomain);
                } else {
                    // Si es un archivo HTML, imprimir su nombre
                    if (path.extname(nombreArchivo) === '.html') {
                        if (isInvertirNavegacion)   invertirNavegacion('.\\'+rutaArchivo);
                        if (isReplaceDomain) replaceDomain('.\\'+rutaArchivo);
                    }
                }
            });
        });
    });
}

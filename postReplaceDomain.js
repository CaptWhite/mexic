import * as fs from 'fs';
import { palabraBuscar, palabraReemplazar } from "./postConstants.js"

// Función para reempazar el dominio en cada fichero
export function replaceDomain(filePath) {
    // Leer el contenido del archivo
    const data = fs.readFileSync(filePath, 'utf8')
        // Utilizar expresiones regulares (regex) para reemplazar todas las ocurrencias de la palabra
        const cadenaOriginal = data;
        const regex = new RegExp(palabraBuscar, 'gs');
        const cadenaReemplazada = cadenaOriginal.replace(regex, palabraReemplazar);
        if (cadenaOriginal != cadenaReemplazada)   console.log(filePath)
        // Grabar el contenido modificado de vuelta al archivo
        fs.writeFileSync(filePath, cadenaReemplazada, {encoding: "utf8"})
        //console.log('El archivo ha sido modificado exitosamente.'  + filePath);
}

import * as fs from 'fs';
import * as path from 'path';

// Función para copiar un directorio y su contenido de forma recursiva

// Función para copiar un archivo
function copiarArchivo(origen, destino) {
    fs.copyFileSync(origen, destino);
}

export function copiarDirectorioRecursivo(origenDir, destinoDir) {
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

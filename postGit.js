import { execSync } from 'child_process';


export function ejecutarGit(message) {
    try {
    // Ejecuta el comando del sistema operativo de forma sincrónica
    const resultado = execSync('git add .'); // Cambia 'ls -l' por el comando que desees ejecutar
    console.log(resultado.toString());
    resultado = execSync(`git commit -m "${message}"`); // Cambia 'ls -l' por el comando que desees ejecutar
                        
    console.log(resultado.toString());
    resultado = execSync(`git push`); // Cambia 'ls -l' por el comando que desees ejecutar
    console.log(resultado.toString());


    } catch (error) {
    // Manejo de errores en caso de que la ejecución falle
    console.error('Error al ejecutar el comando:', error);
    }
}
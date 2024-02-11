import * as fs from 'fs';
import { fileDivisa, regexDivisa, content1Divisa, content2Divisa } from "./postConstants.js"

export function insertarDivisa() {

    // Leer el contenido del archivo
    const data = fs.readFileSync(fileDivisa, 'utf8')
    let newData = ""
    const rs = regexDivisa.exec(data);
    newData = rs[1] + content1Divisa + rs[2] + content2Divisa + rs[3]
    

    // Grabar el contenido modificado de vuelta al archivo
    fs.writeFileSync(fileDivisa, newData, {encoding: "utf8"})         
}
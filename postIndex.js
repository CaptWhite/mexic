import {escanearDirectorioRecursivamente} from './postDirectory.js'
import {copiarDirectorioRecursivo} from './postCopy.js'
import {insertarDivisa} from './postDivisa.js'
import { directorioRaiz, directorioOrigen, directorioDestino } from "./postConstants.js"

const actions = {isInvertirNavegacion: false, isReplaceDomain: true, isCopiarDirectorio: false, isCambioDivisa: false}

// escanear recursivamente un directorio
if (actions.isInvertirNavegacion || actions.isReplaceDomain)
    escanearDirectorioRecursivamente(directorioRaiz, actions.isInvertirNavegacion, actions.isReplaceDomain);

if (actions.isCopiarDirectorio)    
    copiarDirectorioRecursivo(directorioOrigen, directorioDestino)

if (actions.isCambioDivisa)
    insertarDivisa()

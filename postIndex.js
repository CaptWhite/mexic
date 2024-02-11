import {escanearDirectorioRecursivamente} from './postDirectory.js'
import {copiarDirectorioRecursivo} from './postCopy.js'
import {insertarDivisa} from './postDivisa.js'
import { ejecutarGit} from './postGit.js'
import { directorioRaiz, directorioOrigen, directorioDestino } from "./postConstants.js"

const actions = {isInvertirNavegacion:  true, 
                 isReplaceDomain:       true, 
                 isCopiarDirectorio:    true, 
                 isCambioDivisa:        true, 
                 isGit:                 true}

// escanear recursivamente un directorio
if (actions.isInvertirNavegacion || actions.isReplaceDomain)
    escanearDirectorioRecursivamente(directorioRaiz, actions.isInvertirNavegacion, actions.isReplaceDomain);

if (actions.isCopiarDirectorio)    
    copiarDirectorioRecursivo(directorioOrigen, directorioDestino)

if (actions.isCambioDivisa)
    insertarDivisa()

if (actions.isGit)
    ejecutarGit("Primera version enviada al grupo")

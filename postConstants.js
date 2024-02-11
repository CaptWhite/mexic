// Llamar a la función para escanear recursivamente un directorio
export const directorioRaiz = './';

// Invertir Navegación
export const firstDay = `<span class="screen-reader-text">Navegación de entradas</span>
<div class="nav-links"><div class="nav-next"><a title="26 de marzo - La Paz" href="../25-de-marzo/index.html" rel="next"><span class="ast-post-nav">Siguiente <span class="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z'></path></svg></span></span> <p> 26 de marzo &#8211; La Paz  </p></a></div></div>`

export const lastDay = `<span class="screen-reader-text">Navegación de entradas</span>
<div class="nav-links"><div class="nav-next"><a title="11 de abril - México. Teotihuacan y Basílica de Guadalupe" href="../11-de-abril-mexico-teotihuacan-y-basilica-de-guadalupe/index.html" rel="next"><span class="ast-post-nav"> Anterior<span class="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z'></path></svg></span></span> <p> 11 de abril &#8211; México. Teotihuacan y Basílica de Guadalupe </p></a></div></div>`


// Remplazar Dominio
export const palabraBuscar = "http://localhost/wordpress2/wp-content/uploads";
export const palabraReemplazar = "https://captwhite.github.io/mexic/wp-content/uploads";


// Copiar directorios
// Directorios de origen y destino
export const directorioOrigen = 'C:\\xampp\\htdocs\\wordpress2\\wp-content\\uploads';
export const directorioDestino = 'C:\\xampp\\htdocs\\wordpress2\\mexic\\localhost\\wordpress2\\wp-content\\uploads';

// Añadir cambio de Divisa
export const fileDivisa = 'C:\\xampp\\htdocs\\wordpress2\\mexic\\localhost\\wordpress2\\index.html';
export const regexDivisa = /(.*<h5>CONVERSOR PESOS A EUROS<\/h5><div class="textwidget custom-html-widget">)(.*<h5>CONVERSOR EUROS A PESOS<\/h5><div class="textwidget custom-html-widget">)(.*)/gs;
export const content1Divisa = '<iframe title="Convertidor EUROS a PESOS" src="https://currencyrate.today/load-converter?lg=es&amp;tz=timezone&amp;fm=MXN&amp;to=EUR&amp;st=primary&amp;bg=&amp;lr=0&amp;rd=0&amp;wp=ccc" height="289" width="" frameborder="0" scrolling="no" class="ccc-iframe" name="ccc-exchange-rates-widget"></iframe>'
export const content2Divisa = '<iframe title="Convertidor EUROS a PESOS" src="https://currencyrate.today/load-converter?lg=es&amp;tz=timezone&amp;fm=EUR&amp;to=MXN&amp;st=primary&amp;bg=&amp;lr=0&amp;rd=0&amp;wp=ccc" height="289" width="" frameborder="0" scrolling="no" class="ccc-iframe" name="ccc-exchange-rates-widget"></iframe>'
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, urlImagen) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.urlImagen = urlImagen;
    }
    return Usuario;
}());
var caro = new Usuario("carolina", "calderon", "https://ugc.kn3.net/i/origin/https://www.planwallpaper.com/static/images/wallpapers-4.jpg");
console.log(caro);
function cambiarImagen() {
    var etiquetaImagen = document.getElementById('imagen');
    etiquetaImagen.src = caro.urlImagen;
}
function cambiarTabla() {
    var etiquetaTable = document.getElementById('tablita');
    etiquetaTable.style = "border-azul";
}
function cambiarBordeTable() {
    var etiquetaTablita = document.getElementById('tablita');
    etiquetaTablita.className = etiquetaTablita.class + 'border-azul';
}
function crearContenido() {
    var etiquetaContenedora = document.getElementById('contenido');
    var parrafo = document.createElement("p");
    parrafo.innerText = 'hola mundo';
    var imagen = document.createElement("img");
    imagen.src = caro.urlImagen;
    etiquetaContenedora.appendChild(parrafo);
    etiquetaContenedora.appendChild(imagen);
}

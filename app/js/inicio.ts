class Usuario {
    constructor(private nombre:string, private apellido:string, public urlImagen: string){

    }


}
const caro= new Usuario("carolina", "calderon", "https://ugc.kn3.net/i/origin/https://www.planwallpaper.com/static/images/wallpapers-4.jpg");
console.log(caro);
function cambiarImagen() {
    const etiquetaImagen: any = document.getElementById('imagen');
    etiquetaImagen.src= caro.urlImagen;
}


function cambiarTabla() {
    const etiquetaTable:any =document.getElementById('tablita');
    etiquetaTable.style="border-azul";
}
function cambiarBordeTable() {
    const etiquetaTablita:any=document.getElementById('tablita');
    etiquetaTablita.className=  etiquetaTablita.class+'border-azul';
}
function crearContenido() {
    const etiquetaContenedora:any=document.getElementById('contenido');
    const parrafo= document.createElement("p");
    parrafo.innerText='hola mundo';
    const imagen= document.createElement("img");
    imagen.src=caro.urlImagen;
    etiquetaContenedora.appendChild(parrafo);
    etiquetaContenedora.appendChild(imagen);

}

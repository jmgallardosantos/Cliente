var coches = [{
    marca: "Mazda",
    modelo: "x30",
    color: "rojo",
    añoFabricacion: 2001,

},
{
    marca: "Peugeot",
    modelo: 307,
    color: "verde",
    añoFabricacion: 1995,
},

];

// Ahora dibujamos la tabla
const $cuerpoTabla = document.querySelector("#cuerpoTabla");
// Recorrer todos los productos
coches.forEach(coche => {
// Crear un <tr>
const $tr = document.createElement("tr");
// Creamos el <td> de marca y lo adjuntamos a tr
let $tdMarca = document.createElement("td");
$tdMarca.textContent = coche.marca; // el textContent del td es el nombre
$tr.appendChild($tdMarca);
// El td de modelo
let $tdModelo = document.createElement("td");
$tdModelo.textContent = coche.modelo;
$tr.appendChild($tdModelo);
// El td del color
let $tdColor = document.createElement("td");
$tdColor.textContent = coche.color;
$tr.appendChild($tdColor);
 // El td de año de fabricacion
 let $tdAñoFabricacion = document.createElement("td");
$tdAñoFabricacion.textContent = coche.añoFabricacion;
$tr.appendChild($tdAñoFabricacion);
// Finalmente agregamos el <tr> al cuerpo de la tabla
$cuerpoTabla.appendChild($tr);
// Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
});
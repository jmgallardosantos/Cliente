var coche = new Object();
function Coche (marca, modelo, color, año_fabricacion){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año_fabricacion = año_fabricacion;
    this.mostrarDatos = function(){
    }

    
}


var coche1 = new Coche("Mazda", "x30", "rojo", 2001);
var coche2 = new Coche("Peugeot", 307, "verde", 1995);
coche1.acelerar = function(velocidad){
     this.velocidad=velocidad;
     return "El coche " + coche1.marca + " ha acelerado a "  + velocidad};
coche1.arrancar = function (arrancar){
        this.arrancar=arrancar;
        return "El coche " + coche1.marca + " modelo " + coche1.modelo + " de color " + coche1.color + " esta " + arrancar;
}
coche1.frenar = function (frenar){
        this.frenar=frenar;
        return "El coche " + coche1.marca + " modelo " + coche1.modelo + " de color " + coche1.color + " ha " + frenar;
}


document.write (coche1.marca);
document.write("</br>");
document.write (coche1["color"]);
document.write("</br>");
document.write (coche1.acelerar(100));
document.write("</br>");
document.write (coche1.arrancar("arrancado"));
document.write("</br>");
document.write (coche1.frenar("parado"));
document.write("</br>");
for (iterador in coche1){
  document.write(iterador);
  document.write("</br>");
//devuelve propiedades enumerables con nombres enteros; 
}
document.write("</br>");
document.write(Coche.hasOwnProperty('coche1')); // no comprueba la propiedad especificada en la cadena de prototipos del objeto.
document.write("</br>");
document.write(Object.keys(coche1));// Un array de strings que representan todas las propiedades del objeto

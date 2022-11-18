
var array1= [];
for(var i = 1; i<=21; i++){
if (!(i%2==0)){
 array1.push(i);
}

}
alert(array1);

var total=0;
array1.forEach(function(parametro){total += parametro;});
alert("El sumatorio de los numeros es :" +total);
var reverse = array1.reverse();
alert (reverse);


var dame_numero =parseInt(prompt("Escribe un numero para buscar: "));
var encontrado =array1.indexOf(dame_numero);
var eliminar = array1.splice(encontrado,1);


if (eliminar == 1){
    alert("El numero no existe en el array");
    
}else{
    alert(" El numero si existe en el array, tiene la posicion: " + encontrado);
    reverse = array1.reverse();
    alert(array1);

    alert(reverse = array1.reverse());
    
}




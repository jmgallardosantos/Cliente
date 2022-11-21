var numeros = [];
for (var i = 0; i <5; i++){
obtener =prompt ("Introduce un  numeros");
numeros.push(obtener);
}alert (numeros);
var comprobar = (number) => number>0 && !(isNaN(number));
if(numeros.every(comprobar)){
    alert ("Son todos numeros y positivos")
}else{
    alert("No todos son numeros o no son positivos.")
}

var triple = numeros.map(function(multiplicador) {
return multiplicador * 3;
});
alert("Todos los numeros multiplicados por 3 son: " + triple);


var multiplicar = numeros.reduce((valor,i)=>
    valor*i);
alert ("El resultado de multiplicar todo el array es: " + multiplicar);
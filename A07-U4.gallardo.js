var aleatorios =Array.from({length: 10}, ()=> Math.floor(Math.random()*(0,11)));
alert ("Los 10 numeros aleatorios son: " + aleatorios);
var menores = aleatorios.filter(aleatorio => { return aleatorio < 8 });
alert("Los numero aleatorios menores de 8 son: " + menores); 
var impares = aleatorios.filter(impar =>{return(impar%2 ==1) });
for (var i =0; i <=aleatorios.length; i++){
    if ((aleatorios[i]%2)==1 ){
        aleatorios[i]= "impar";
     }

}
alert ("Los numeros impares cambiados por impar son: " + aleatorios);

var alumnado = [['Antonio Vegas ', 1, 5, 5], ['Maria Jimenez', 5, 6, 2], ['Antonio machin', 2, 1, 1], ['Fernando Calvo', 2, 1, 7], ['Arturo Fernandez', 2, 1, 4]];
alumnado.forEach(function(alumno, i) {
    if (alumno[1] >10 || alumno[1] < 0){
        alert (alumno[1] + " Es una nota invalida para el alumno " + alumnado[i][0]);}
    else if (alumno[2] >10 || alumno[2] < 0){
        alert (alumno[1] + " Es una nota invalida para el alumno " + alumnado[i][0]); } 
    else if (alumno[3] >10 || alumno[3] < 0){
        alert (alumno[1] + " Es una nota invalida para el alumno " + alumnado[i][0]);
    }else{
    
    document.write("Nombre : " + alumno[0] + "---------- ");
    document.write("Cliente : " + alumno[1] + "---------- " );
    document.write("Diseño : " + alumno[2] + "---------- " );
    document.write("Servidor : " + alumno[3] +  "<br>");
    }
});
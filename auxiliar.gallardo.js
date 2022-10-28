
       function dame_codigo(){
        var expresion = document.getElementById("horarios").value;
        expresion = parseInt(expresion);
        var fecha = new Date ();
        var horas = fecha.getHours();
        
        if (horas >=1 || horas<12 ){horas +=12;}
        horas += expresion;
        if(horas > 12){horas-=12;}
        if(horas<10){horas="0"+horas;}
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        if(minutos<10){minutos="0"+minutos;}
        if(segundos<10){segundos="0"+segundos;}
            alert(fecha_actual = "son las " + horas + ":" + minutos + ":" + segundos);
    }
    



    function formulario(){
        var cantidad = document.getElementById("cantidad").value;
        var iva = document.getElementById("tipo_iva").value;
        if (iva == 5){
            document.write("La cantidad es " + cantidad + " y el precio con iva es " + cantidad *1.05);
        }else if (iva ==10){
            document.write("La cantidad es " + cantidad + " y el precio con iva es " + cantidad *1.10);
        }else{
            document.write("La cantidad es " + cantidad + " y el precio con iva es " + cantidad *1.21);
        }

    }

 






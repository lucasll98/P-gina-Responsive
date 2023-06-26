function enviarDatos(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var nacimiento = document.getElementById("nacimiento").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;


    
    if(nombre == "" || apellido == "" || nacimiento == "" || email == "" || telefono == ""){

    }else{
        console.log("Nombre: " , nombre , ". Apellido: " , apellido , ". Nacimiento: " , nacimiento , ". Email: " , email , ". Telefono: " , telefono );
        alert("Enviaste el formulario con Éxito!");
    }

    
    
    return false;
}
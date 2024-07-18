
function validarTexto(texto){
    const regex = /^[a-zñ\s]+$/; // solo letras minusculas y espacios
    return regex.test(texto);

}

function mostrarError(mensaje) {
    swal("Error",mensaje,"error");
}

function encriptarText() {
    
    let texto = document.getElementById("textoEntrada").value;
    if(!validarTexto(texto)){
        mostrarError("Solo letras minusculas y sin caracteres especiales.");
        return;
    }
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("salida").innerText = textoEncriptado;
    document.getElementById('boton3').style.display='block';

    var flotantexElemento = document.getElementById('img');
        if (flotantexElemento && flotantexElemento.style.display !== 'none') {
            flotantexElemento.style.display = 'none';
        }
    var flotantexElemento1 = document.getElementById('advertencia');
        if (flotantexElemento1 && flotantexElemento1.style.display !== 'none') {
            flotantexElemento1.style.display = 'none';
        }
    var flotantexElemento2 = document.getElementById('advertencia2');
        if (flotantexElemento2 && flotantexElemento2.style.display !== 'none') {
            flotantexElemento2.style.display = 'none';
        }

    document.getElementById("mensaje").innerText= "Texto encriptado:"   ;
     
}

function desencriptarText(){
    let texto = document.getElementById("textoEntrada").value;
    if(!validarTexto(texto)){
        mostrarError("Solo letras minusculas y sin caracteres especiales.");
        return;
    }
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g,"i" )
        .replace(/ai/g, "a" )
        .replace(/ober/g, "o" )
        .replace(/ufat/g, "u");
    document.getElementById("salida").innerText = textoDesencriptado;
    
    document.getElementById('boton3').style.display='block';
    
    var flotantexElemento = document.getElementById('img');
        if (flotantexElemento && flotantexElemento.style.display !== 'none') {
            flotantexElemento.style.display = 'none';
        }
    var flotantexElemento1 = document.getElementById('advertencia');
        if (flotantexElemento1 && flotantexElemento1.style.display !== 'none') {
            flotantexElemento1.style.display = 'none';
        }
    var flotantexElemento2 = document.getElementById('advertencia2');
        if (flotantexElemento2 && flotantexElemento2.style.display !== 'none') {
            flotantexElemento2.style.display = 'none';
        }
   
    document.getElementById("mensaje").innerText= "Texto desencriptado:";
}


//funcion limpiar datos de la salida 

function limpiar() {
    // Limpia el valor del campo de entrada de texto
    document.getElementById('boton3').style.display='none';
    document.getElementById("textoEntrada").value = '';       
    // Muestra el elemento flotante
    document.getElementById('salida').innerText= '';
    document.getElementById('mensaje').innerText= '';
    var flotantexElemento = document.getElementById('img');
        if (flotantexElemento && flotantexElemento.style.display !== 'block') {
            flotantexElemento.style.display = 'block';
        }
    var flotantexElemento1 = document.getElementById('advertencia');
        if (flotantexElemento1 && flotantexElemento1.style.display !== 'block') {
            flotantexElemento1.style.display = 'block';
        }
    var flotantexElemento2 = document.getElementById('advertencia2');
        if (flotantexElemento2 && flotantexElemento2.style.display !== 'block') {
            flotantexElemento2.style.display = 'block';
        }
   
}


//funcion copiar del texto salida

function copiarText(){
let texto = document.getElementById("salida").innerText;
navigator.clipboard.writeText(texto).then(()=> {   
    swal({
        title: "Copiado",
        text:"éxito",
        icon: "success",
        button: false,
        timer: 1500, 
        
    });

});

}



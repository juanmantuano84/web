function numeros(valor){
    document.getElementById('Resultado').value += valor;
}

function operacion(){
    var opera = document.getElementById('Resultado').value;
    if (opera == 0){
        document.getElementById('Resultado').value = "Sin operación";
    } else
        document.getElementById('Resultado').value = eval(opera);   
}

function resetear(){
    document.getElementById('Resultado').value = " ";
}
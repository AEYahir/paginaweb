function calcularTemperatura(){
    temperatura = parseFloat(document.querySelector('#Temperatura').value);
    unidadOrigen = parseFloat(document.querySelector('#UnidadOrigen').value);
    unidadConvertir = parseFloat(document.querySelector('#UnidadConvertir').value);

    switch(unidadOrigen){
        case 1:
            if(unidadConvertir == 2){
                resultado = temperatura * 1.8 + 32;
            }
            else{
                if(unidadConvertir == 3){
                    resultado = temperatura + 273.15;
                }
            }
        break;
        case 2:
            if(unidadConvertir == 1){
                resultado = (temperatura - 32) * 5/9;
            }
            else{
                if(unidadConvertir == 3){
                    resultado = (temperatura - 32) * 5/9 + 273.15;
                }
            }

        break;
        case 3:
            if(unidadConvertir == 1){
                resultado = temperatura - 273.15;
            }
            else{
                if(unidadConvertir == 2){
                    resultado = (temperatura - 273.15) * 9/5 + 32;
                }
            }

        break;
    }

    document.querySelector('#Resultado').value = resultado.toFixed(2);
}
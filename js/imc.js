function  calcularIMC() {
    peso =  parseFloat( document.querySelector('#Peso').value );
    altura = parseFloat( document.querySelector('#Altura').value );
    imc = peso / Math.pow(altura,2);
    if(imc < 18.5){
        clasificacion = "Peso bajo";
        document.querySelector('#EstadoActual').style.backgroundColor = "rgb(29,145,208,255)";
        document.querySelector('#IMC').style.color = "rgb(29,145,208,255)";
    }
    else{

        if(imc < 25){
            clasificacion = "Peso normal";
            document.querySelector('#EstadoActual').style.backgroundColor = "rgb(148,193,32,255)";
            document.querySelector('#IMC').style.color = "rgb(148,193,32,255)";
        }
        else{
            if(imc < 30){
                clasificacion = "Sobre peso";
                document.querySelector('#EstadoActual').style.backgroundColor = "rgb(247,195,50,255)";
                document.querySelector('#IMC').style.color = "rgb(247,195,50,255)";
            }
            else{
                if(imc < 35){
                    clasificacion = "Obesidad grado 1";
                    document.querySelector('#EstadoActual').style.backgroundColor = "rgb(232,155,17,255)";
                    document.querySelector('#IMC').style.color = "rgb(232,155,17,255)";
                }
                else{
                    if(imc < 40){
                        clasificacion = "Obesidad grado 2";
                        document.querySelector('#EstadoActual').style.backgroundColor = "rgb(230,93,12,255)";
                        document.querySelector('#IMC').style.color = "rgb(230,93,12,255)";
                    }
                    else{
                        clasificacion = "Obesidad grado 3";
                        document.querySelector('#EstadoActual').style.backgroundColor = "rgb(228,6,19,255)";
                        document.querySelector('#IMC').style.color = "rgb(228,6,19,255)";
                    }
                }
            }
       }
    }
    
    document.querySelector('#IMC').value = imc.toFixed(4);
    document.querySelector('#EstadoActual').value = clasificacion;
}
function calcular(ide1, ide2, respID, operador){
    var num1 = parseFloat(document.getElementById(id1).value)
    var num2 =  parseFloat(document.getElementById(id1).value)


switch (operador){
    case '+':
        resultado = num1 + num2 

        break;

        case '-':
            resultado = num3 - num4 
    
            break;
            case '*':
                resultado = num5 * num6 
        
                break;
                case '/':
                    if(num2 !==0){
                        resultado = num1 / num2
                    }else{
                        resultado = "Erro: Divisão por 0"
                    }
                   
                    break;
                    default: "Operador invalido"

                    break;
                }
  document.getElementById(respID).textContent = formatNumber(resultado)
}
function formatNumber(x){
    if(Number.isInteger(resultado)){
        return resultado
    }else if(resultado !== "Erro: divisão por 0"){
        return resultado.toFixed(2)
    }else{
        return resultado 
    }

}

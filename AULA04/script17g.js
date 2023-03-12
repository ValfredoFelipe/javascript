
function verificar(){
    var numero = window.document.getElementById('numero')
    var numeroo = Number(numero.value)
    var res = window.document.getElementById('tabuada')
    var numfix = 1
    var mult = numeroo*numfix

    if (numero.value.length == 0){
        window.alert('Por favor, digite um numero!')     
    
    } else{
        res.innerHTML = ''
        while(numfix<=10){
            var item = document.createElement('option')
            item.text = `${numeroo} x ${numfix} = ${mult}`
            res.appendChild(item)
            numfix = numfix +1
        
        }
    
    }
}

function verificar(){
var numero = window.document.getElementById('numero')
var numeroo = Number(numero.value)
var res = window.document.getElementById('tabuada')
var numfix = 1
var mult = numeroo*numfix






    if(numeroo<=10){
       while(numfix<=10){
        mult = numeroo * numfix
        res.innerHTML += (`${numeroo} x ${numfix} = ${mult}\n`)
        numfix = numfix + 1
       }
    }
    
   
    
}
function limpaform(){
    document.getElementById('numero').value = ""
    document.getElementById('tabuada').value=""
    
}



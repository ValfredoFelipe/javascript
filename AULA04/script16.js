function verificar(){
    var inicio = document.getElementById('inicio')
    var fim =document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var fimm = Number(fim.value)
    var inicioo = Number(inicio.value)
        var passoo = Number(passo.value)
    
   

    if (fim.value == 0 || inicio.value ==0){
        window.alert('Erro, verifique o número inserido e tente novamente!')
    }else{
        res.innerHTML = (`Contando: `)
         //for(var c = inicioo; c <= fimm; c = c + passoo{
        //res.innerHTML += `${c} `
        //}
        if(passoo <= 0){
            window.alert('ERRO, passo será considerado 1')
            passoo = 1
        }
        if(inicioo<fimm){
            while( inicioo<=fimm){
            res.innerHTML += (`${inicioo}`)
            inicioo = inicioo + passoo
            }
        }else{
            while( inicioo>=fimm){
                res.innerHTML += (`${inicioo}`)
                inicioo = inicioo - passoo
                }

        }
       

     
    } 
}
 
    




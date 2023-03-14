
    var numero = window.document.getElementById('numero')
    var numeroo = Number(numero.value)
    var lista = window.document.getElementById('flista')
    var res = window.document.getElementById('res')
    var valores = []

    
    function isnumero(n){
        if(Number(n) >= 1 && Number(n)<= 100){
            return true
        } else {
            return false
        }
    }

    function inlista(n, l) {
        if(l.indexOf(Number(n)) != -1){
            return true
        } else {
            return false
        }   
    }
    
    function adicionar(){
        if(isnumero(numero.value) && !inlista(numero.value, valores)){
            valores.push(Number(numero.value))
            var item =document.createElement('option')
            item.text = `Valor ${numero.value} adicionado.` 
            lista.appendChild(item)
            res.innerHTML = (``)
            
        } else {
            window.alert('Valor inválido ou já encontrado na lista')
        }
        numero.value = ''
        numero.focus()

    }

    function finalizar(){
        if(valores.length == 0){
            alert('Adicione valores antes de finalizar!')
        } else{
            var tot = valores.length
            var maior = valores[0]
            var menor = valores[0]
            var soma = 0
            var media = 0
            for(var pos in valores){
                soma= soma+ valores[pos]
                if(valores[pos]>maior)
                maior = valores[pos]
                if(valores[pos] < menor)
                menor = valores[pos]
            }
            media= soma/tot

            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor informado ${maior}</p>`
            res.innerHTML += `<p>O menor valor informado ${menor}</p>`
            res.innerHTML += `<p>A soma dos valores foi de ${soma}</p>`
            res.innerHTML += `<p>A media dos valores foi de ${media}</p>`

        }


    }
    



   





   







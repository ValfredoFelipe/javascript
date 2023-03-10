function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.querySelector('div#res')

    if(fano.value == 0 || fano.value >ano ){
        window.alert('ERRO, verique o número digitado e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if(idade>=1 && idade<=10){
                img.setAttribute('src','../AULA04/exe14/homemcrianca.png')
            }else if(idade>10 && idade<=20){
                img.setAttribute('src','../AULA04/exe14/homem20.png')
            }else if(idade>20 &&idade<60){
                img.setAttribute('src','../AULA04/exe14/homem40.png')
            }else if (idade>60){
                img.setAttribute('src','../AULA04/exe14/homem60.png') 

            }
        
        } else if (fsex[1].checked){
            genero = 'mulher'
            if(idade>=1 && idade<=10){
                img.setAttribute('src','../AULA04/exe14/mulhercrianca.png')
            }else if(idade>10 && idade<=20){
                img.setAttribute('src','../AULA04/exe14/mulher20.png')
            }else if(idade>20 &&idade<60){
                img.setAttribute('src','../AULA04/exe14/mulher40.png')
            }else if (idade>60){
                img.setAttribute('src','../AULA04/exe14/mulher60.png') 
            }
           
        }
        res.innerHTML = (` Detectamos ${genero} com ${idade} anos.`)
        res.appendChild(img)
        
    }
    





}

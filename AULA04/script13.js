function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 21
    msg.innerHTML=`Agora são ${hora} horas.`

    if(hora>=6 && hora<12){
        img.src= '../AULA04/exe13/pexels-artur-roman-1167355.png'
        document.body.style.background = 'rgb(203, 207, 209)'
    } else if(hora>=12 && hora<=18){
        img.src='../AULA04/exe13/pexels-nihat-69224.png'
        document.body.style.background = 'rgb(229, 175, 109)'
    } else if (hora>18){
        img.src='../AULA04/exe13/pexels-min-an-813269.png'
        document.body.style.background = 'rgb(39, 40, 57)'
    }
}

function carregar() {
    var horadia=document.getElementById('horadia')
    var msg = document.getElementById('msg')
    var img= document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    horadia.innerHTML=`Agora são ${hora} horas e ${minutos} Minutos. `
    if(hora >=0 && hora < 12){
        //BOM DIA
        img.src='manha.jpg'
        document.body.style.background= '#ffc841'
        msg.innerHTML='Bom Dia'
    }else if ( hora >=12 && hora < 18){
        //BOA TARDE
        img.src='tarde.jpg'
        document.body.style.background= '#b8661d'
        msg.innerHTML='Boa Tarde'
    }else{
        //BOA NOITE
        img.src='noite.jpg'
        document.body.style.background= '#0d0220'
        msg.innerHTML='Boa Noite'
    }

    
}

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img') 
    var h1 = document.getElementsByClassName('font')[0]
    var footer = document.getElementsByClassName('font')[1]
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`

    if (hora >= 5 && hora < 12) {
        img.src = 'images/morning.png'
        document.body.style.background = '#8C5B3F'
        h1.style.color = '#D9B79A'
        footer.style.color = '#D9B79A'

    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/afternoon.png'
        document.body.style.background = '#BF5E3B'
        h1.style.color = '#D5D9C7'
        footer.style.color = '#D5D9C7'

    } else {
        img.src = 'images/night.png'
        document.body.style.background = '#0B2626'
        h1.style.color = '#F2DCC2'
        footer.style.color = '#F2DCC2'
    }

}
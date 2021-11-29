function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'images/childMale.png')
            } else if (idade < 21) {
                //teen
                img.setAttribute('src', 'images/teenMale.png')
            } else if (idade < 51) {
                //adulto
                img.setAttribute('src', 'images/adultMale.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/oldMale.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'images/childFemale.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'images/teenFemale.png')
            } else if (idade < 51) {
                img.setAttribute('src', 'images/adultFemale.png')
            } else {
                img.setAttribute('src', 'images/oldFemale.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
 }
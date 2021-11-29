var clock = new Date()
var hora = clock.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 5) {
    console.log('Boa Magrugada')
} else if (hora < 12) {
    console.log('Bom Dia')
} else if (hora <= 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
} 
function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    document.body.style.background = '#A7785A'
    // BOM DIA
    img.src = 'fotomanha.png.png'
} else if (hora >= 12 && hora <18) {
    document.body.style.background = '#D27839'
    // BOA TARDE
    img.src = 'fototarde.png.png'
} else {
    document.body.style.background = '#445D59'
    // BOA NOITE
    img.src = 'fotonoite.png.png'
}
}
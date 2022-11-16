function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res') // aqui pode-se usar: var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
    if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 6) {
                }
                else if (idade >= 6 && idade < 12) {  // criança
                    img.setAttribute('src', 'menino6.png')
                } else if (idade >= 12 && idade < 20) {  // adolescente
                    img.setAttribute('src', 'menino12.png')
                } else if (idade >= 20 && idade < 40) {  // adulto
                    img.setAttribute('src', 'homem20.png')
                } else if (idade >= 40 && idade < 60) {   // homem ou mulher 
                    img.setAttribute('src', 'homem40.png')
                } else if (idade >= 60 && idade < 80) {   // homem ou mulher 
                    img.setAttribute('src', 'idoso60.png')
                } else { // idoso ou idosa
                    img.setAttribute('src', 'idoso80.png') 
                }
            } else if (fsex[1].checked) {        
                gênero = 'Mulher'
                if (idade >=0 && idade < 6) {
                }
                else if (idade >= 6 && idade < 12) {  // criança
                    img.setAttribute('src', 'menina6.png')
                } else if (idade >= 12 && idade < 20) {  // adolescente
                    img.setAttribute('src', 'menina12.png')
                } else if (idade >= 20 && idade < 40) {  // adulto
                    img.setAttribute('src', 'mulher20.png')
                } else if (idade >= 40 && idade < 60) {   // homem ou mulher 
                    img.setAttribute('src', 'mulher40.png')
                } else if (idade >= 60 && idade < 80) {   // homem ou mulher 
                    img.setAttribute('src', 'idosa60.png')
                } else { // idoso ou idosa
                    img.setAttribute('src', 'idosa80.png') 
                }
    }
    
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}


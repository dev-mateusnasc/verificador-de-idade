function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
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
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-h.jpg')
            }else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-h.jpg')
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-h.jpg')
            }else {
                // Idoso
                img.setAttribute('src', 'idoso-h.jpg')
            }
    }       else if (fsex[1].checked){
                gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos: ${gênero}. com: ${idade}`
    res.appendChild(img)
}


}
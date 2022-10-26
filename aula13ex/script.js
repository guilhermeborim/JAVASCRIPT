function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] reveja os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
        var genero= ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade<18){
                //crianca
                img.setAttribute('src', 'crianca.png')
            } else if (idade>18 && idade <50) {
                //adulto
                img.setAttribute('src', 'adulta(o).png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso(a).png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade<18){
                //crianca
                img.setAttribute('src', 'crianca.png')
            } else if (idade>18 && idade <50) {
                //adulto
                img.setAttribute('src', 'adulta(o).png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso(a).png')
            }
        }
        res.style.textalign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}
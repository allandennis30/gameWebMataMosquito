var altura = 0 
var largura = 0
var vidas = 1
var tempo = 5
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

    if(nivel === 'normal'){
        var criaMosquitoTempo = 1500
    }else if (nivel === 'dificil'){
        var criaMosquitoTempo = 1000
    } else if (nivel === 'chucknorris'){
        var criaMosquitoTempo = 750
    }

function ajustaTamanhoPalcoJogo(){ 
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)    
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
    document.getElementById('cronometro').innerHTML = tempo// innerHTML é o valor entre as tags 
    }
},1000)

function posicaoRandomica(){

    //remover o mosquito anterior caso exista
    if (document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()
    if (vidas>3){
        window.location.href = 'fim_de_jogo.html'
        
    } else{
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
    vidas++
    }
    }

var positionX = Math.floor(Math.random() * largura) - 90
var positionY = Math.floor(Math.random() * altura) - 90

positionX = positionX <0 ? 0 : positionX
positionY = positionY <0 ? 0 : positionY

console.log(positionX, positionY)

//Criar o elemento HTML

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = positionX + 'px'
mosquito.style.top = positionY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
    this.remove()
}

document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 7)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        case 3:
            return 'mosquito4'
        case 4:
            return 'mosquito5'
        case 5:
            return 'mosquito6'
        case 6:
            return 'mosquito7'
       
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
       
       
    }

}
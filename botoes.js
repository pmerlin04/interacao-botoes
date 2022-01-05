var b1 = document.getElementById('botao1')
var b2 = document.getElementById('botao2')
var b3 = document.getElementById('botao3')
var b4 = document.getElementById('botao4')
var resp = document.getElementById('res')
var cont1 = 0
var cont2 = 0
var cont3 = 0
var cont4 = 0
function acao1(){
    cont1++
    resp.innerText +=`O botao 1 está com ${cont1} cliques \n`
}

function acao2(){
    cont2++
    resp.innerText +=`O botao 2 está com ${cont2} cliques \n`
}

function acao3(){
    cont3++
    resp.innerText +=`O botao 3 está com ${cont3} cliques \n`
}

function acao4(){
    cont4++
    resp.innerText +=`O botao 4 está com ${cont4} cliques \n`
}
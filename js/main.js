const controles = document.querySelectorAll(".controle-ajuste")
const contadores = document.querySelectorAll(".controle-contador")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const btnPrev = document.querySelector(".btn-prev")
const btnNext = document.querySelector(".btn-next")
const robos = ["robos/robotron-azul.png", "robos/robotron-amarelo.png", "robos/robotron-branco.png", "robos/robotron-preto.png", "robos/robotron-rosa.png", "robos/robotron-vermelho.png"]
let robo = 0
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

btnPrev.addEventListener('click', () => {
    if (robo === 0) {
        robo = 4
    }else {
        robo--
    }
    console.log(document.querySelector(".robo").src)
    document.querySelector(".robo").src = robos[robo]
})

btnNext.addEventListener('click', () => {
        if (robo === 4) {
            robo = 0
        } else {
            robo++
        }
        console.log(document.querySelector(".robo").src)
        document.querySelector(".robo").src = robos[robo]
    })


controles.forEach((controle) => {
    controle.addEventListener('click', (evento) => {
        
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle)
    })
    
    
});


function manipulaDados (operação, contador) {
    console.log(operação)
    const peca = contador.querySelector('[data-contador]')
    if (operação === '-') {
        peca.value = parseInt(peca.value) -1
    } else {
        peca.value = parseInt(peca.value) +1
       
    }
}

function atualizaEstatistica(peca, operação){
    
    estatisticas.forEach((elemento) => {
        if (operação === '+') {
            
            elemento.innerHTML = parseInt(elemento.innerHTML) + pecas[peca][elemento.dataset.estatistica]
        } else {
            
            
            elemento.innerHTML = parseInt(elemento.innerHTML) - pecas[peca][elemento.dataset.estatistica]
        }    
        
        
    })
}


/*
controles[0].addEventListener("click", () => {
            
    contadores[0].value = Number(contadores[0].value) -1
}) 
*/


/*
for (let i = 0; i < controles.length; i++) {
    
    
    if( i % 2 === 0){
        console.log(contadores[parseInt(x)].value)

        controles[i].addEventListener("click", () => {
            
            contadores[parseInt(x)].value = Number(contadores[parseInt(x)].value) - 1
        }) 

    }else {

        console.log(contadores[parseInt(x)].value + i)
        controles[i].addEventListener("click", () => {
            contadores[parseInt(x)].value = Number(contadores[parseInt(x)].value) + 1
        }) 
        x++
        

    }
}
*/
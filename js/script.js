let ataquejugador
let ataquedelenemigo
let healtj = 3
let healte = 3

function vidamenemigo() {
    let vidaenemigo = document.getElementById('vidamascotae')
    vidaenemigo.addEventListener('click')
}

function iniciarjuego() {
    let ocultarreinicio = document.getElementById('reiniciar')
    ocultarreinicio.style.display = 'none'
    let botonseleccionardejugador = document.getElementById('boton-seleccion-mascota')
    botonseleccionardejugador.addEventListener('click', jugadorseleccionamascota)
    let esconderseleccion = document.getElementById('Seleccionar-ataque')
    esconderseleccion.style.display = 'none'
    let botonfuego = document.getElementById('ataquef')
    botonfuego.addEventListener('click', ataquefuego)
    let botontierra = document.getElementById('ataquet')
    botontierra.addEventListener('click', ataquetierra)
    let botonagua = document.getElementById('ataquea')
    botonagua.addEventListener('click', ataqueagua)
    let botonreinicio = document.getElementById('botonreiniciar')
    botonreinicio.addEventListener('click', reiniciarjuego)
}

function ataquefuego() {
    ataquejugador = "FUEGO"
    ataqueenemigo() 
}

function ataquetierra() {
    ataquejugador = "TIERRA"
    ataqueenemigo()
}

function ataqueagua() {
    ataquejugador = "AGUA"
    ataqueenemigo()
}

function ataqueenemigo() {
    enemyattack = enemigoselecciona(1, 3)
    if (enemyattack == 1) {
        ataquedelenemigo = 'FUEGO'
    } else if (enemyattack == 2) {
        ataquedelenemigo = 'TIERRA'

    } else {
        ataquedelenemigo = 'AGUA'   
    }
    combate()
}

function combate() {
    let vidasjugador = document.getElementById('vidamascotaj')
    let vidasenemigo = document.getElementById('vidamascotae')
    if (ataquedelenemigo == ataquejugador) {
        crearmensaje("Empate!!")
    } else if (ataquejugador == 'FUEGO' && ataquedelenemigo == 'TIERRA') {
        crearmensaje("Ganaste, yei!!")
        healte--
        vidasenemigo.innerHTML = healte
    } else if (ataquejugador == 'AGUA' && ataquedelenemigo == 'FUEGO') {
        crearmensaje("Ganaste, yei!!")
        healte--
        vidasenemigo.innerHTML = healte
    } else if (ataquejugador == 'TIERRA' && ataquedelenemigo == 'AGUA') {
        crearmensaje("Ganaste, yei!!")
        healte--
        vidasenemigo.innerHTML = healte
    } else {
        crearmensaje("Perdiste, oh no")
        healtj--
        vidasjugador.innerHTML = healtj
    }
    revisarvidas()
}

function revisarvidas(){
    if(healte == 0){
        crearmensajefinal("Ganaste la batalla");
        return; 
    } else if(healtj == 0){
        crearmensajefinal("Lo siento, perdiste");
        return;
    }
}


function crearmensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    let seccionmensajes = document.getElementById('resultado')
    let s2 = document.getElementById('ataque_del_jugador')
    let s1 = document.getElementById('ataque_del_enemigo')
    let nuevoataquedelenemigo = document.createElement('p')
    let nuevoataquedeljugador = document.createElement('p')
    nuevoataquedeljugador.innerHTML = 'Tu ataque fue: ' + ataquejugador
    nuevoataquedelenemigo.innerHTML = 'El ataque del enemigo fue: ' + ataquedelenemigo
    seccionmensajes.innerHTML = resultado
    s2.appendChild(nuevoataquedeljugador)
    s1.appendChild(nuevoataquedelenemigo)
    sectionMensajes.style.display = 'block'
}

function crearmensajefinal(resultadofinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let seccionmensajes = document.getElementById('resultado')
    seccionmensajes.innerHTML = resultadofinal
    sectionMensajes.style.display = 'block'
    let botonfuego = document.getElementById('ataquef')
    botonfuego.disabled = true
    let botontierra = document.getElementById('ataquet')
    botontierra.disabled = true
    let botonagua = document.getElementById('ataquea')
    botonagua.disabled = true
    let botonreinicio = document.getElementById('botonreiniciar')
    botonreinicio.enabled = true
    let ocultarreinicio = document.getElementById('reiniciar')
    ocultarreinicio.style.display = 'block'
}

function jugadorseleccionamascota() {
    let tucanobanano = document.getElementById('input1')
    let tralalerotralala = document.getElementById('input2')
    let orcaleroorcala = document.getElementById('input3')
    let spanmascotajugador = document.getElementById('mjugador')
    if (tucanobanano.checked) {
        alert("Haz seleccionado a TucanoBanano")
        spanmascotajugador.innerHTML = 'Tucanobanano'
    } else if (tralalerotralala.checked) {
        alert("Haz seleccionado a TralaleroTralala")
        spanmascotajugador.innerHTML = 'tralalerotralala'
    } else if (orcaleroorcala.checked) {
        alert("Haz seleccionado a OrcaleroOrcala")
        spanmascotajugador.innerHTML = 'OrcaleroOrcala'
    } else {
        alert("Por favor, selecciona una casilla")
        return
    }
    document.getElementById('Seleccionar-mascota').style.display = 'none'
    document.getElementById('Seleccionar-ataque').style.display = 'flex'
      document.getElementById('mensajes').style.display = 'block'
    randompet()
}

function randompet() {
    let ataquerandom = enemigoselecciona(1, 3)
    let mascotaenemigo = document.getElementById('menemigo')
    if (ataquerandom == 1) {
        mascotaenemigo.innerHTML = 'TucanoBanano'
    } else if (ataquerandom == 2) {
        mascotaenemigo.innerHTML = 'TralaleroTralala'
    } else if (ataquerandom == 3) {
        mascotaenemigo.innerHTML = 'OrcaleroOrcala'
    }
}

function reiniciarjuego() {
    location.reload()
}
function enemigoselecciona(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarjuego)

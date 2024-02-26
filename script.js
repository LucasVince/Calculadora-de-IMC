let peso = document.getElementById("peso")
let altura = document.getElementById("altura")
let result = document.getElementById("result")

function calc() {
    if (peso.value.length == 0 || altura.value.length == 0) {
        window.alert("PREENCHE A POHA DOS CAMPOS SEU ANIMAL D TETA")
    } else {
        res = Number(peso.value)/(Number(altura.value) ** 2)
        if (res < 18.5) {
            result.innerHTML = String(res + "<br>Mlk, come alguma coisa, c ta pareceno um crakudo d tao magro")
        }

        else if (res > 18.5 || res < 24.9) {
            result.innerHTML = String(res + "<br>Normal, ngm obeso ou passando fome aki, que pena....")
        }

        else if (res > 25 || res < 29.9) {
            result.innerHTML = String(res + "<br>Gordo")
        }

        else if (res > 30 || res < 34.9) {
            result.innerHTML = String(res + "<br>Slk, mlk ta se inspirando na Thais Carla")
        }

        else if (res > 35 || res < 39.9) {
            result.innerHTML = String(res + "<br>Era bom fechar um pouco a boca neh???")
        }
        
        else if (res > 40) {
            result.innerHTML = String(res + "<br>Man....so para d comer pqp")
        }
    }
}
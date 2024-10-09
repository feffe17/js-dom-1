const lampada = document.getElementById('imgLampada');
const pulsante = document.getElementById('btnOnOff');

// console.log(lampada , pulsante);

const imgAccesa = './img/yellow_lamp_fix.png';
const imgSpenta = './img/white_lamp_fix.png';

pulsante.addEventListener("click", () => {
    if (pulsante.textContent === "Accendi") {
        pulsante.textContent = "Spegni";
        lampada.src = imgAccesa;
    }
    else {
            pulsante.textContent = "Accendi";
            lampada.src = imgSpenta;
    }
})

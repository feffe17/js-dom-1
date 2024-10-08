const lampada = document.getElementById('imgLampada');
const pulsante = document.getElementById('btnOnOff');

// console.log(lampada , pulsante);

const imgAccesa = './img/yellow_lamp.png';  // Immagine con lampada accesa
const imgSpenta = './img/white_lamp.png';   // Immagine con lampada spenta

pulsante.addEventListener("click", () => {
    if (pulsante.textContent === "Accendi") {
        pulsante.textContent = "Spegni";
    }
    else {
            pulsante.textContent = "Accendi";
    }
})

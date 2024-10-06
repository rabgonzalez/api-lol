const DOM = {
    boton : document.getElementById('boton'),
    campeones : document.getElementById('campeones'),
}

boton.addEventListener('click', objectToArray);

async function getCampeones() {
    const url = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.data;
    } catch(error) {
        console.log(error.message);
    }
}

function objectToArray() {
    DOM.boton.style.display = 'none';
    getCampeones().then((datos) => {
        mostrarInformacion(datos);
    });
}

function mostrarInformacion(datos){
    let num = 0;
    const result = Object.values(datos);
    console.log(result);
    result.forEach((campeon) => {
        DOM.campeones.innerHTML += `
        <div class="card">
            <div class="imagen">
                <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeon.id}_${num}.jpg">
            </div>
            <div class="nombre">${campeon.name}</div>
            <div class="tipo">${campeon.partype}</div>
        </div>`;
    });
    return imagen;
}
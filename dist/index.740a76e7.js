const e={boton:document.getElementById("boton"),campeones:document.getElementById("campeones")};async function n(){try{let e=await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json");return(await e.json()).data}catch(e){console.log(e.message)}}boton.addEventListener("click",function(){e.boton.style.display="none",n().then(n=>{(function(n){let o=Object.values(n);console.log(o),o.forEach(n=>{e.campeones.innerHTML+=`
        <div class="card">
            <div class="imagen">
                <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${n.id}_0.jpg">
            </div>
            <div class="nombre">${n.name}</div>
            <div class="tipo">${n.partype}</div>
        </div>`}),imagen})(n)})});
//# sourceMappingURL=index.740a76e7.js.map

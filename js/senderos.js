class sendero {
    constructor(imagen,nombre,distancia,dificultad,dificultad2,tiempo,tiempo2,altura,mapa) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.distancia = distancia;
        this.dificultad = dificultad;
        this.dificultad2 = dificultad2
        this.tiempo = tiempo;
        this.tiempo2 = tiempo2;
        this.altura = altura;
        this.mapa = mapa;
        this.info = `Está a ${distancia}km del pueblo, el nivel de dificultad es ${dificultad2}, se ascienden ${altura}msnm durante todo el trayecto, y se estima que tardarán ${tiempo} en llegar`;
    }
    verInfo(){
        alert(this.info)
    }
}

function actualizarStorage(arraySenderos) {
    localStorage.setItem("senderos", JSON.stringify(arraySenderos));
    console.log("local storage actualizado");
}

let arraySenderos = [];

const cerroTorre = new sendero('img/lagunatorre.jpg',"Laguna torre",9,7,"media","3 hs","03:00 hs",600,"map-torre.html");
const cerroFitz = new sendero('img/lagunadelostres.jpg',"Laguna de los tres",10,10,"alta","4hs y media","04:30 hs",1200,"map-fitz.html");
const cascadaSalto = new sendero('img/chorrillo_de_salto.jpg',"Chorrillo del salto",4,3,"baja","media hora","00:30 hs",200,"map-chorrillo.html");

let totalSenderos = arraySenderos.push(cerroTorre, cerroFitz, cascadaSalto);

arraySenderos.sort((a,b) => {
    if (a.dificultad < b.dificultad) {
        return -1;
    }

    if (a.dificultad > b.dificultad) {
        return 1;
    }
    
    return 0;
});

console.log(arraySenderos);


const contenedorSenderos = document.getElementById("senderos");
if (contenedorSenderos) {
  arraySenderos.forEach((senderos) => {
    const div = document.createElement("div");
    div.className = "card-img-top";
    div.style = "width: 100%";
    div.innerHTML = `
                    <div class="card mt-4 ml-5 p-0 rounded">
                    <img src=${senderos.imagen} class="rounded">
                    <h4>${senderos.nombre}</h4>
                    <p>${senderos.info}</p>
                    <div class="difficulty">
                        <i class="far fa-clock"></i>
                        <p>${senderos.dificultad2}</p>
                    </div>
                    <div class="time">
                        <i class="fas fa-hiking"></i><p>${senderos.tiempo2}</p>
                    </div>
                    <a class="btn" href="${senderos.mapa}">Map</a>
                </div>
      `;
    contenedorSenderos.appendChild(div);
  });
}

arraySenderos = JSON.parse(localStorage.getItem("senderos"));
console.log("carga inicial desde el local storage");


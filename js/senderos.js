class sendero {
    constructor(imagen,nombre,distancia,dificultad,tiempo,altura) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.distancia = distancia;
        this.dificultad = dificultad;
        this.tiempo = tiempo;
        this.altura = altura;
        this.info = `El cerro ${nombre} está a ${distancia}km del pueblo, el nivel de dificultad es ${dificultad}, se ascienden ${altura}snm durante todo el trayecto, y se estima que tardarán ${tiempo} horas en llegar`;
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

const cerroTorre = new sendero('https://via.placeholder.com/200',"torre",9,7,3,600);
const cerroFitz = new sendero('https://via.placeholder.com/200',"fitz",10,10,3.5,1200);
const cascadaSalto = new sendero('https://via.placeholder.com/200',"salto",4,3,0.5,200);

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
    div.style = "width: 18rem";
    div.innerHTML = `
          <img src=${senderos.imagen} class="card-img-top">
          <div class="card-body">
          <h5 class="card-title">${senderos.nombre}</h5>
          <p class="card-text">${senderos.info}</p>
          <a href="#" class="btn">Hola</a>
          </div>
      `;
    contenedorSenderos.appendChild(div);
  });
}

arraySenderos = JSON.parse(localStorage.getItem("senderos"));
console.log("carga inicial desde el local storage");


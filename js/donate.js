const carrito = []

const productos = [{
    nombre: "Gorra",
    id: 1,
    precio: 500,
    foto: "img/gorra.jpg"
},
{
    nombre: "Remera",
    id: 2,
    precio: 2000,
    foto: "img/remera.jpg"
},
]

const agregarAlCarrito = (prodId) => {
    const producto = productos.find(el=>el.id===prodId)
    carrito.push(producto)

    console.log(carrito)
}

productos.forEach((prod) => {

    $('#contenedor').append(`
    <br>
    <img src=${prod.foto} class="border rounded">
    <h2 class="my-2">${prod.nombre}</h2>
    <p>Precio: $${prod.precio}</p>
    <small>Código: ${prod.id}</small> <br>
    <button id="agregar${prod.id}" class="btn my-2">Agregar al carrito</button>
    `)
    $(`#agregar${prod.id}`).on('click',()=>{
        agregarAlCarrito(prod.id)
    })
})


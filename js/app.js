
// == selectores ==
const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const carrito = []



const mostrarProductos = (array) => {
    contenedorProductos.innerHTML = ''
    
    array.forEach( (producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.className = "card-img-top rounded";
        div.innerHTML = `
        <div class="card mx-auto mt-4 p-0 rounded justify-content-center text-center" style="width: 200px">
                    <img src=${producto.img} class="rounded" alt="">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc}</p>
                    <p>establecimiento: ${producto.establecimiento}</p>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="btn boton-agregar">Agregar <i class="fas fa-bed"></i></button>
        </div>
        `
        
        contenedorProductos.appendChild(div)
    } )
}

mostrarProductos(stockProductos)


// === AGREGAR AL CARRITO ===


const agregarAlCarrito = (itemId) => {

    const productoEnCarrito = carrito.find((prod) => prod.id === itemId)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++
    } else {

        const producto = stockProductos.find( (prod) => prod.id === itemId)
    
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        })
    }
    

    console.log(carrito)
    actualizarCarrito()
}

// === RENDER CARRITO ===

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.className = "justify-content-center"
        div.innerHTML = `
                <p>${prod.nombre}</p>
                <p>Precio: $${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button onclick="eliminarProducto(${prod.id})" class="boton-eliminar"><i class="fas fa-bed"></i></button>
             `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
}

// === ELIMINAR PRODUCTO ===

const eliminarProducto = (itemId) => {
    const producto = carrito.find((prod) => prod.id === itemId)
    
    producto.cantidad--

    if (producto.cantidad === 0) {
        const index = carrito.indexOf(producto)
        carrito.splice(index, 1)
    }
   
    actualizarCarrito()
}


// == FILTROS == 

const selectFiltro = document.getElementById('establecimiento')
const selectPrecios = document.getElementById('precios')


const filtrar = () => {
    let valorFiltroEstablecimientos = selectFiltro.value
    let valorFiltroPrecios = selectPrecios.value
    
    let arrayFiltrado = []

    if (valorFiltroEstablecimientos == 'all') {
        arrayFiltrado = stockProductos
    } else {
        arrayFiltrado = stockProductos.filter( el => el.establecimiento == selectFiltro.value) 
    }

    if (valorFiltroPrecios == 1) {
        arrayFiltrado = arrayFiltrado.filter( el => el.precio <= 5000)
    } else if (valorFiltroPrecios == 2) {
        arrayFiltrado = arrayFiltrado.filter( el => el.precio >= 5000 || el.precio <= 10000)
    } else if (valorFiltroPrecios == 3) {
        arrayFiltrado = arrayFiltrado.filter( el => el.precio >= 10000)
    }

    mostrarProductos(arrayFiltrado)

}

selectFiltro.addEventListener('change', ()=>{
    filtrar()
})
selectPrecios.addEventListener('change', ()=>{
    filtrar()
})


// === buscador ===

const buscador = document.getElementById('buscador')

const buscar = (search) => {
    return stockProductos.filter((prod) => prod.nombre.toLowerCase().includes(search))
}


buscador.addEventListener('input', () => {
    const search = buscador.value.trim().toLowerCase()
    mostrarProductos( buscar(search) )  
})
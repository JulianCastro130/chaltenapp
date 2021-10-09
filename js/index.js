const user = localStorage.getItem('nameUser')
const contenedorUser = document.getElementById('user')
if (contenedorUser) {
    const div = document.createElement('div');
    const element = document.createElement('div');
    element.className = "mr-0"
    element.innerHTML = `
    <p>Welcome: ${user}</p>
    `;
    contenedorUser.appendChild(element);
}

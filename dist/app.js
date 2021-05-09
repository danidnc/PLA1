import { UsersData } from "./services/usersData.js";
let node;
let textNode;
const usuariosData = new UsersData;
const usuarios = usuariosData.getUsuarios();
console.log(usuarios);
console.log(usuarios[0].name);
const lista = document.getElementById('listaUsuarios');
usuarios.forEach((usuario) => {
    node = document.createElement("li");
    node.classList.add(`usuario${usuario.id}`);
    textNode = document.createTextNode(usuario.name);
    node.appendChild(textNode);
    lista.appendChild(node);
});
document.getElementById('listaUsuarios').addEventListener('click', (e) => {
    const t = e.target;
    let className = t.classList;
    let idSeleccionado = className[0].match(/\d+/g);
    let id = parseInt(idSeleccionado);
    const usuario = usuariosData.getUsuariosById(id);
    const detalle = document.getElementById('detalle');
    detalle.textContent = `El usuario ${usuario.name} tiene como email : ${usuario.email}`;
});

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
    console.log(t);
    let className = t.classList;
    console.log(className[0]);
    let idSeleccionado = className[0].match(/\d+/g);
    console.log(idSeleccionado);
    let id = parseInt(idSeleccionado);
    console.log(id);
    const usuario = usuariosData.getUsuariosById(id);
    console.log(usuario);
    const detalle = document.getElementById('detalle');
    detalle.textContent = `El usuario ${usuario.name} tiene como email : ${usuario.email}`;
});

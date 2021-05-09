import { UsersData } from "./services/usersData.js";
let listItem;
let itemText;
const usuariosData = new UsersData;
const usuarios = usuariosData.getUsuarios();
const lista = document.getElementById('listaUsuarios');
usuarios.forEach((usuario) => {
    listItem = document.createElement("li");
    listItem.classList.add(`usuario${usuario.id}`);
    itemText = document.createTextNode(usuario.name);
    listItem.appendChild(itemText);
    lista.appendChild(listItem);
});
document.getElementById('listaUsuarios').addEventListener('click', (e) => {
    const t = e.target;
    let className = t.classList;
    let idSeleccionado = className[0].match(/\d+/g);
    let id = parseInt(idSeleccionado);
    const usuario = usuariosData.getUsuariosById(id);
    const detalle = document.getElementById('detalle');
    detalle.textContent = `El usuario ${usuario.name} tiene registrado el teléfono :
      ${usuario.phone}`;
});

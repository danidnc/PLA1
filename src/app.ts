import { IUser } from "./interfaces/interfaces.js";
import {UsersData} from "./services/usersData.js";

let listItem : HTMLLIElement;
let itemText : Text;

const usuariosData : UsersData = new UsersData;
const usuarios:IUser[] = usuariosData.getUsuarios();

const lista = document.getElementById('listaUsuarios')! as HTMLUListElement;

usuarios.forEach((usuario)=>{
      listItem = document.createElement("li");
      listItem.classList.add(`usuario${usuario.id}`);
      itemText = document.createTextNode(usuario.name);
      listItem.appendChild(itemText);
      lista.appendChild(listItem);
});

document.getElementById('listaUsuarios')!.addEventListener('click',(e:Event)=>{
      const t = e.target as any;
      let className = t.classList;
      let idSeleccionado : string = className[0].match(/\d+/g);
      let id:number = parseInt(idSeleccionado);
      const usuario:IUser = usuariosData.getUsuariosById(id);
      const detalle = document.getElementById('detalle')! as HTMLParagraphElement;
      detalle.textContent = `El usuario ${usuario.name} tiene registrado el teléfono :
      ${usuario.phone}`;
});


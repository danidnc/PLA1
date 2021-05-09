import { IUser } from "./interfaces/interfaces.js";
import {UsersData} from "./services/usersData.js";

let node : HTMLLIElement;
let textNode : Text;

const usuariosData : UsersData = new UsersData;
const usuarios:IUser[] = usuariosData.getUsuarios();
console.log(usuarios);
console.log(usuarios[0].name);


const lista = document.getElementById('listaUsuarios')! as HTMLUListElement;

usuarios.forEach((usuario)=>{
      node = document.createElement("li");
      node.classList.add(`usuario${usuario.id}`);
      textNode = document.createTextNode(usuario.name);
      node.appendChild(textNode);
      lista.appendChild(node);
});

document.getElementById('listaUsuarios')!.addEventListener('click',(e:Event)=>{
      const t = e.target as any;
      console.log(t);
      let className = t.classList;
      console.log(className[0]);
      let idSeleccionado : string = className[0].match(/\d+/g);
      console.log(idSeleccionado);
      let id:number = parseInt(idSeleccionado);
      console.log(id);
      const usuario:IUser = usuariosData.getUsuariosById(id);
      console.log(usuario);
      const detalle = document.getElementById('detalle')! as HTMLParagraphElement;
      detalle.textContent = `El usuario ${usuario.name} tiene como email : ${usuario.email}`;
})


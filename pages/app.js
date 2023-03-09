class Usuario{
    constructor(  nombre , apellido , edad , domicilio , documento ,actividades
              ) 
{        
this.nombre = nombre
this.apellido = apellido
this.edad = edad
this.domicilio = domicilio
this.documento = documento
this.actividades = actividades

   }
saludar (){
     console.log("Hola soy" + this.nombre)
    }



}
const usuario1 = new Usuario ("Alejandra", "Alvarez" ,36, " Doctor navarro gil 4 " ,4387097, "tennis", )
usuario1.saludar() 

const usuario2 = new Usuario  ("Martin" ,"Magnani", 39, " Doctor navarro gil 4 " ,4562900 , "natacion",)
usuario2.saludar()

const usuario3 = new Usuario   ("Maria", "Suarez",32 , " Belgrano 1360 " , 5609889 , "sala de musculacion",) 
usuario3.saludar()

const usuario4 =new Usuario ("Susana","Gimenes",27,"Inclusa 67", 238908,"pilates",)
usuario3.saludar()

let usuarios= [usuario1,usuario2,usuario3,usuario4]
usuarios.forEach(usuario =>{
    

})

const boton= document.getElementById("actividades");
const asterisco= document.getElementById("opcionactividad")

asterisco.addEventListener('change', () => 
{
    boton.textContent = asterisco.value;
});

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
boton.addEventListener("click", () => {
    audio.play();
  });
  const buttons = document.querySelectorAll("button");
      
  buttons.forEach(button => {
        button.addEventListener("click", () => {
          audio.play();
        });
      });


localStorage.setItem(`asterisco`,JSON.stringify(opcionactividad));
localStorage.getItem(`asterisco`,JSON.stringify(opcionactividad));

window.addEventListener(`DOMContentLoaded`,traerUsuarioContacto)


function cargarUsuarios()
{ 
  let usuarios = new Usuario()
  usuarios.nombre = prompt()
  usuarios.apellido = prompt()
  usuarios.edad = prompt()
  usuarios.domicilio = prompt()
  usuarios.documento = prompt()
  usuarios.actividad = parseFloat(prompt("ingrese actividadElegida"))

  lista.push(usuarios);
  localStorage.setItem(`contactos`,JSON.stringify(usuario1));
  mostrarUsuariosDOM();
   

}
for (const usuarios of usuarios){
  guardarLocal(usuarios.id,JSON.stringify(usuarios));

}
guardarLocal("listausuarios", JSON.stringify(usuarios));
console.log(usuarios)

usuarios = JSON.parse(localStorage.getItem(`usuarios`));

 let miContacto = documet.getElementById("contacto");
 miContacto.addEventListener("submit",validarContacto);

 function validarContacto(e){
    e.preventDefault();
    console.log("Contacto Enviado");
 }

 const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
 const listaUsuarios = document.querySelector("#lista-usuarios");

 fetch(urlUsuarios)
 .then((response)=>response.json() )
 .then((data)=> {
      mostrarUsuarios(data);
  })    
  function mostrarUsuarios(usuarios) { 
    usuarios.forEach(ususuario=> {  
  const form = document.createElement("form");
  form.innerText = usuarios.name + "<br>documeto: "+ usuarios.nomber;
  listaUsuarios.append(form);
  })
  
}
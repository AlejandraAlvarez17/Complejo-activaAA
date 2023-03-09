const actividades = document.getElementById('actividades');



const actividades = document.getElementById('actividades');
actividades.onclick = () =>
  { 
    Swal.fire(
        {
          title: "login",
          text: "Ingrese nombre de usuario",
          icon:"error"
          
       });
       }  
       const botoncito = document.getElementById('botoncito');

       let nombreUsuario = null
       botoncito.onclick= ()=>
       { 
        Swal.fire(
           {title: "login",
           text: "Ingrese nombre de usuario",
           input:"text",
           showCancelButton: true,
           cancelButtonText: 'Cancelar',
           confirmButtonText: 'Enviar'


           } 
        )
      .then((result) => {
        if (result.value) 
        {
          nombreUsuario = result.value;
          Swal.fire({
            title:"Bienvenido a entrenar!"+ nombreUsuario
          });

        }  
          
        }) 
        

}
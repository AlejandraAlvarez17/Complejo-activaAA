

        let actividadesEnCarrito = localStorage.getItem("actividades-en-carrito");
        actividadesEnCarrito = JSON.parse(actividadesEnCarrito);

       
        const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
        const contenedorCarritoActividades = documet.querySelector("#carrito-actividades");
        const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
        const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
        let botonesEliminar = document.querySelectorAll(".carrito-actividad-eliminar")
        const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
        const contenedorTotal = document.querySelector("#total");
        const botonComprar = document.querySelector("#carrito-acciones-comprar");


        function cargarActividadesCarrito() {

        

        if( actividadesEnCarrito&&actividadesEnCarrito.length>0) {

         
        

         contenedorCarritoVacio.classList.add("disabled");
         contenedorCarritoActividades.classList.remove("disabled");
         contenedorCarritoAcciones.classList.remove("disabled");
         contenedorCarritoComprado.classList,add("disabled");

         contenedorCarritoActividades.innerHTML = "";

         actividadesEnCarrito.forEach(actividad => {

         const div = document.createElement("div");
         div.classList.add("carrito-actividades");
         div.innerHTML = `     
         
         <img class="actividad imagen" src="${actividad.imagen}" alt="${actividad.titulo}">
          <div class="carrito-actividad-titulo">
              <small>Titulo</small>
              <h3>${actividad.titulo}</h3>
           </div>    
          <div class = "carrito-actividad-cantidad">
              <small>Cantidad</small>
              <P>${actividad.cantidad}</p>
          </div>
          <div class= "carrito-actividad-mensual">
               <small>Mensual</small>
               <p> ${actividad.mensual}</p>
          <div  class= "carrito-actividad-subtotal">
               <small>Subtotal</samll>
               <p>${actividad.mensual*actividad.cantidad}</p>
         </div>
          <botton class="carrito-actividad-eliminar" id="${actividad.id} ><i class="bi bi-trash-fill"></i></botton>
      
         `;

         contenedorCarritoActividades.append(div);
          })

        } else {

         contenedorCarritoVacio.classList.remove("disabled");
         contenedorCarritoActividades.classList.add("disabled");
         contenedorCarritoAcciones.classList.add("disabled");
         contenedorCarritoComprado.classList,add("disabled");
        
          } 
           actualizarBotonesEliminar();
           actualizarTotal();
        }
        cargarActividadesCarrito();

       
        function actualizarBotonesEliminar()  {
            botonesEliminar = document.querySelectorAll(".carrito-actividad-eliminar");

            botonesEliminar.forEach(boton => {
               boton.addEventListener("click" ,eliminarDelcarrito);
            } );
 }
 function eliminarDelCarrito(e) {
    let idBoton = e.currentTarget.id;
    const index = actividadesEnCarrito.findIndex(actividad => actividad.id ===idBoton);
    actividadesEnCarrito.splice(index,1);
    cargarActividadesCarrito();

    localStorage.setItem("actividades-en-carrito",JSON.stringify(actividadesEnCarrito));
 }
botonVaciar.addEventListener("click",vaciarCarrito);

function vaciarCarrito() {
    actividadesEnCarrito.length = 0;
    localStorage.setItem("actividades-en-carrito",JSON.stringify(actividadesEnCarrito));
    cargarActividadesCarrito();
}
function actualizarTotal() {
    const totalCarculado = actividadesEnCarrito.reduce((ac,actividad)=> acc+(actividad.mensual*actividad.cantidad),0);
    total.innerText = `$${totalCalculado}`;

}
botonComprar.addEventListener("click",comprarCarrito);
function comprarCarrito();{ 

actividadesEnCarrito.length = 0;
localStorage.setItem("actividades-en-carrito",JSON.stringify(actividadesEnCarrito));

contenedorCarritoVacio.classList.add("disabled");
contenedorCarritoActividades.classList.add("disabled");
contenedorCarritoAcciones.classList.add("disabled");
contenedorCarritoComprado.classList,remove("disabled");

  }
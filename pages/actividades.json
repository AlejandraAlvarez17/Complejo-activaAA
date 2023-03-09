const actividades= [

   {   id:"natacion",
    titulo:"Natacion 01 'Agua'",
    imagen: "./assets/img/iamgen pequeña natatorio.jpeg",
    categoria:{Agua

    },
    mensual: 50
    } ,
   

   {      id: "tennis",
        titulo:"Tennis 02 'Tierra'",
        imagen:"./assets/img/img.cancha tennis jpg.jfif",
        categoria:{Tierra

    },
    mensual:30
 },

 {      id: "musculacion",
        titulo:"Musculacion 03'Tierra'",
        imagen:"./assets/img/img.gimnasio5.jpg",
        categoria:{Tierra

    },
    mensual:30
 },
 {      id: "aguagim",
        titulo:"Aguagim 04'Agua'",
        imagen:"./assets/img/iamgen pequeña natatorio.jpeg",
        categoria:{Agua

    },
    mensual:40
 },
 {      id: "zumba",
        titulo:"Zumba 05'Tierra'",
        imagen:"./assets/img/img.zumba8.jpg",
        categoria:{Tierra

    },
    mensual:30
 },
 
 {      id: "pilates",
 titulo:"Pilates 06'Aire'",
 imagen:"./assets/img/img.locAL3JPG.jpg",
 categoria:{Aire

},
mensual:20
},

{      id: "localizada",
titulo:"Localizada 07'tierra'",
imagen:"./assets/img/img.localizada mujer.jpg",
categoria:{Tierra

},
mensual:30
},

{      id: "matro-natacion",
titulo:"Matronatacion 08'Agua'",
imagen:"./assets/img/img matro-natacion jpg.jpg",
categoria:{Agua

},
mensual:50
},


{      id: "todas-las-actividades" ,
titulo:"Todas las actividades 09'Aire'",
imagen:"./assets/img/img danza aerea.jfif",
categoria:{Aire

},
mensual:60
},
]
const contenedorActividades= document.querySelector("#contenedor-actividades");
const botonesCategorias= document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".actividad-agregar");
const numerito = document.querySelector("#numerito");


function cargarActividades(actividadesElegidas) {

   contenedorActividades.innerHTML = "";
   actividadesElegidas.forEach(actividad=> { 

      const div= document.createElement("div");
      div.classList.add("actividad");
      div.innerHTML= `
      <img class="actividad-imagen" src="${actividad.imagen} " alt="${actividad.titulo}">
     <div class="actividad-detalles">
    <h3 class="actividad-titulo">${actividad.titulo}</h3>
    <p class="actividad mensual"> ${actividad.mensual} </p>
    <botton class="actividad-agregar"${actividad.id} Agregar</botton>
    </div>
      `;
      contenedorActividades.append(div);
    } )
    actualizarBotonesAgregar();
  }  
  cargarActividades(actividades);

  botonesCategorias.forEach(boton =>{
   boton.addEventListener("clik",(e)=>{

      botonesCategorias.forEach(boton=> boton.classList.remove("active"));
      e.currentTarget.classList.add("active");

      if(e.currentTarget.id != "todas"){ 
      const actividadCategoria = actividades.find(actividad => actividad.categoria.id ===e.currentTarget.id);
      tituloPrincipal.innerText = actividadCategoria.categoria.nombre;

      const actividadesBoton = actividades.filter(actividad =>actividad.categoria.id===e.currentTarget.id);
      cargarActividades(actividadesBoton);
   } else {
      tituloPrincipal.innertext = "Todo lo que buscas en un solo lugar";
      cargarActividades(actividades);
   }
   })
  });

  function actualizarBotonesAgregar()  {
   botonesAgregar = document.querySelectorAll(".actividad-agregar");
   botonesAgregar.forEach(boton => {
      boton.addEventListener("click" ,agragarAlcarrito);
   } );
     
  }
  let actividadesEnCarrito;
  const actividadesEnCarritoLS = JSON.parse(localStorage.getItem("actividades-en-carrito"));
  if(actividadesEnCarritoLS) {
   actividadesEnCarrito = actividadesEnCarritoLS;
   actualizarNumerito();
   
  }else {
     actividadesEnCarrito = [];
  }
  

  function agregarAlCarrito(e) {

   const idBoton = e.currentTarget.id;
   const actividadAgregado = actividades.find(actividad => actividad.id ===idboton);

  if (  actividadesEnCarrito.some(actividad =>actividad.id === idboton) ){
   const index = actividadesEnCarrito.findIndex(actividad => actividad.id=== idboton);
   actividadesEnCarrito[index].cantidad ++;

    } else {
       actividadAgregado.cantidad = 1;
       actividadesEn.Carritopush(actividadAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("actividad-en carrito",JSON.stringify(actividadesEnCarrito));
  }
  function actualizarNumerito() {
      let nuevoNumerito = actividadesEnCarrito.reduce((acc, actividad)=>acc+actividad.cantidad,0);
      numerito.innerText = nuevoNumerito;

      
      
  }
   
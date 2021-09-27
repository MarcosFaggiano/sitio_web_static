// variables de HTML
// querySelector: con este traemos lo que tenemos en el HTML al JS , al poner el dummy lo tomamos como identificador y con innerHTML lo metimos en js
const dummy = document.querySelector("#dummy");
dummy.innerHTML =
  '<div class="calzados"><div class="calzado"><h4 id="calzado-name"></h4></div></div>';

let calzado = [];
let loading = true;

// ----------------------------------------------------------
// LLAMADO A LA API

// a) fech: primero linkeo la api
// b) lo que me devuelve, no lo vamos a poner dentro de una funcion, ya que const, ya que esoseria si llamamos a la api cuando apretamos un boton.
//  En nuestro caso, necesitamos que cargue cuando entramos a la pagina, por eso tiene que estar suelto.
//  then: es la respuesta del servidor, a partir de aca veos que hacemos con la data. tienemos que transformarla en .json para leerla
//  push: en array vacio que creamos

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    calzado.push(data);
    console.log(calzado);
    loading = false;
  });

// -----------------------------------------------------------------
// Funciones especificas

// variables de HTML
// querySelector: con este traemos lo que tenemos en el HTML al JS , al poner el dummy lo tomamos como identificador y con innerHTML lo metimos en js
// const calzados = document.querySelector("#calzados");

// let calzadoInfo = '<h4 id="calzado-name"></h4><h3 id="calzado-price"></h3>';

// let shoes = [];
// let loading = true;

// // ----------------------------------------------------------
// // Crear ELEMENTOS de calzados

// const createCalzadoElement = (id, calzadoName) => {
//   const element1 = document.createElement("div");

//   element1.innerHTML = calzadoInfo;
//   element1.children[0].innerText = calzadoName;

//   element1.id = "calzado-" + id;

//   return element1;
// };

// // -------------------------------------------------------------
// // LLAMADO A LA API

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     shoes.push(data);
//     console.log(shoes);
//     loading = false;

//     data.forEach((x, i) => {
//       if (x.name === "Leanne Graham") {
//         calzados.appendChild(createCalzadoElement(i + 1, x.name));
//       }
//     });
//   });

// -----------------------------------------------------------------
// Funciones especificas
// a) fech: primero linkeo la api
// b) lo que me devuelve, no lo vamos a poner dentro de una funcion, ya que const, ya que esoseria si llamamos a la api cuando apretamos un boton.
//  En nuestro caso, necesitamos que cargue cuando entramos a la pagina, por eso tiene que estar suelto.
//  then: es la respuesta del servidor, a partir de aca veos que hacemos con la data. tienemos que transformarla en .json para leerla
//  push: en array vacio que creamos
// -------------------------------------------------------------------
const btnConsultar = document.getElementById(`btnConsultar`);

const userInput = document.getElementById("userInput");

const userId = document.getElementById("userId");

const userName = document.getElementById("userName");

const userEmail = document.getElementById("userEmail");

const userAddress = document.getElementById("#userAddress");

let nameList = [];
let selectedUser;

const userUrl = `https://jsonplaceholder.typicode.com/users`;

const getUserList = () => {
  fetch(userUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(nameList);
      nameList = [];
      nameList = data.results;
    })
    .catch((err) => console.log(`ERROR: `, err));
};

const getUserById = (id) => {
  fetch(`${userUrl}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(selectedUser);
      selectedUser = data;
      userId.innerText = selectedUser.id;
      userName.innerText = selectedUser.name;
      userEmail.innerText = selectedUser.email;
      userAddress.innerText = selectedUser.address;
    });
};

btnConsultar.addEventListener("click", () => {
  console.log("buscando...");
  getUserById(userInput.value);
});

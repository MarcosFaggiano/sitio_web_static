let data = {
  personas: [
    {
      apellido: "APELLIDO",
      nombre: "NOMBRE",
      email: "EMAIL",
      edad: "EDAD",
      pais: "PAIS",
    },
  ],
  mensajes: [],
};

const form = document.querySelector("#form");
const sendBtn = document.querySelector("#sendBtn");

const handleSendBtn = () => {
  const nuevaPersona = {
    apellido: form.apellido.value,
    nombre: form.nombre.value,
    email: form.email.value,
    email: form.edad.value,
    pais: form.pais.value,
  };

  // Muy importante esto que esta a continucion, lo que le decimos que a data es igual a una propiedad que ...form(los 3 punto es lo que tenga adentro)
  // lo que tenga adentro DATA PERSONAS, que genere un array con lo que tiene data persona + nuevaPersona, que seria un objeto nuevo que  creamos,
  // se lo inyectamos al array lo que carga el formulario

  data = { ...data, personas: [...data.personas, nuevaPersona] };

  form.reset();

  console.log(data.personas);
};

sendBtn.addEventListener("click", handleSendBtn);

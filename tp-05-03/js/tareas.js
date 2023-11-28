function agregarTarea() {
  const inputTarea = document.getElementById("inputTarea");
  const tarea = inputTarea.value.trim();

  if (tarea !== "") {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.className =
      "list-group-item d-flex justify-content-between align-items-center";
    nuevoElemento.innerHTML = `
        ${tarea}
        <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
      `;

    document.getElementById("listaTareas").appendChild(nuevoElemento);
    inputTarea.value = "";
  }
}

function eliminarTarea(elemento) {
  const tareaEliminar = elemento.parentNode;
  tareaEliminar.parentNode.removeChild(tareaEliminar);
}

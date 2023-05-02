// FOLLOW AND UNFOLLOW BUTTON

const followButton = document.getElementById("follow-button");

followButton.addEventListener("click", function() {
  if (followButton.textContent === "Seguir") {
    followButton.textContent = "Dejar de seguir";
    followButton.style.backgroundColor = "#4b9fea";
  } else {
    followButton.textContent = "Seguir";
    followButton.style.backgroundColor = "#4267B2";
  }
});


// LIKE BUTTON
let likes = 200;
let liked = false;

function actualizarBotonLike() {
  const boton = document.querySelector('.btn-like');
  if (liked) {
    boton.classList.remove('btn-like--liked');
    boton.textContent = 'Me gusta';
    likes--;
  } else {
    boton.classList.add('btn-like--liked');
    boton.textContent = 'Ya no me gusta';
    likes++;
  }
  document.querySelector('#num-likes').innerHTML = `<b>${likes}</b> Likes`;
  liked = !liked;
}

// INCREMENTAR LIKES
function incrementarLikes() {
  const boton = document.querySelector('.btn-like');
  if (!boton.disabled) {
    actualizarBotonLike();
    boton.disabled = true;
  }
}


// WRITE AND ELIMINATE COMMENTS
const formComentario = document.getElementById("form-comentario");
const comentariosLista = document.getElementById("comentarios-lista");

formComentario.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputUsuario = document.getElementById("input-usuario");
  const inputComentario = document.getElementById("input-comentario");

  if (inputUsuario.value === "" || inputComentario.value === "") {
    alert("Por favor ingresa un usuario y un comentario");
  } else {
    const nuevoComentario = document.createElement("p");
    nuevoComentario.classList.add("p-comentarios");
    nuevoComentario.innerHTML = `<strong>${inputUsuario.value} </strong>${inputComentario.value}<button class="btn-eliminar" onclick="eliminarComentario(this)">Eliminar</button>`;
    comentariosLista.appendChild(nuevoComentario);
    inputUsuario.value = "";
    inputComentario.value = "";
  }
});

function eliminarComentario(btnEliminar) {
  btnEliminar.parentNode.remove();
}

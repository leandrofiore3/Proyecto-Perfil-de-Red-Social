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

let likes = 200; 

function incrementarLikes() {
  const boton = document.querySelector('.btn-like');
  if (!boton.disabled) {
    likes++;
    document.querySelector('#num-likes').textContent = `${likes} Likes`;
    boton.disabled = true;
  }
}



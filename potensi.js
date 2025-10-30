function openPopup(title, text, imgSrc) {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-text").innerText = text;
  document.getElementById("popup-img").src = imgSrc;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

window.onclick = function(event) {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
}

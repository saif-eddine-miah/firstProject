const formButton = document.getElementById("form-button")
const swal = (message) => {
  Swal.fire();

Swal.fire({
  text: "Merci de votre visite, votre message à été envoyé! Que la force soit avec vous !",
  imageUrl: 'src/img/SWB.png',
  imageWidth: 150,
  imageHeight: 150,
  imageAlt: 'Logo',
})
}

formButton.addEventListener("click", swal)
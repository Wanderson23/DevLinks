function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver lightMode, adicionar a imagem light
    img.setAttribute("src", "./avatar-light.png")
  } else {
    // se tiver sem lightMode, manter a imagem normal
    img.setAttribute("src", "./avatar.png")
  }
}

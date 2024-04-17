function reveal(name) {
  let text_area = document.querySelector(`#${name}`)
  let btn = document.getElementsByName(`${name}`)

  console.log(btn)
  if (text_area.style.display == "flex"){
    text_area.style.display = ""
    btn.innerText = ">"
  } else {
    text_area.style.display = 'flex'
    btn.innerText = "<"
  }
}

addEventListener()

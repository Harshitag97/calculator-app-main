const buttons = document.querySelectorAll("button")

let s = ""
let s2 = ""
const click_button = buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btnclick = e.target.id

    if (btnclick !== "del") {
      s = s + btnclick
    }

    if (btnclick === "del") {
      s = s.substring(0, s.length - 1)
      document.getElementById("txt_output").value = numberWithCommas(s)
    }
    document.getElementById("txt_output").value = numberWithCommas(s)

    if (btnclick === "reset") {
      document.getElementById("txt_output").value = ""
      s = ""
    }

    if (btnclick === "e") {
      s2 = s
      s = ""
      s = s2.substring(0, s2.length - 1)

      document.getElementById("txt_output").value = eval(s)
    }
  })
})

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

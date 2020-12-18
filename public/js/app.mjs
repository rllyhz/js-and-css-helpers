import _ from "./_.mjs"
import _req from "./_req.mjs"

function getElem(cssSelector, getAll = false) {
  if (getAll) {
    return document.querySelectorAll(cssSelector)
  } else {
    return document.querySelector(cssSelector)
  }
}

async function main(e) {

  // as default, ''.get()' method always returns only one active element.
  // _("div").get()
  // and runs any methods for it
  // to change this behavior set the selected elements to be an active state,
  // by passing an option, like this:
  // _("div", { all: true }).get()

  // hide element
  // _("a").hide()
  // show element
  // _("a").show()
  // click element
  // _("a").click()

  // get the element currently selected
  // console.log(_("button").get())

  // add new class
  // _("button").addClass("btn-secondary")
  // remove an existing class
  // _("button").removeClass("btn-secondary")
  // toggle a class
  // _("button").toggle("newClass")

  // get value of class attribute
  // console.log(_("button").attribute("class"))
  // set attribute class to "newClass"
  // _("button").attribute("class", "newClass")

  // set a style
  // _("button").style("color", "aliceblue")
  // set some styles
  // _("button").styles({
  //   backgroundColor: "blue",
  //   color: "white",
  //   fontSize: "2rem"
  // })

  // add on click event
  // _("button").onClick(e => alert("clicked."))
  // add on mouse enter event
  // _("button").onHover(e => alert("Mouse enter."))
  // add on mouse out event
  // _("button").onUnhover(e => alert("Mouse out."))

  // add any event to the element
  // _("button").on("click", e => alert("Clicked."))

  // remove existing event
  // function callback(e) {
  //   console.log(e)
  // }

  // _("button").onClick(callback)
  // _("button").removeEvent("click", callback)



  // Demo _req()

  const result = await _req.get("data.json", true)
  console.log(result)

  _req
    .get("data.json")
    .then(res => res.json())
    .then(res => console.log(res))

  _req
    .post("http://localhost:8000/user", {
      nama: "user 1",
      nim: "5302418034"
    })
    .then(res => res.json())
    .then(res => console.log(res))
}

document.addEventListener("DOMContentLoaded", main);
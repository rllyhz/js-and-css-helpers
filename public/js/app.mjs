// import _ from "./_.mjs"
import _ from "./_http.mjs"

function getElem(cssSelector, getAll = false) {
  if (getAll) {
    return document.querySelectorAll(cssSelector)
  } else {
    return document.querySelector(cssSelector)
  }
}

function createElem(tagName, className = null, innerText = null) {
  const elem = document.createElement(tagName)

  if (className !== null) elem.classList.add(className)
  if (innerText !== null) elem.innerText = innerText

  return elem
}

const simpleHttp = (url, options = null) => {
  if (!url) return

  if (options === null) {
    return fetch(url)
  }

  return fetch(url, options)
}


function remove_linebreaks(str) {
  return str.replace(/[\r\n]+/gm, "");
}

function makeTitle(str) {
  return str.split(" ")
    .map(word => capitalize(word))
    .join(" ")
}

function capitalize(str) {
  let word = ""


  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      word += (str.charAt(i)).toUpperCase()
      continue;
    }

    word += str.charAt(i)
  }

  return word
}


const endpoints = {
  posts: "poinst",
  comments: "comments",
}

function getData(endpoint, callback) {
  const baseUrl = "https://jsonplaceholder.typicode.com"
  const url = `${baseUrl}/${endpoint}`

  simpleHttp(url)
    .then(res => res.json())
    .then(res => callback(res))
    .catch(err => console.log(err))
}

function initUI(data, containerMain) {

  data.forEach(dt => {
    const container = createElem("div", "container")
    const card = createElem("div", "card")
    const titleElem = createElem("h3", "title")
    const bodyElem = createElem("div", "body")

    let title = remove_linebreaks(dt.title)
    let body = remove_linebreaks(dt.body)

    title = makeTitle(title)
    body = capitalize(body)

    card.classList.add("mb-1")
    titleElem.classList.add("mb-3")
    titleElem.classList.add("text-center")
    titleElem.innerText = title
    bodyElem.innerText = body

    card.appendChild(titleElem)
    card.appendChild(bodyElem)

    container.appendChild(card)
    containerMain.appendChild(container)
  })
}

async function main(e) {
  const containerMain = getElem("#container-main")

  getData("posts", async function (data) {
    initUI(data, containerMain)
  })
}

document.addEventListener("DOMContentLoaded", main);
let collection = null,
  cssSelector = null,
  callback = null

const options = {
  all: false,
}

const LOG = {
  error: 0,
  warning: 1
}

class _ {
  activeElems

  constructor(elems) {
    this.activeElems = elems
  }

  get() {
    return this.activeElems
  }

  each(callback) {
    if (typeof callback !== "function") {
      return log("'.each(callback)', The argument 'callback' must be a callable!", LOG.error)
    }

    if (!options.all) {
      return log("'.each(callback)', The results are not a collection!", LOG.error)
    }

    this.activeElems.forEach(callback)
    return this
  }

  click() {
    if (!options.all) {
      this.activeElems.click()
    }

    return this
  }

  // FOR CLASS
  addClass(className) {
    if (isUndefined(className)) {
      return log("'.addClass(className)' method needs at least 1 parameter, 0 given.", LOG.error)
    }

    if (typeof className !== "string") {
      return log("'.addClass(className)', The argument must be a string!", LOG.error)
    }

    if (!options.all) {
      this.activeElems.classList.add(className)
    } else {
      this.activeElems.forEach(elem => {
        elem.classList.add(className)
      })
    }

    return this
  }

  removeClass(className) {
    if (isUndefined(className)) {
      return log("'.removeClass(className)' method needs at least 1 parameter, 0 given.", LOG.error)
    }

    if (typeof className !== "string") {
      return log("'.removeClass(className)', The argument must be a string!", LOG.error)
    }

    if (!options.all) {
      if (this.activeElems.classList.contains(className)) this.activeElems.classList.remove(className)
    } else {
      this.activeElems.forEach(elem => {
        if (elem.classList.contains(className)) elem.classList.remove(className)
      })
    }

    return this
  }

  toggle(className) {
    if (isUndefined(className)) {
      return log("'.toggle(className)' method needs at least 1 parameter, 0 given.", LOG.error)
    }

    if (typeof className !== "string") {
      return log("'.toggle(className)', The argument must be a string!", LOG.error)
    }

    if (isEmptyString(className)) {
      return log("'.toggle(className)', The argument can not be an empty string!", LOG.error)
    }

    if (!options.all) {
      this.activeElems.classList.toggle(className)
    } else {
      this.activeElems.forEach(elem => {
        elem.classList.toggle(className)
      })
    }

    return this
  }

  contains(className) {
    if (isUndefined(className)) {
      return log("'.contains(className)' method needs at least 1 parameter, 0 given.", LOG.error)
    }

    if (typeof className !== "string") {
      return log("'.contains(className)', The argument must be a string!", LOG.error)
    }

    if (!options.all) {
      return this.activeElems.classList.contains(className)
    }

    return log("'.contains(className)' method only for the one active element, you have many!", LOG.error)
  }


  // FOR ATTRIBUTES
  attribute(attr, value = undefined) {
    if (isUndefined(attr)) {
      return log("'.attribute(attr, value)' method needs at least 1 parameter, 0 given.", LOG.error)
    }

    if (typeof attr !== "string") {
      return log("'.attribute(attr, value)', The first argument 'attr' must be a string!", LOG.error)
    }

    if (isEmptyString(attr)) {
      return log("'.attribute(attr, value)', The first argument 'attr' can not be an empty string!", LOG.error)
    }

    if (isUndefined(value)) {
      if (!options.all) {
        return this.activeElems.getAttribute(attr)
      }
    }

    if (typeof value === "string" && value !== "") {
      if (!options.all) {
        this.activeElems.setAttribute(attr, value)
      } else {
        this.activeElems.forEach(elem => {
          elem.setAttribute(attr, value)
        })
      }
    } else {
      return log("'.attribute(attr, value)', The second argument 'value' must be a string!", LOG.error)
    }

    return this
  }

  has(attrName) {
    if (isUndefined(attrName)) {
      return log("'.has(attrName)' method needs at least 1 parameter, 0 given.", LOG.error)
    }

    if (typeof attrName !== "string") {
      return log("'.has(attrName)', The argument must be a string!", LOG.error)
    }

    if (!options.all) {
      return this.activeElems.hasAttribute(attrName)
    }

    return log("'.has(attrName)' method only for the one active element, you have many!", LOG.error)
  }

  // FOR EVENT
  on(event, callback) {
    if (typeof event !== "string") {
      return log("'.on(event, callback)' The first argument 'event' must be a string!", LOG.error)
    }

    if (isEmptyString(event)) {
      return log("'.on(event, callback)' The first argument 'event' can not be an empty string!", LOG.error)
    }

    if (typeof callback !== "function") {
      return log("'.on(event, callback)' The second argument 'callback' must be a callable!", LOG.error)
    }

    if (!options.all) {
      this.activeElems.addEventListener(event, callback)
    } else {
      this.activeElems.forEach(elem => {
        elem.addEventListener(event, callback)
      })
    }

    return this
  }

  removeEvent(event, existingCallback) {
    if (typeof event !== "string") {
      return log("'.on(event, existingCallback)' The first argument 'event' must be a string!", LOG.error)
    }

    if (isEmptyString(event)) {
      return log("'.on(event, existingCallback)' The first argument 'event' can not be an empty string!", LOG.error)
    }

    if (typeof existingCallback !== "function") {
      return log("'.on(event, existingCallback)' The second argument 'existingCallback' must be a callable!", LOG.error)
    }

    if (!options.all) {
      this.activeElems.removeEventListener(event, existingCallback)
    } else {
      this.activeElems.forEach(elem => {
        elem.removeEventListener(event, existingCallback)
      })
    }

    return this
  }

  onClick(callback) {
    if (typeof callback !== "function") {
      return log("'.onClick(callback)' The argument 'callback' must be a callable!", LOG.error)
    }

    if (!options.all) {
      this.activeElems.addEventListener("click", callback)
    } else {
      this.activeElems.forEach(elem => {
        elem.addEventListener("click", callback)
      })
    }

    return this
  }

  onHover(callback) {
    if (typeof callback !== "function") {
      return log("'.onHover(callback)' The argument 'callback' must be a callable!", LOG.error)
    }

    if (!options.all) {
      this.activeElems.addEventListener("mouseenter", callback)
    } else {
      this.activeElems.forEach(elem => {
        elem.addEventListener("mouseenter", callback)
      })
    }

    return this
  }

  onUnhover(callback) {
    if (typeof callback !== "function") {
      return log("'.onUnhover(callback)' The argument 'callback' must be a callable!", LOG.error)
    }

    if (!options.all) {
      this.activeElems.addEventListener("mouseout", callback)
    } else {
      this.activeElems.forEach(elem => {
        elem.addEventListener("mouseout", callback)
      })
    }

    return this
  }

  // FOR STYLES
  style(property = "", value = "") {
    if (!options.all) {
      this.activeElems.style[property] = value
    } else {
      this.activeElems.forEach(elem => {
        elem.style[property] = value
      })
    }

    return this
  }

  styles(propertyValueCssPairs) {
    if (propertyValueCssPairs == undefined) {
      return log("'.styles(propertyValueCssPairs)' method needs at least 1 parameter, 0 given.")
    }

    if (typeof propertyValueCssPairs !== "object") {
      return log("'.styles(propertyValueCssPairs)', The argument must be an object!")
    }

    const properties = Object.keys(propertyValueCssPairs)

    if (!options.all) {
      if (properties.length > 0) {
        properties.forEach(property => {
          this.activeElems.style[property] = propertyValueCssPairs[property]
        })
      }
    } else {
      this.activeElems.forEach(elem => {
        if (properties.length > 0) {
          properties.forEach(property => {
            elem.style[property] = propertyValueCssPairs[property]
          })
        }
      })
    }

    return this
  }

  // FOR VISIBILITY
  hide() {
    if (!options.all) {
      this.activeElems.style.visibility = "hidden"
      this.activeElems.style.pointerEvents = "none"
      this.activeElems.style.opacity = "0"
    } else {
      this.activeElems.forEach(elem => {
        elem.style.visibility = "hidden"
        elem.style.pointerEvents = "none"
        elem.style.opacity = "0"
      })
    }

    return this
  }

  show() {
    if (!options.all) {
      this.activeElems.style.visibility = "visible"
      this.activeElems.style.pointerEvents = "all"
      this.activeElems.style.opacity = "1"
    } else {
      this.activeElems.forEach(elem => {
        elem.style.visibility = "visible"
        elem.style.pointerEvents = "all"
        elem.style.opacity = "1"
      })
    }

    return this
  }
}

function log(message = "", type = 0) {
  let styles = "font-size:1.2rem; padding: 3rem; "
  let title = ""

  if (type === LOG.error) {
    title = "Error"
    styles += "color:white;background-color:red; "
  }

  if (type === LOG.warning) {
    title = "Warning"
    styles += "color:#3d3d3d;background-color:yellow; "
  }

  console.log(`%c${title}: ${message}`, styles)

  throw new Error("")
}

function isUndefined(value) {
  if (value === undefined) { return true }
  return false
}

function isNull(value) {
  if (value === null) { return true }
  return false
}

function isEmptyOpbject(object) {
  if (typeof object !== "object") return true

  // Object.keys(obj).length <= 0
  // Object.entries(obj).length <= 0

  if (JSON.stringify(obj) === JSON.stringify({})) {
    return true
  }
  return false
}

function isEmptyString(string) {
  if (typeof string !== "string") return true

  if (string === "") {
    return true
  }
  return false
}

function getElements(selector = "") {
  if (isNull(selector)) return

  if (isEmptyString(selector)) {
    return log("'_()', Selector must be given!", LOG.error)
  }

  if (isNull(document.querySelector(selector))) {
    return log(`'_()', The results of selector '${selector}' not found!`, LOG.error)
  }

  if (options.all) {
    collection = new _(document.querySelectorAll(cssSelector))
  } else {
    collection = new _(document.querySelector(cssSelector))
  }
}

function runCallback() {
  if (callback !== null) {
    callback()
  }
}

function prepareUp(arg, opt = null) {

  if (isUndefined(arg)) {
    return log(`'_()' function needs at least 1 parameter, 0 given.`, LOG.error)
  }

  if (!isNull(opt) && !isEmptyOpbject(opt)) {
    options.all = opt.all ? opt.all : options.all
  }

  if (typeof arg === "string") {
    if (!arg) {
      return log("'_()', Selector must be given!", LOG.error)
    }
    cssSelector = arg
  }

  if (typeof arg === "function") {
    callback = arg
  }
}

function solve() {
  if (isNull(cssSelector)) return

  getElements(cssSelector)
  return collection
}


export default (arg, opt = null) => {
  prepareUp(arg, opt)
  return solve()
}

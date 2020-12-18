/**
 * @package _http
 * 
 * Handle request from client
 * 
 * @author Rully Ihza Mahendra <rullyihza00@gmail.com>
 * @license MIT
 */

/**
 * Break program and send a log message
 * 
 * @param message string
 * @param type int
 * @returns Error
 */
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

/**
 * Check a value is undefined
 * 
 * @param value any
 * @returns boolean
 */
function isUndefined(value) {
  if (value === undefined) { return true }
  return false
}

/**
 * Check if value is null
 * 
 * @param value any
 * @returns boolean
 */
function isNull(value) {
  if (value === null) { return true }
  return false
}

/**
 * Check is object empty
 * 
 * @param object object
 * @returns boolean
 */
function isEmptyObject(object) {
  if (typeof object !== "object") return true

  // Object.keys(obj).length <= 0
  // Object.entries(obj).length <= 0

  if (JSON.stringify(object) === JSON.stringify({})) {
    return true
  }
  return false
}

/**
 * Check if string is empty
 * 
 * @param string string
 * @returns boolean
 */
function isEmptyString(string) {
  if (typeof string !== "string") return true

  if (string === "") {
    return true
  }
  return false
}

/**
 * Validate params
 * 
 * @param url string
 * @param opt object
 */
function processParams(url, opt) {
  if (isUndefined(url)) return log("'.send(url, opt)' method needs at least 1 parameter, 0 given.")
  if (typeof url !== "string") return log("'.send(url, opt)' The argument 'url' must be a string!")
  if (isEmptyString(url)) return log("'.send(url, opt)' The argument 'url' can not be an empty string!")

  if (!isNull(opt) && (typeof opt !== "object")) return log("'.send(url, opt)' The second argument 'opt' must be an object!")
  if (isEmptyObject(opt)) return log("'.send(url, opt)' The second argument 'opt' can not be an empty object!")

  const keys = Object.keys(opt)

  if (keys.length <= 0) return

  keys.forEach(key => {
    options[key] = opt[key]
  })
}


/**
 * MAIN FUNCTIONALITY
 */
const methods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
}

const options = {
  headers: {
    'Content-Type': 'application/json'
  },
  method: methods.GET,
  body: null
}

const LOG = {
  error: 0,
  warning: 1
}

/**
 * Send the request
 * 
 * @param url string
 * @param opt object
 * @returns response Promise
 */
function send(url, opt) {
  console.log(options)
}

/**
 * Handler for all the requests
 * 
 * @param url string
 * @param opt object
 * @returns response Promise
 */
const _ = (url, opt = null) => {
  processParams(url, opt)
  return send(url, opt)
}

export default _

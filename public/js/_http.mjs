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
function isEmptyOpbject(object) {
  if (typeof object !== "object") return true

  // Object.keys(obj).length <= 0
  // Object.entries(obj).length <= 0

  if (JSON.stringify(obj) === JSON.stringify({})) {
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
function checkParams(url, opt) {
  if (isUndefined(url)) return log("'.send(url)' method needs at least 1 parameter, 0 given.")
  if (typeof url !== "string") return log("'.send(url)' The argument must be a string!")
  if (isEmptyString(url)) return log("'.send(url)' The argument can not be an empty string!")
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
function send(url, opt = null) {
  // 
}
const _ = (url, opt) => {
  checkParams(url, opt)
}

export default _

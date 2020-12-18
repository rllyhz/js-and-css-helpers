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

async function send(url, data, method, waiting = false) {
  // GET METHOD
  if (method == methods.GET) {
    if (waiting) {
      return await (await fetch(url)).json()
    } else {
      return fetch(url)
    }
  }

  // POST METHOD
  if (method == methods.POST) {
    // 
    if (waiting) {
      return await (await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: methods.POST,
        body: JSON.stringify(data)
      })).json()
      // 
    } else {
      return fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: methods.POST,
        body: JSON.stringify(data)
      })
      // 
    }
  }

  // PUT METHOD
  if (method == methods.PUT) {
    // 
    if (waiting) {
      return await (await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: methods.PUT
      })).json()
      // 
    } else {
      return fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: methods.PUT
      })
      // 
    }
  }

  // DELETE METHOD
  if (method == methods.DELETE) {
    // 
    if (waiting) {
      return await (await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: methods.DELETE
      })).json()
      // 
    } else {
      return fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: methods.DELETE
      })
      // 
    }
  }
}

function getMethod(url, waiting = false) {
  if (url === undefined) {
    return log("'.get(url, waiting)', function needs at least 1 arguments, 0 given.", LOG.error)
  }
  if (typeof url !== "string") {
    return log("'.get(url, waiting)', The first argument 'url' must be a string!", LOG.error)
  }
  if (url === "") {
    return log("'.get(url, waiting)', The first argument 'url' can not be an empty string!", LOG.error)
  }

  if (waiting) {
    return send(url, null, methods.GET, waiting)
  } else {
    return send(url, null, methods.GET, false)
  }
}

function postMethod(url, data, waiting = false) {
  if (url === undefined) {
    return log("'.post(url, data, waiting)', function needs at least 2 arguments, 0 given.", LOG.error)
  }
  if (typeof url !== "string") {
    return log("'.post(url, data, waiting)', The first argument 'url' must be a string!", LOG.error)
  }
  if (url === "") {
    return log("'.post(url, data, waiting)', The first argument 'url' can not be an empty string!", LOG.error)
  }

  if (data === undefined) {
    return log("'.post(url, data, waiting)', function needs at least 2 arguments, 1 given.", LOG.error)
  }
  if (typeof data !== "object") {
    return log("'.post(url, data, waiting)', The second argument 'data' must be an object!", LOG.error)
  }
  // check is data empty

  if (waiting) {
    return send(url, data, methods.POST, waiting)
  } else {
    return send(url, data, methods.POST, false)
  }
}

function putMethod(url, data) {
  // 
}
function deleteMethod(url, data) {
  // 
}

export default {
  get: getMethod,
  post: postMethod,
  put: putMethod,
  delete: deleteMethod
}
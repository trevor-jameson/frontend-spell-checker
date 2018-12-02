// Login user, create user, and logout user do not require JWTs.
export default class Adapter {
  constructor(backDomain, frontDomain) {
    this.BACKEND_URL = backDomain
    this.FRONTEND_URL = frontDomain
  }

  // Generic get fetch for use with any endpoint
  getAll(endpoint) {
    return fetch(`${this.BACKEND_URL}/${endpoint}`, {
      method: "GET",
      headers: {
        'Authorization': window.sessionStorage.getItem('jwt'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
  }

  loginUser(body) {
    return fetch(`${this.BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw res
        }
      })
    }

    logoutUser() {
      // The backend has no responsibility for logging out users while
      // using a JWT schema
      window.sessionStorage.removeItem('jwt')
      window.location.href = ''
    }

    createUser(body) {
      return fetch(`${this.BACKEND_URL}/create-user`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            throw res
          }
        })
      }
}

// Set the (backend's, frontend's) current url here
export const adapter = new Adapter('http://localhost:3001', 'http://localhost:3000')

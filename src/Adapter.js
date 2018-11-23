// Login user, create user, and logout user do not require JWTs.
export default class Adapter {
  constructor(domain) {
    this.BACKEND_URL = domain
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
      // The backend has no responsibility for logging out users
      window.sessionStorage.removeItem('jwt')
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

// Set the backend's current url here
export const adapter = new Adapter('http://localhost:3001')

// Login user, create user, and logout user do not require JWTs.
class Adapter {
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

  post(endpoint, body) {
    return fetch(`${this.BACKEND_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        'Authorization': window.sessionStorage.getItem('jwt'),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
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
      .then(userData => {
        window.sessionStorage.setItem('jwt', userData['jwt'])

        // TODO: Set the user attributes in Redux instead?
        window.sessionStorage.setItem('username', userData.user.username)
        window.sessionStorage.setItem('firstname', userData.user.firstname)
        window.sessionStorage.setItem('pic', userData.user.pic)

        // redirect to '/homepage'
        window.location.href = adapter.FRONTEND_URL + '/spells'
      })
    }

    logoutUser() {
      // The backend has no responsibility for logging out users while
      // using a JWT schema
      window.sessionStorage.removeItem('jwt')
      window.location.href = '/welcome'
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
        .then(json => {
          window.sessionStorage.setItem('jwt', json['jwt'])

          // TODO: Set the user attributes in Redux instead
          window.sessionStorage.setItem('user', JSON.stringify(json['user']))

          // redirect to '/spells'
          window.location.href = adapter.FRONTEND_URL + '/spells'
        })
      }
}

// Set the (backend's, frontend's) current url here
const adapter = new Adapter('http://localhost:3001/', 'http://localhost:3000/')

export default adapter

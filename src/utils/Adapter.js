// Login user, create user, and logout user do not require JWTs.
class Adapter {
    constructor() {
      // Sets url env vars to Adapter scope
        this.BACKEND_URL = process.env.REACT_APP_BACKEND_URL
        this.FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL
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
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    // Conditional addition of auth token if not logging in or creating user
    if ((endpoint !== 'login') && (endpoint !== 'signup')) {headers.Authorization = window.sessionStorage.getItem('jwt')}
    return fetch(`${this.BACKEND_URL}/${endpoint}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`)
      }
      return res.json()})
  }

  loginUser(body) {
    return this.post('login', body)
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
      return this.post('signup', body)
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
const adapter = new Adapter()

export default adapter

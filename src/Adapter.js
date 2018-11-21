export default class Adapter {
  constructor(domain) {
    this.BACKEND_URL = domain
  }

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
}

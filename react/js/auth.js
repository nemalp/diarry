const ID_TOKEN_KEY = 'jwt-auth'

class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser (token) {
    if (window.localStorage) {
      localStorage.setItem(ID_TOKEN_KEY, token)
    }
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated () {
    if (window.localStorage) {
      return localStorage.getItem(ID_TOKEN_KEY) !== null
    }
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser () {
    if (window.localStorage) {
      localStorage.removeItem(ID_TOKEN_KEY)
    }
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */
  static getToken () {
    if (window.localStorage) {
      return localStorage.getItem(ID_TOKEN_KEY)
    }
  }
}

export default Auth

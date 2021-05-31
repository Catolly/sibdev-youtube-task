const ID_TOKEN_KEY = "id_token"

export function getToken() {
  const token = localStorage.getItem(ID_TOKEN_KEY)
  if (token && token !== 'undefined') 
    return JSON.parse(token)
  else 
    return null
}

export function saveToken(token) {
  localStorage.setItem(ID_TOKEN_KEY, JSON.stringify(token))
}

export function destroyToken() {
  localStorage.removeItem(ID_TOKEN_KEY)
}

export default { getToken, saveToken, destroyToken }

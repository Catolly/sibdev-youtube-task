const ID_USER_KEY = "id_user"

export function getUser() {
  const user = localStorage.getItem(ID_USER_KEY)
  if (user && user !== 'undefined') 
    return JSON.parse(user)
  else 
    return null
}

export function saveUser(user) {
  localStorage.setItem(ID_USER_KEY, JSON.stringify(user))
}

export function destroyUser() {
  localStorage.removeItem(ID_USER_KEY)
}

export default { getUser, saveUser, destroyUser }

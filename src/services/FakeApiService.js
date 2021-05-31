import users from './users.json'  

export function login(credentials) {
  const user = users.find(user => 
    user.login === credentials.login &&
    user.password === credentials.password
  )
  if (!user) throw new Error('401 invalid credentials')
  return generateToken(user)
}

function generateToken(user) {
  return {
    id: user.id,
    login: user.login,
    token: 'fake-jwt-token',
  }
}

export default { login }

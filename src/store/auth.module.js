import JwtService from '@/services/JwtService'
import UserService from '@/services/UserService'
import FakeApiService from '@/services/FakeApiService'
import {
  LOGIN,
  LOGOUT,
} from './actions.type'
import {
  PURGE_AUTH,
  SET_AUTH,
} from './mutations.type'

const state = () => ({
  user: {},
  isAuthenticated: !!JwtService.getToken(),
})

const getters = {
  currentUser(state) {
    return state.user
  },
  isAuthenticated(state) {
    return state.isAuthenticated
  },
}

const actions = {
  [LOGIN](context, credentials) {
    const data = FakeApiService.login(credentials)
    context.commit(SET_AUTH, data)
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH)
  },
}

const mutations = {
  [SET_AUTH](state, {token, ...user}) {
    state.isAuthenticated = true
    state.user = user

    UserService.saveUser(user)
    JwtService.saveToken(token)
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false
    state.user = {}

    UserService.destroyUser()
    JwtService.destroyToken()
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

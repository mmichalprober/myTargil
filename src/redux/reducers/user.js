import produce from 'immer'
import createReducer from './reducerUtills'
const intioanalState = {
    users:
      { name: '', email: '' ,token:''}
  }
  const users = {
    setUserEmail(state, action) {
      state.users.email=action.payload
    },
    setUserName(state, action) {
      state.users.name=action.payload
    },
    setToken(state, action) {
      state.users.token=action.payload
    }
  }
  export default produce((state, action) => createReducer(state, action, users), intioanalState);
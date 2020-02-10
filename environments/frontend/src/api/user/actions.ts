import Axios from 'axios'
import {
  AnyPromise,
  ZustandActions,
} from 'Utils/types'
import delay from 'Utils/delay'
import { UserState } from './state'
import UserTypes from './types'

export interface UserActions<S = UserState> {
  setUser: (user: S) => (void | Promise<void>)
  fetchUser: AnyPromise
}

const userActions: ZustandActions<UserState, UserActions> = set => ({
  fetchUser: async () => {
    const { data } = await Axios.get<UserState>('http://localhost:4000/user')
    set(state => {
      state.email = data.email
      state.id = data.id
      state.name = data.name
    }, UserTypes.FETCH_USER)
  },
  setUser: async user => {
    await delay(500)
    set(state => {
      state.email = user.email
      state.name = user.name
      state.id = user.id
    }, UserTypes.SET_USER)
  },
})

export default userActions

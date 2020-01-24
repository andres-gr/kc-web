import Axios from 'axios'
import { ZustandActions } from 'Utils/types'
import delay from 'Utils/delay'
import { UserState } from './state'
import {
  FETCH_USER,
  SET_USER,
} from './types'

export interface UserActions<S = Partial<UserState>> {
  setUser: (user: S) => (void | Promise<void>)
  fetchUser: (...args: any) => Promise<void>
}

const userActions: ZustandActions<UserState> = set => ({
  fetchUser: async () => {
    const { data } = await Axios.get<UserState>('http://localhost:4000/user')
    set(state => {
      state.email = data.email
      state.id = data.id
      state.name = data.name
    }, FETCH_USER)
  },
  setUser: async (user: UserState) => {
    await delay(500)
    set(state => {
      state.email = user.email
      state.name = user.name
      state.id = user.id
    }, SET_USER)
  },
})

export default userActions

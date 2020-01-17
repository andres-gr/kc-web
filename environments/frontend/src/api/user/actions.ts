import { immer } from 'Api/middleware'
import userState, { UserState } from './state'

const userImmer = immer(userState)(set => ({
  ...userState,
  setUser: (user: UserState) => set((state: UserState) => {
    state.email = user.email
    state.name = user.name
    state.id = Math.random()
  }, 'Set User'),
}))

export default userImmer

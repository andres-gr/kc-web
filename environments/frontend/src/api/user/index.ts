import create from 'zustand'
import { devtools } from 'zustand/middleware'
import isDev from 'Utils/env'
import { log } from 'Api/middleware'
import userImmer from './actions'
import userState from './state'

const userLog = log(userState)

let userStore

if (isDev) {
  userStore = create(
    devtools(
      userLog(
        userImmer,
      ),
    ),
  )
} else {
  userStore = create(userImmer)
}

const [
  useUserStore,
  userApi,
] = userStore

export {
  userApi,
  useUserStore,
}

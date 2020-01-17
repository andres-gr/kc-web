/* eslint-disable no-console */
import produce from 'immer'
import { State } from 'zustand'
import { ZustandMiddleware } from 'Utils/types'

const log = (S: State): ZustandMiddleware<typeof S> => config => (set, get, api) => config(args => {
  console.log('  applying', args)
  set(args)
  console.log('  new state', get())
}, get, api)

const immer = (S: State): ZustandMiddleware<typeof S> => config => (set, get, api) => config(fn => set(produce(fn)), get, api)

export {
  immer,
  log,
}

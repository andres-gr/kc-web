/* eslint-disable no-console */
import produce from 'immer'
import create, { State } from 'zustand'
import { devtools } from 'zustand/middleware'
import {
  AnyPromise,
  ZustandActions,
  ZustandMiddleware,
} from 'Utils/types'

interface StoreParams<S, A> {
  actions: ZustandActions<S, A>
  name: string
  state: S
}

abstract class ZustandStoreCreator<S extends State, A> {
  constructor (protected params: StoreParams<S, A>) {}

  protected createLog = () => {
    const log: ZustandMiddleware<S> = config => (set, get, api) => config(args => {
      console.log(''.padEnd(80, '-•-'))
      console.log(' old state', get())
      console.log(''.padEnd(80, '  '))
      set(args, 'LOGGER')
      console.log(' new state', get())
      console.log(''.padEnd(80, '-•-'))
      console.log(''.padEnd(80, '  '))
    }, get, api)
    return log
  }

  protected createImmer = () => {
    const immer: ZustandMiddleware<S> = config => (set, get, api) => config((fn, name) => set(produce<AnyPromise>(fn), name), get, api)
    return immer
  }

  public createStore () {
    const {
      actions,
      name,
      state,
    } = this.params
    return create<S & A>(
      devtools(
        this.createImmer()((set, get) => ({
          ...state,
          ...actions(set, get),
        })),
        name,
      ),
    )
  }
}

export default ZustandStoreCreator

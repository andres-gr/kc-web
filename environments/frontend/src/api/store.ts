/* eslint-disable no-console */
import produce from 'immer'
import create, { State } from 'zustand'
import { devtools } from 'zustand/middleware'
import {
  ZustandActions,
  ZustandMiddleware,
} from 'Utils/types'

interface StoreParams<S> {
  actions: ZustandActions<S>
  name: string
  state: S
}

abstract class ZustandStoreCreator<S extends State, A> {
  constructor (protected params: StoreParams<S>) {}

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
    const immer: ZustandMiddleware<S> = config => (set, get, api) => config((fn: (state: S) => void, name) => set(produce(fn), name), get, api)
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

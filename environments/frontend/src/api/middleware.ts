/* eslint-disable no-console */
import produce from 'immer'
import create, { State } from 'zustand'
import { devtools } from 'zustand/middleware'
import {
  ZustandActions,
  ZustandMiddleware,
} from 'Utils/types'
import isDev from 'Utils/env'

abstract class ZustandMiddlewareCreator<S extends State> {
  constructor (
    protected actions: ZustandActions<S>,
    protected state: S,
  ) {}

  protected createLog = () => {
    const log: ZustandMiddleware<S> = config => (set, get, api) => config(args => {
      console.log(' applying', args)
      set(args)
      console.log(' new state', get())
    }, get, api)
    return log
  }

  protected createImmer = () => {
    const immer: ZustandMiddleware<S> = config => (set, get, api) => config((fn: (state: S) => void, name) => set(produce(fn), name), get, api)
    return immer
  }

  public createStore () {
    if (isDev) {
      return create<S>(
        devtools(
          this.createLog()(
            this.createImmer()(set => ({
              ...this.state,
              ...this.actions(set),
            })),
          ),
        ),
      )
    }
    return create<S>(
      devtools(
        this.createImmer()(set => ({
          ...this.state,
          ...this.actions(set),
        })),
      ),
    )
  }
}

export default ZustandMiddlewareCreator

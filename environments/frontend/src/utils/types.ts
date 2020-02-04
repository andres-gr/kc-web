import { ReactNode } from 'react'
import {
  GetState,
  State,
  StoreApi,
} from 'zustand'

export type AnyPromise = (...args: any[]) => (void | Promise<void>)

export interface ChildrenProps {
  children: ReactNode
}

export type ZustandActions<S> = (set: ZustandNamedSet<S>, get: GetState<S>) => ({
  [x: string]: AnyPromise
})

export type ZustandMiddleware<S> = (config: ZustandStateCreator<S>) => ZustandStateCreator<S>

export type ZustandNamedSet<S> = (partial: ((state: S) => any), name: string) => void

export type ZustandStateCreator<S extends State> = (
  set: ZustandNamedSet<S>,
  get: GetState<S>,
  api: StoreApi<S>,
) => S

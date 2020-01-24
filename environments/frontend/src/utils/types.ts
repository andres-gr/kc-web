import { ReactNode } from 'react'
import {
  GetState,
  PartialState,
  State,
  StoreApi,
} from 'zustand'

export interface ChildrenProps {
  children: ReactNode
}

export type ZustandActions<S> = (set: ZustandNamedSet<S>, get: GetState<S>) => ({
  [x: string]: (...args: any) => void
})

export type ZustandMiddleware<S> = (config: ZustandStateCreator<S>) => ZustandStateCreator<S>

export type ZustandNamedSet<S> = (partial: PartialState<S> | ((state: S) => void), name: string) => void

export type ZustandStateCreator<S extends State> = (
  set: ZustandNamedSet<S>,
  get: GetState<S>,
  api: StoreApi<S>,
) => S

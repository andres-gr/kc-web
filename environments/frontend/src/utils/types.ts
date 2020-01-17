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

export type ZustandMiddleware<S> = (config: ZustandStateCreator<S>) => ZustandStateCreator<S>

export type ZustandNamedSet<S> = (partial: PartialState<S>, name?: string) => void

export type ZustandStateCreator<S extends State> = (
  set: ZustandNamedSet<S>,
  get: GetState<S>,
  api: StoreApi<S>,
) => S

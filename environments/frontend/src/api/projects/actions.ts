import Axios from 'axios'
import { ZustandActions } from 'Utils/types'
import delay from 'Utils/delay'
import {
  Project,
  ProjectsState,
} from './state'
import {
  ADD_PROJECT,
  FETCH_PROJECT,
} from './types'

export interface ProjectsActions {
  addProject: (project: Project) => (void | Promise<void>)
  fetchProject: (...args: any) => Promise<void>
}

const projectsActions: ZustandActions<ProjectsState> = set => ({
  addProject: async (project: Project) => {
    await delay(500)
    set(state => void state.projects.push(project), ADD_PROJECT)
  },
  fetchProject: async () => {
    const result = await Axios.get<Project>('http://localhost:4000/project')
    const { data } = result
    set(state => void state.projects.push(data), FETCH_PROJECT)
  },
})

export default projectsActions

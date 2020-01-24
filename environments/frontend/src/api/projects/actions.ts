import Axios from 'axios'
import { ZustandActions } from 'Utils/types'
import delay from 'Utils/delay'
import {
  Project,
  ProjectsState,
} from './state'

export interface ProjectsActions {
  addProject: (project: Project) => (void | Promise<void>)
  fetchProject: (...args: any) => Promise<void>
}

const projectsActions: ZustandActions<ProjectsState> = set => ({
  addProject: async (project: Project) => {
    await delay(500)
    set(state => {
      state.projects.push(project)
    }, 'Add Project')
  },
  fetchProject: async () => {
    const result = await Axios.get<Project>('http://localhost:4000/project')
    const { data } = result
    set(state => void state.projects.push(data))
  },
})

export default projectsActions

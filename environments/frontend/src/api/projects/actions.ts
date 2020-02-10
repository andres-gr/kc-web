import Axios from 'axios'
import {
  AnyPromise,
  ZustandActions,
} from 'Utils/types'
import delay from 'Utils/delay'
import {
  Project,
  ProjectsState,
} from './state'
import ProjectsTypes from './types'

export interface ProjectsActions {
  addProject: (project: Project) => (void | Promise<void>)
  fetchProject: AnyPromise
}

const projectsActions: ZustandActions<ProjectsState, ProjectsActions> = set => ({
  addProject: async project => {
    await delay(500)
    set(state => void state.projects.push(project), ProjectsTypes.ADD_PROJECT)
  },
  fetchProject: async () => {
    const result = await Axios.get<Project>('http://localhost:4000/project')
    const { data } = result
    set(state => void state.projects.push(data), ProjectsTypes.FETCH_PROJECT)
  },
})

export default projectsActions

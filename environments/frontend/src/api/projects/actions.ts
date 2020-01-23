import { ZustandActions } from 'Utils/types'
import delay from 'Utils/delay'
import {
  Project,
  ProjectsState,
} from './state'

export interface ProjectsActions {
  addProject: (project: Project) => void
}

const projectsActions: ZustandActions<ProjectsState> = set => ({
  addProject: async (project: Project) => {
    await delay(500)
    set(state => {
      state.projects.push(project)
    }, 'Add Project')
  },
})

export default projectsActions

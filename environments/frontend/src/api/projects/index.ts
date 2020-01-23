import ZustandStoreCreator from 'Api/store'
import projectsActions, { ProjectsActions } from './actions'
import projectsState, { ProjectsState } from './state'

class ProjectsStore extends ZustandStoreCreator<ProjectsState, ProjectsActions> {
  constructor () {
    super(
      {
        actions : projectsActions,
        name    : 'Projects Store',
        state   : projectsState,
      },
    )
  }
}

const projectsStore = new ProjectsStore()

const [
  useProjectsStore,
  projectsApi,
] = projectsStore.createStore()

export {
  projectsApi,
  useProjectsStore,
}

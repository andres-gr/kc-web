export interface Project {
  id: string
  name: string
  user: string
}

export interface ProjectsState {
  projects: Project[]
}

const projectsState: ProjectsState = {
  projects: [],
}

export default projectsState

export interface Project {
  author: string
  company: string
  id: string
}

export interface ProjectsState {
  projects: Project[]
}

const projectsState: ProjectsState = {
  projects: [],
}

export default projectsState

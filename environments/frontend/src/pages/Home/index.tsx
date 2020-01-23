import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Chance from 'chance'
import { useProjectsStore } from 'Api/projects'

const chance = new Chance()

const Home: FC = () => {
  const projects = useProjectsStore(state => state.projects)

  const addProject = useProjectsStore(state => state.addProject)

  const _handleClick = () => {
    addProject({
      id   : chance.guid({ version: 4 }),
      name : chance.company(),
      user : chance.name(),
    })
  }

  return (
    <div>
      <div>
        <Link
          to="/one"
        >
          One
        </Link>
      </div>
      <span>Home</span>
      <div>
        <button
          type="button"
          onClick={ _handleClick }
        >
          press
        </button>
      </div>
      {
        projects.map(({
          id,
          name,
          user,
        }) => (
          <p key={ id }>
            <span>{ name }</span>
            { ' - ' }
            <span>{ user }</span>
          </p>
        ))
      }
    </div>
  )
}

export default Home

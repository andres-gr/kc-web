import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Chance from 'chance'
import { ChildrenProps } from 'Utils/types'
import { useUserStore } from 'Api/user'

const chance = new Chance()

const Base: FC = ({ children }: ChildrenProps) => {
  const setUser = useUserStore(state => state.setUser)

  const name = useUserStore(state => state.name)

  const email = useUserStore(state => state.email)

  const _handleClick = () => {
    setUser({
      email : chance.email(),
      id    : chance.guid(),
      name  : chance.name(),
    })
  }

  return (
    <div>
      <h1>Base stuff</h1>
      <div>
        <Link
          to="/"
        >
          Home
        </Link>
      </div>
      { children }
      <div>
        <button
          type="button"
          onClick={ _handleClick }
        >
          press
        </button>
      </div>
      <p>{ name }</p>
      <p>{ email }</p>
    </div>
  )
}

export default Base

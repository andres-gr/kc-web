import React, { FC } from 'react'
import { ChildrenProps } from 'Utils/types'
import { Link } from 'react-router-dom'

const Base: FC = ({ children }: ChildrenProps) => (
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
  </div>
)

export default Base

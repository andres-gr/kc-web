import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => (
  <div>
    <div>
      <Link
        to="/one"
      >
        One
      </Link>
    </div>
    <span>Home</span>
  </div>
)

export default Home

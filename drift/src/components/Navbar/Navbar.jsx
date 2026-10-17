import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className="flex items-center justify-between p-4">
     <Link to={"/"}>
     DRIFT
     </Link>
    </nav>
    </>
  )
}

export default Navbar
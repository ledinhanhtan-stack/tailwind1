import React, { FunctionComponent } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'


interface NavbarProps {
}

const Navbar: FunctionComponent<NavbarProps> = (props) => {

  return (
    <div className="w-full flex py-6 justify-between items-center navbar"></div>
  )
}

export default Navbar

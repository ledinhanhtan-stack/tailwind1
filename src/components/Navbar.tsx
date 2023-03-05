import React, { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import classNames from 'classnames'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="flex items-center justify-between w-full py-6 navbar">
      <a href="#">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      </a>

      <ul className="items-center justify-end flex-1 hidden list-none sm:flex gap-x-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-white text-[16px]"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-end flex-1 sm:hidden">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        {toggle && (
          <div className="flex p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar items-center">
            <ul
              className={classNames(
                toggle ? 'flex' : 'hidden',
                'flex-col items-center justify-end flex-1 list-none sm:flex gap-y-4'
              )}
            >
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className="font-poppins font-normal cursor-pointer text-white text-[16px]"
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

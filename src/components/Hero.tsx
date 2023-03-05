import React, { startTransition } from 'react'

import { discount, robot } from '../assets'

interface HeroProps {}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <section id="home" className="flex flex-col md:flex-row padding-y">
      <div className="flex flex-col items-start justify-center flex-1 px-6 xl:px-0 sm:px-16">
        <div className="flex flex-row items-center py-1.5 px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-8 h-8" />
          <p className="ml-2 paragraph test-white">
            <span className="text-white">20%</span>
            <span> Discount For</span>
            <span className="text-white"> 1 Month</span>
            <span> Account</span>
          </p>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <h1>The Next Payment Method.</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero

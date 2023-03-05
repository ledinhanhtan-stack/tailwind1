import React from 'react'
import classNames from 'classnames'

import './index.css'

import {
  Navbar,
  Stats,
  Hero,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from './components'

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="padding-x flex-center">
        <div className="box-width">
          <Navbar />
        </div>
      </div>

      <div className="text-white bg-primary flex-start">
        <div className="box-width">
          <Hero />
        </div>
      </div>

      <div className="bg-primary padding-x flex-start">
        <div className="box-width">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App

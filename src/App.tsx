import React from 'react'
import classNames from 'classnames'

import './index.css'
import styles from './styles'

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
  Footer
} from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={classNames(styles.paddingX, styles.flexCenter)}>
        <div className={classNames(styles.boxWidth)}>
          <Navbar />
        </div>
      </div>

      <div className={classNames('bg-primary', styles.flexStart)}>
        <div className={classNames(styles.boxWidth)}>
          <Hero />
        </div>
      </div>

      <div className={classNames('bg-primary', styles.paddingX, styles.flexStart)}>
        <div className={classNames(styles.boxWidth)}>
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
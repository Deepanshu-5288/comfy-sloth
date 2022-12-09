import React from 'react'
import { Hero, FeaturedProducts, Services, Contact } from '../components';

function HomePage() {
  return (
    <main>
        <Hero/>
        <FeaturedProducts />
        <Services/>
        <Contact />
    </main>
  )
}

export default HomePage
import React from 'react'
import Hero from './Hero/Index'
import Theme from './Theme/Theme'
import Speakers from './Speakers/Index' 
import Programme from './Programme/Index'
import Info from './Info/Index'
import Sponsors from './Sponsors/index'
import Direction from './Direction/index'

const Home = () => {
  return (
    <>
        <main>
            {/* hero */}
            <Hero />

            {/* why attend */}
            <Theme />

            {/* speakers */}
            <Speakers />

            {/* programme */}
            <Programme />

            {/* Info */}
            <Info />

            {/* sponsors */}
            <Sponsors />

            {/* Direction */}
            <Direction />
        </main>
    </>
  )
}

export default Home
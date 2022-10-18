import React from 'react'
import Hero from './Hero/Index'
import Theme from './Theme/Theme'
import Speakers from './Speakers/Index' 
import Programme from './Programme/Index'

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
        </main>
    </>
  )
}

export default Home
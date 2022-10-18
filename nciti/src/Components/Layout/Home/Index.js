import React from 'react'
import Hero from './Hero/Index'
import Theme from './Theme/Theme'
import Speakers from './Speakers/Index' 

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
        </main>
    </>
  )
}

export default Home
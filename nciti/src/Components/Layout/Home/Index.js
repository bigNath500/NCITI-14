import React from 'react'
import Hero from './Hero/Index'
import Theme from './Theme/Theme'

const Home = () => {
  return (
    <>
        <main>
            {/* hero */}
            <Hero />

            {/* why attend */}
            <Theme />
        </main>
    </>
  )
}

export default Home
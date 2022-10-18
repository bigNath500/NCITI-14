import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Speakers from '../Home/Speakers/Index'

const Index = () => {
  return (
    <>
        <main>
            <section className='speaker_banner'>
                <Container>
                    <h1 className='text-white fw-bold'>Speakers</h1>
                    <h6 className='text-white'><Link to={'/'} className="text-decoration-none text-white">Home</Link> / Speakers</h6>
                </Container>
            </section>

            <Speakers />
        </main>
    </>
  )
}

export default Index
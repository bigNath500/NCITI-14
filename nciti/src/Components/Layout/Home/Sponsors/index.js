import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <>
        <section className='sponsors'>
            <Container>
                <h6 className='text-center text-white'>Partners</h6>
                <h1 className='text-center text-white fw-bold'>Our Sponsors</h1>

                <div className="mt-5 text-center">
                    <Link to={'/'}>
                        <Button variant='success'>Become A Sponsor</Button>
                    </Link>
                </div>
            </Container>
        </section>
    </>
  )
}

export default index
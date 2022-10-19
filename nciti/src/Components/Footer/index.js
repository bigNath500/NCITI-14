import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <>
        <footer className='bg-dark'>
          <Container className='text-center text-muted'>
            <div>
            <Link className='text-muted text-decoration-none' to={'/'}>
              About
            </Link>
            <span className='ms-2 me-2'>/</span>
            <Link className='text-muted text-decoration-none' to={'/'}>
              News
            </Link>
            <span className='ms-2 me-2'>/</span>
            <Link className='text-muted text-decoration-none' to={'/'}>
              Contact
            </Link>
            <span className='ms-2 me-2'>/</span>
            <Link className='text-muted text-decoration-none' to={'/'}>
              Registration
            </Link>
            <span className='ms-2 me-2'>/</span>
            <Link className='text-muted text-decoration-none' to={'/'}>
              Venue
            </Link>
            </div>
            <br /> <br />

            &copy; 2022, NCITI. All rights reserved
          </Container>
        </footer>
    </>
  )
}

export default index
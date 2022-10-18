import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Index = () => {
  return (
    <>
        <section className='programme bg-light'>
            <Container>
                <h6 className='text-center text-muted'>Schedule</h6>
                <h1 className='text-center text-primary fw-bold text-capitalize'>Programmme of events</h1>

                <div className='d-flex mt-4 justify-content-center align-items-center'>
                    <div className="bg-white text-center shadow-sm pt-5 pb-5 w-70 p-5 rounded rounded-2">
                        <h3 className='text-dark text-center fw-bold'>
                            Download Programme.
                        </h3>

                        <p className="mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi, eaque repudiandae corporis veritatis porro deleniti, at expedita ipsa sunt veniam. Totam nulla unde blanditiis doloremque quisquam labore nisi accusamus.
                        </p>

                        <div className="mt-3 text-center">
                            <a href="./programme.pdf" download={"Programme"} className='text-decoration-none btn btn-success'>
                                Download Programme
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Index
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Programme1 from '../../../Assets/Programme/preveiw_1.png'
import Programme2 from '../../../Assets/Programme/preveiw_2.png'
import ProgrammePdf from '../../../Assets/Programme/programme.pdf'

const Index = () => {
  return (
    <>
        <section className='programme bg-light'>
            <Container>
                <h6 className='text-center text-muted'>Schedule</h6>
                <h1 className='text-center text-primary fw-bold text-capitalize'>Programmme of events</h1>

                <div className='d-flex mt-4 justify-content-center align-items-center'>
                    <div className="bg-white text-center shadow-sm pt-5 pb-5 p-5 rounded rounded-2">
                        <h3 className='text-dark text-center fw-bold'>
                            Programme Review.
                        </h3>

                        <Row>
                            <Col md={6}>
                                <div>
                                    <img src={Programme1} width="100%" alt="nciti-14 programe" />
                                </div>
                            </Col>

                            <Col md={6}>
                                <div>
                                    <img src={Programme2} width="100%" alt="nciti-14 programe" />
                                </div>
                            </Col>
                        </Row>

                        <div className="mt-3 text-center">
                            <h6 className='text-muted'>Download the PDF file of the programme, click the button below.</h6>

                            <a href={ProgrammePdf} download={"Programme"} className='text-decoration-none'>
                                <Button variant='success'>Download Programme</Button>
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
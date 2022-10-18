import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Theme = () => {
  return (
    <>
        <section className='theme bg-light'>
            <Container>
                <Row>
                    <Col md={4} className="d-flex align-items-center">
                        <div>
                            <h6 className='text-muted text-uppercase'>Why Attend NCITI-14</h6>
                            <h1 className='fw-bold text-primary'>Theme:</h1>

                            <div className="mt-3 ps-3 border-start border-danger border-3">
                                <h5 className='text-dark fw-bold'>
                                    Micro, Small and Medium Enterprises Development in Nigeria: The Role of Stakeholders
                                </h5>

                            </div>
                            <div className="mt-4">
                                <Link to={'/'}>
                                    <Button variant='success'>More About NCITI</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={8}>
                        <div>
                            <Row>
                                <Col md={6}>
                                    <div className="bg-white shadow p-5 ps-4 pe-4 rounded mt-3 rounded-2">
                                        <h4 className="fw-bold">Great Outcomes</h4>

                                        <p className="mt-2 text-muted">
                                            Access to Event Technical Sessions, Communiques and Reports
                                        </p>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="bg-white shadow p-5 ps-4 pe-4 rounded mt-3 rounded-2">
                                        <h4 className="fw-bold">Great Speakers</h4>

                                        <p className="mt-2 text-muted">
                                            Experience NCITI live and listen to great speeches
                                        </p>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="bg-white shadow p-5 ps-4 pe-4 rounded mt-3 rounded-2">
                                        <h4 className="fw-bold">Insightful Papers</h4>

                                        <p className="mt-2 text-muted">
                                            Presentations from Industry experts and Key Stakeholders.
                                        </p>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="bg-white shadow p-5 ps-4 pe-4 rounded mt-3 rounded-2">
                                        <h4 className="fw-bold">Have Fun</h4>

                                        <p className="mt-2 text-muted">
                                            Tours to places of interest and end of event Gala Night/Dinner.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Theme
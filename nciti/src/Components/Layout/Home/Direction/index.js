import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import * as hiIcons from 'react-icons/hi'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <>
        <section className='direction bg-white'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div>
                            <h6 className='text-muted'>Reach Us</h6>
                            <h3 className='text-primary fw-bold'>Get Direction to the NCITI Event Hall</h3>

                            <div className="mt-4">
                                <h5 className='text-danger fw-bold'>Event Details</h5>
                                
                                <article className='mt-2'>
                                    <p className='text-muted'>
                                        <b className="text-dark">Venue:</b> Ekiti State Civic and Convention Centre, Fajuyi, Ado-Ekiti.
                                    </p>

                                    <p className='text-muted mt-2'>
                                        <b className="text-dark">Conference Contacts:</b>

                                        <div className="mt-3">
                                            <Row>
                                                <Col md={6}>
                                                    <div className='d-flex align-items-center fs-5'>
                                                        <hiIcons.HiOutlineUser /> <span className='ms-2 text-dark'>Baba Gana Alkali</span>
                                                    </div>

                                                    <div className='d-flex mt-2 align-items-center small'>
                                                        <hiIcons.HiOutlinePhone /> <a href="tel: +234 08033140873" className='text-danger text-decoration-none ms-2'>08033140873</a>
                                                    </div>

                                                    <div className='d-flex mt-2 align-items-center small'>
                                                        <hiIcons.HiOutlineMail /> <a href="mailto: alkalibg@yahoo.com" className='text-danger text-decoration-none ms-2'>alkalibg@yahoo.com</a>
                                                    </div>
                                                </Col>

                                                <Col md={6}>
                                                    <div className='d-flex align-items-center fs-5'>
                                                        <hiIcons.HiOutlineUser /> <span className='ms-2 text-dark'>Mimi Abu</span>
                                                    </div>

                                                    <div className='d-flex mt-2 align-items-center small'>
                                                        <hiIcons.HiOutlinePhone /> <a href="tel: +234 07087956182" className='text-danger text-decoration-none ms-2'>07087956182</a>
                                                    </div>

                                                    <div className='d-flex mt-2 align-items-center small'>
                                                        <hiIcons.HiOutlineMail /> <a href="mailto: mimi-mojisola.abu@fmiti.gov.ng" className='text-danger text-decoration-none ms-2'>mimi-mojisola.abu@fmiti.gov.ng</a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </p>
                                </article>
                            </div>

                            <div className="mt-2">
                                <Row>
                                    <Col md={6}>
                                        <h5 className='text-danger fw-bold'>Hotels</h5>

                                        For Hotels and Reservation, <Link to={'/'} className='text-decoration-none text-danger'>Click here</Link>
                                    </Col>

                                    <Col md={6}>
                                        <h5 className='text-danger fw-bold'>Flights to and fro Abuja</h5>

                                        For Flight information, <Link to={'/'} className='text-decoration-none text-danger'>Click here</Link>
                                    </Col>
                                </Row>
                            </div>

                            <div className="mt-3 d-flex">
                                <Link to={'/'} className="text-decoration-none">
                                    <Button variant='success'>View Hotels Info</Button>
                                </Link>

                                <Link to={'/'} className="text-decoration-none ms-3">
                                    <Button variant='success'>View Flights Info</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className='mt-3'>
                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31636.124856966908!2d5.21446!3d7.627564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe30fa9fb40191b6e!2sEkiti%20State%20Civic%20Centre!5e0!3m2!1sen!2sus!4v1666090182760!5m2!1sen!2sus" width="100%" height="450" style={{border: "none"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default index
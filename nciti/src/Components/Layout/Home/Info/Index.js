import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import newsImg from '../../../Assets/Images/NewsImg.jpg'
import * as hiIcons from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <>
        <section className='info_container bg-white'>
            <Container>
                <h6 className='text-center text-muted'>
                    Info Upadte
                </h6>

                <h1 className='text-primary text-center fw-bold'>
                    Latest News
                </h1>

                <div className='bg-white shadow-sm p-0'>
                    <Row className='mt-4'>
                        <Col md={4}>
                            <div>
                                <img src={newsImg} height={'220'} alt="NCITI news post" width={"100%"} />
                            </div>
                        </Col>

                        <Col md={8}>
                            <div className="p-3">
                                <div className="d-flex">
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <hiIcons.HiOutlineUser className='text-danger me-1 fs-5' /> <span className='text-dark'>CHUKS</span>
                                    </div>

                                    <div className='d-flex ms-4 justify-content-center align-items-center'>
                                        <hiIcons.HiOutlineCalendar className='text-danger me-1 fs-5' /> <span className='text-dark'> DECEMBER 05,2019</span>
                                    </div>
                                </div>

                                <h3 className='mt-2'>
                                    FG Committed to the 
                                </h3>

                                <p className="mt-1 text-muted">
                                    The Permanent Secretary, Federal Ministry of Industry, Trade and Investment, Mr. Edet Sunday Akpan has said that the present administration was committed to the development  and  growth of the Micro...
                                </p>

                                <div>
                                    <Link to={'/'} className="text-decoration-none text-danger d-flex align-items-center">
                                        Read More <hiIcons.HiOutlineArrowRight className='ms-1' />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Index
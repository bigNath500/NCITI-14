import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { speakersDB } from './SpeakerData/SpeakersData'

const Index = () => {
  return (
    <>
        <section className='speakers'>
            <Container>
                <h6 className="text-muted text-center text-uppercase">Featuring</h6>
                <h1 className="text-primary fw-bold text-center">Event Speakers</h1>

                <Row className="mt-3">
                    { speakersDB.map((data, index) => {
                        return (
                            <Col md={4} key={index}>
                                <div className='mt-3'>
                                    <div className="img_box">
                                        <img src={data.img} alt={data.title} width="100%" />
                                    </div>

                                    <div className="mt-3 text-center">
                                        <h4 className='text-dark fw-bold'>
                                            {data.name}
                                        </h4>

                                        <h6 className='fw-normal text-muted'>
                                            {data.title}
                                        </h6>
                                    </div>
                                </div>
                            </Col>
                        )
                    }) }
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Index
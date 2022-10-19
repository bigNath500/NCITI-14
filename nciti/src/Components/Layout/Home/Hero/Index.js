// import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState, useEffect } from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Clock from '../../../Clock/Clock'
import zoomImg from '../../../Assets/Images/zoom.png'

const Index = () => {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const setTimer = ()=> {
        const countDownDate = new Date("November 22, 2022 ").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24*60*60*1000));
            const Hours = Math.floor(distance % (24*60*60*1000)/(1000*60*60));
            const Minutes = Math.floor(distance % (60*60*1000)/(1000*60));
            const Seconds = Math.floor(distance % (60*1000)/1000);

            if(distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                // update the time
                setTimerDays(days);
                setTimerHours(Hours);
                setTimerMinutes(Minutes);
                setTimerSeconds(Seconds);
            }
        });
    }

    useEffect(() => {
        setTimer();
    })

  return (
    <>
        <section className='hero'>
            <Container>
                <div className='hero_text'>
                    <Col md={9}>
                        <article className='text-white'>
                            <h6>22nd – 26th Nov., 2021 – Ekiti State Civic and Convention Centre, Fajuyi, Ado-Ekiti.</h6>
                            <h1>14<sup>th</sup> National Council on Industry, Trade & Investment.</h1>
                        </article>
                        
                        <Clock 
                            timerDays={timerDays} 
                            timerHours={timerHours} 
                            timerMinutes={timerMinutes} 
                            timerSeconds={timerSeconds} 
                        />

                        <div className='mt-4'>
                            <Link to={'/'}>
                                <Button variant='success'>Register Now</Button>
                            </Link>
                        </div>
                    </Col>
                </div>

                {/* attend on zoom card */}

                <div className='zoom_card shadow-sm bg-white col-md-3 p-4 text-center'>
                    <img src={zoomImg} width="80" alt="zoom brand" />

                    <div className='mt-2'>
                        <h5>Can't come to Ekiti?</h5>
                        <h6 className='fw-light text-muted'>Join Us Via Zoom</h6>
                        <a href='/'>
                            <Button variant='primary'>Click Here</Button>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Index
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Brand from '../Assets/Images/fmiti-logo.png'

function BasicExample() {
	const [bgBar, setBgBar] = useState(false);


	const changeBgColor = () => {
		if(window.scrollY >= 20) {
			setBgBar(true);
		} else {
			setBgBar(false);
		}
	}

	useEffect(() => {
		changeBgColor();
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBgColor);
	})

  return (
    <Navbar bg={bgBar ? "white" : "transparent"} className={bgBar ? 'fixed-top pt-3 pb-3 navbar-dark shadow' : 'fixed-top pt-3 pb-3 '} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
					<img src={Brand} width="200" alt="NCITI-LOGO" />
				</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link me-2' to={"/"}>
							Home
						</Link>
            <NavDropdown className='me-2' title="NCITI 2022" id="basic-nav-dropdown">
              <Link className='dropdown-item' to={'/'}>
								About
							</Link>
							<Link className='dropdown-item' to={'/speakers'}>
								Speakers
							</Link>
							<Link className='dropdown-item' to={'/'}>
								Programme
							</Link>
							<Link className='dropdown-item' to={'/'}>
								Papers & Presentation
							</Link>
            </NavDropdown>

						<NavDropdown className='me-2' title="Media" id="basic-nav-dropdown">
              <Link className='dropdown-item' to={'/news'}>
								News
							</Link>
							<Link className='dropdown-item' to={'/'}>
								Gallary
							</Link>
            </NavDropdown>

						<NavDropdown className='me-2' title="Logisitcs" id="basic-nav-dropdown">
              <Link className='dropdown-item' to={'/'}>
								About
							</Link>
							<Link className='dropdown-item' to={'/'}>
								Speakers
							</Link>
							<Link className='dropdown-item' to={'/'}>
								Programme
							</Link>
							<Link className='dropdown-item' to={'/'}>
								Papers & Presentation
							</Link>

            </NavDropdown>  

						<Link className='nav-link' to={"/"}>
							Contact
						</Link>

          </Nav>

					<Link className='ms-auto'>
						<Button variant='success'>Register Now</Button>
					</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
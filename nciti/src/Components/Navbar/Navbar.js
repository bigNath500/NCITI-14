import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Brand from '../Assets/Images/fmiti-logo.png'

function BasicExample() {
  return (
    <Navbar bg="transparent" className='fixed-top pt-3 pb-3 ' expand="lg">
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

						<NavDropdown className='me-2' title="Media" id="basic-nav-dropdown">
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
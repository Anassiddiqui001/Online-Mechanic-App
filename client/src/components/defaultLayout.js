import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import mechanic from '../mechanic.png';
import instagram from '../instagram.png';
import facebook from '../facebook.png';
import youtube from '../youtube.png';
function DefaultLayout(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{padding:"25px 0"}}>
                <Container>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/" className='navImg'>
                                <div className='navBrand'>
                                    <img
                                        alt=""
                                        src={mechanic}
                                        width="100px"
                                        height="100px"
                                        className="d-inline-block align-top"
                                    />
                                    <h3>OverNightAutos</h3>
                                </div>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/bookMechanic">Book Mechanic</Nav.Link>
                        <Nav.Link href="/packages">Packages</Nav.Link>
                        <Nav.Link href="/aboutUs">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="content">
                {props.children}
            </div>

            <footer className="page-footer font-small blue pt-4 bg-dark text-white" >
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <img alt="" src={mechanic} width="100px" height="100px" ></img>
                            <p style={{width:"65%"}}>If you are looking for a trustworthy, reliable company for your automobile repair needs, look no further. We are established in 2022.</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3" />
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Services</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a style={{textDecoration:'none'}} href="/"> Home</a>
                                </li>
                                <li>
                                    <a style={{textDecoration:'none'}} href="/aboutUs">About Us</a>
                                </li>
                                <li>
                                    <a style={{textDecoration:'none'}} href="/services">Services</a>
                                </li>
                                <li>
                                    <a style={{textDecoration:'none'}} href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Follow Us</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!"><img alt="" src={instagram} height="20px" width="20px" /></a>
                                </li>
                                <li>
                                    <a href="#!"><img alt="" src={facebook} height="20px" width="20px" /></a>
                                </li>
                                <li>
                                    <a href="#!"><img alt="" src={youtube} height="20px" width="20px" /></a>
                                </li>
                                <h5>Mobile Apps Coming Soon</h5>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <a style={{textDecoration:'none'}} href="/"> OverNightAutos</a>
                </div>
            </footer>
        </div>
    )
}

export default DefaultLayout
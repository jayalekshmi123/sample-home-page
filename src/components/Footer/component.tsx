import React from 'react';
import { Container } from '../../style';
import logoImg from '../../assets/images/logo.png';
import { FaTwitter, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';

import { FooterWrapper, Row, Col, SocialButtons, Container1 } from './style';
function iconStyles() {
    return {
        iconStyle: { fontSize: 26 },
        filter: { fontSize: 18, margin: 12 },
    };
}
function Footer() {
    const classes = makeStyles(iconStyles)();

    return (
        <FooterWrapper>
            <Container1>
                <Row>
                    <Col>
                        <a className="navbar-brand footer-logo" href="index.html">
                            <img className="img-fluid" src={logoImg} alt="Consumerfed" />
                        </a>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        <SocialButtons>
                            <li>
                                <FaTwitter className={classes.iconStyle} />
                            </li>
                            <li>
                                <FaFacebook className={classes.iconStyle} />
                            </li>
                            <li>
                                <FaInstagram className={classes.iconStyle} />
                            </li>
                        </SocialButtons>
                    </Col>
                    <Col>
                        <h2>Menu</h2>
                        <ul>
                            <li>
                                <a href="#">Shop</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Journal</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h2>Help</h2>
                        <div className="row">
                            <ul className="first">
                                <li>
                                    <a href="#">Shipping Information</a>
                                </li>
                                <li>
                                    <a href="#">Returns &amp; Exchange</a>
                                </li>
                                <li>
                                    <a href="#">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#">FAQs</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <h2>Have a Questions?</h2>
                        <div>
                            <ul>
                                <li>
                                    <FaMapMarkerAlt className={classes.filter} />
                                    <span className="text">
                                        203 New St. Mountain View, Thiruvananthapuram, Kerala, India
                                    </span>
                                </li>
                                <li>
                                    <FaPhone className={classes.filter} />
                                    <span className="text">+2 392 3929 210</span>
                                </li>
                                <li>
                                    <FaEnvelope className={classes.filter} />
                                    <span className="text">info@consumerfed.com</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container1>
            <span className="copy-right">Copyright © 2020 All rights reserved.</span>
        </FooterWrapper>
    );
}

export default Footer;

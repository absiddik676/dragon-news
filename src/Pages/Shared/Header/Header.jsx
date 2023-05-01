import React, { useContext } from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='mt-5 mb-3'>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex '>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={70}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../../assets/bg.png'
const RightNav = () => {
    var sectionStyle = {
        backgroundImage: `url(${bg})`,
        height:'450px'
     }
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary">Login with Google <FaGoogle /></Button>
            <Button variant="outline-secondary">Login with Github <FaGithub /></Button>
            <div className='mt-5 mb-5'>
                <h4>Find Us On</h4>
                <ListGroup >
                    <ListGroup.Item ><FaFacebook/>Facebook</ListGroup.Item>
                    <ListGroup.Item ><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone/>
            <div className='text-center text-white py-4 px-2'  style={sectionStyle}>
                <h1 >Create an Amazing Newspaper</h1>
                <p className='mt-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button type="button" className="btn btn-danger mt-4">Learn More</button>
            </div>
        </div>
    );
};

export default RightNav;
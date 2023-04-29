import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle,FaGithub } from 'react-icons/fa';
const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2 px-3' variant="outline-primary">Login with Google <FaGoogle/></Button>
            <Button variant="outline-secondary">Login with Github <FaGithub/></Button>
            <div>
                <h4></h4>
            </div>
        </div>
    );
};

export default RightNav;
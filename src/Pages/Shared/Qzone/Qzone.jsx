import React from 'react';
import qZne1 from '../../../../assets/qZone1.png'
import qZne2 from '../../../../assets/qZone2.png'
import qZne3 from '../../../../assets/qZone3.png'
const Qzone = () => {
    return (
        <div className='bg-secondary text-center my-5 px-4'>
            <h4>Q-Zone</h4>
            <div>
                <img src={qZne1} alt="" />
                <img src={qZne2} alt="" />
                <img src={qZne3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;
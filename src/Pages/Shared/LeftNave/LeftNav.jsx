import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categorys,setCategory] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/categorys')
        .then(res => res.json())
        .then(data => setCategory(data))
        .catch(error=>console.log(error))
    },[])

    return (
        <div>
            <h2>All Category</h2>
            <div className='ps-4'>
            {
                categorys.map(category=><p key={category.id}><Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link></p>)
            }
            </div>
        </div>
    );
};

export default LeftNav;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categorys,setCategory] = useState([])
    useEffect(()=>{
        fetch('https://the-news-dragon-server-absiddik676.vercel.app/categorys')
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
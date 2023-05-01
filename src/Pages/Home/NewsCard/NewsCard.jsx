/* eslint-disable react/prop-types */
import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye,FaRegStar,FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ps-2 flex-grow-1'>
                        <p className='m-0'>{author?.name}</p>
                        <p className='m-0'>{moment(author?.published_date).format("yyyy-MM-D ")}</p>
                    </div>
                    <div>
                        <FaRegBookmark />
                        <FaShareAlt />
                    </div>
                </Card.Header>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>

                        <Rating
                            placeholderRating={rating.number}
                            emptySymbol={<FaRegStar/>}
                            readonly
                            placeholderSymbol={<FaStar className='text-warning'/>}
                            fullSymbol={<FaStar/>}
                        />
                        <span>{rating.number}</span>
                    </div>
                    <div>
                        <FaEye /> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;
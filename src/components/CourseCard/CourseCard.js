import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {

    const { id, name, img, time } = course;

    return (
        <div >
            <Card className='mt-3' style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p><span><b>Course Duration :</b></span> {time} </p>
                    </Card.Text>
                    <div className='text-warning mb-3'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                    <Link to={`/details/${course.id}`}>
                        <Button variant="primary">See Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CourseCard;
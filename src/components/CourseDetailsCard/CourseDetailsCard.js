import React from 'react';
import { FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetailsCard = () => {

    const selectedCourse = useLoaderData();
    console.log(selectedCourse);

    const { id, name, details, reviews, img } = selectedCourse;


    return (
        <div>
            <Card className='mt-3'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                        <p className='mb-0'><span><b>Course Duration :</b></span> 3-6 Months </p>
                        <p><span><b>Reviews :</b></span> {reviews} </p>

                    </Card.Text>
                    <div className='text-warning mb-3'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                    <Link to={``}>
                        <Button variant="primary">See Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetailsCard;
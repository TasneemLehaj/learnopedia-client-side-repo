import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const CourseDetailsCard = () => {

    const { user } = useContext(AuthContext);

    const selectedCourse = useLoaderData();
    console.log(selectedCourse);

    const { id, name, details, reviews, img } = selectedCourse;


    return (
        <div>
            <h2 className='text-warning text-center mt-2'> Welcome to the Course!</h2>
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
                    {/* {
                        user ? <>
                            <Link to={`/checkout/${selectedCourse.id}`}>
                                <Button variant="primary">Get Premium Access</Button>
                            </Link>

                        </>
                            :
                            <>
                                <Link to='/login'> <Button variant="primary">Get Premium Access</Button></Link>
                            </>
                    } */}
                    <Link to={`/checkout/${selectedCourse.id}`}>
                        <Button variant="primary">Get Premium Access</Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetailsCard;
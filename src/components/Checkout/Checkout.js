import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div>
            <Row>
                <Col lg='8' className=' mx-auto mt-5'>
                    <Card className='text-center border-primary'>

                        <Card.Body>
                            <Card.Title> <h3 className='text-warning'> CONGRATULATIONS!</h3></Card.Title>
                            <Card.Text className='text-success'>
                                You have successfully enrolled in the course.Please see the details information available on our website.
                            </Card.Text>
                            <Link to='/courses'> <Button variant="success">Go To Courses</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Checkout;
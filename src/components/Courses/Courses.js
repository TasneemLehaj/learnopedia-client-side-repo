import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div>
            <Container >
                <Row>
                    <Col lg="10" className=' d-flex flex-wrap gap-3' >
                        {
                            courses.map(course => <CourseCard key={course.id}
                                course={course}
                            ></CourseCard>)
                        }


                    </Col>

                    <Col lg="2">
                        <h2 className='text-warning'> Our Courses</h2>

                        {
                            courses.map(course => <p key={course.id}>
                                <Link to={`/details/${course.id}`}> {course.name}</Link>
                            </p>)
                        }
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Courses;
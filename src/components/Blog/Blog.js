import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>
            <h1 className='text-warning text-center mt-3'> Welcome to Our Blog! </h1>
            <Card border="square border border-primary rounded p-2 me-5 mt-3 ms-5" >
                <Card.Header className='text-success'>Q. What is CORS?</Card.Header>
                <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="square border border-primary rounded p-2 m-5" >
                <Card.Header className='text-success'>Q. Why are you using firebase? What other options do you have to implement authentication?</Card.Header>
                <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="square border border-primary rounded p-2 m-5" >
                <Card.Header className='text-success'>Q. How does the private route work?</Card.Header>
                <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="square border border-primary rounded p-2 m-5" >
                <Card.Header className='text-success'>Q. What is Node? How does Node work?</Card.Header>
                <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

        </div>
    );
};

export default Blog;
import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>
            <h1 className='text-warning text-center mt-3'> Welcome to Our Blog! </h1>
            <Card border="square border border-primary rounded p-2 me-5 mt-3 ms-5" >
                <Card.Header className='text-success'>Q. What is CORS?</Card.Header>
                <Card.Body>

                    <Card.Text>
                        <p> <span className='text-success'> <b>Answer:</b></span> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="square border border-primary rounded p-2 m-5" >
                <Card.Header className='text-success'>Q. Why are you using firebase? What other options do you have to implement authentication?</Card.Header>
                <Card.Body>

                    <Card.Text>
                        <p><span className='text-success'> <b>Answer:</b></span></p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="square border border-primary rounded p-2 m-5" >
                <Card.Header className='text-success'>Q. How does the private route work?</Card.Header>
                <Card.Body>

                    <Card.Text>
                        <p><span className='text-success'> <b>Answer:</b></span>

                        </p>

                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="square border border-primary rounded p-2 m-5" >
                <Card.Header className='text-success'>Q. What is Node? How does Node work?</Card.Header>
                <Card.Body>

                    <Card.Text>
                        <p><span className='text-success'> <b>Answer:</b></span>

                        </p>

                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

        </div>
    );
};

export default Blog;
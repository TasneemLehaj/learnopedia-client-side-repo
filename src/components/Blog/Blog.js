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
                        <p><span className='text-success'> <b>Answer:</b></span> In simple words, Firebase is an app development platform that helps tobuild and grow apps and games users love. Firebase is a set of hosting services for any type of application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...). It offers NoSQL and real-time hosting of databases, content, social authentication (Google, Facebook, Twitter and Github), and notifications, or services, such as a real-time communication server. we are using Firebase for hosting and authentication.</p>
                        <p>
                            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="square border border-primary rounded p-2 m-5" >
                <Card.Header className='text-success'>Q. How does the private route work?</Card.Header>
                <Card.Body>

                    <Card.Text>
                        <p><span className='text-success'> <b>Answer: </b></span>
                            Private route is a protected route. It uses authentication for a user to go to that specific route.<br></br>
                            The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                        </p>

                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="square border border-primary rounded p-2 m-5" >
                <Card.Header className='text-success'>Q. What is Node? How does Node work?</Card.Header>
                <Card.Body>

                    <Card.Text>
                        <p><span className='text-success'> <b>Answer: </b></span>
                            Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend.<br></br>
                            Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads.It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language It can handle concurrent requests with a single thread without blocking it for one request.Node.js basically works on two concept-Asynchronous and Non-blocking I/O.To implement the concept of the system to handle the request  node.js uses the concept of Libuv.Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.LIbuv has two important features of Node.js - Event loop and Thread pool.EventLoop is the heart of node.js. When we start our node application the event loop starts running right away. Most of the work is done in the event loop.
                            Nodejs use event-driven-architecture where events are emitted, event loop picks them up also Callbacks are called.As soon as the request is sent the thread places the request into a queue. It is known as an event queue.The event loop is an indefinite loop that continuously receives the request and processes them. It checks the queue and waits for the incoming request indefinitely. Though node.js is single-threaded it internally maintains a thread pool. When non-blocking requests are accepted there are processed in an event loop, but while accepting blocking requests it checks for available threads in a thread pool, assigns a thread to the client’s request which is then processed and send back to the event loop, and response is sent to the respective client. This is how Nodejs works.



                        </p>


                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

        </div>
    );
};

export default Blog;
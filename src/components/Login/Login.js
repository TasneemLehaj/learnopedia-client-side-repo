import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="square border border-success rounded p-2 m-5">
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
                    Submit
                </Button>

                <p> New to the account? Go to <Link to='/register'>Register</Link></p>
                <Form.Text className="text-danger me-4">
                    { }
                </Form.Text>
                <hr />
                <Button variant="outline-primary"> Login with Google</Button>{' '}
                <Button variant="outline-success"> Login with Github</Button>{' '}

            </Form>
        </div>
    );
};

export default Login;
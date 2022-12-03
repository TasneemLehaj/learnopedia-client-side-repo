import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        form.reset();
        setError('');
        createUser(email, password)
            .then((result => {
                const user = result.user;
                console.log(user)
            }))
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

    }


    return (
        <div className="square border border-success rounded p-2 m-5">
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />

                </Form.Group>
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

                <p> Already have account? Go to <Link to='/login'>Login</Link></p>
                <Form.Text className="text-danger me-4">
                    {error}
                </Form.Text>
                <hr />
                <Button variant="outline-primary"> Login with Google</Button>{' '}
                <Button variant="outline-success"> Login with Github</Button>{' '}

            </Form>

        </div>
    );
};

export default Register;
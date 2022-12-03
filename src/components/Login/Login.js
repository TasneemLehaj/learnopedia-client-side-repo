import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Login = () => {

    const { signIn, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
        setError('');
        navigate(from, { replace: true })
        signIn(email, password)
            .then((result => {
                const user = result.user;
                console.log(user)
            }))
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="square border border-success rounded p-2 m-5">
            <Form onSubmit={handleLogin} >
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
                    {error}
                </Form.Text>
                <hr />
                <Button onClick={handleGoogleSignIn} variant="outline-primary"> Login with Google</Button>{' '}
                <Button variant="outline-success"> Login with Github</Button>{' '}

            </Form>
        </div>
    );
};

export default Login;
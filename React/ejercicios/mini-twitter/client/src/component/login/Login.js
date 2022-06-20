import { useState } from 'react';
import { useToken } from '../../utils/TokenContext';
import { useModal } from '../../utils/ModalContext';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Login = () => {
    const [, setToken] = useToken();
    const [, setModal] = useModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('Loading');

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!response.ok) throw new Error(response.statusText);

            const { data } = await response.json();

            setToken(data.token);

            setModal(null);

            setStatus('Loaded');
        } catch (err) {
            console.error(err);
            setStatus('Error');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    placeholder="Enter email"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="pass"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button
                className="loginBt"
                variant="primary"
                type="submit"
                disabled={status === 'Loading'}
            >
                {status === 'Loading' ? 'Loading...' : 'Login'}
            </Button>

            {status === 'Error' && (
                <Alert variant="danger" className="error">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>There was an error logging in. Please try again.</p>
                </Alert>
            )}

            {status === 'Loaded' && (
                <p className="success">You have successfully logged in.</p>
            )}
        </Form>
    );
};

export default Login;

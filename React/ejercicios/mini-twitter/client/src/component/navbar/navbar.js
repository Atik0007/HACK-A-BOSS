import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { useToken } from '../../utils/TokenContext';
import { useModal } from '../../utils/ModalContext';

import Profile from '../profile/Profile';
import Login from '../login/Login';

import './styles/navbar.css';

const NavBar = () => {
    const [token] = useToken();
    const [, setModal] = useModal();

    return (
        <>
            <Container>
                <Navbar className="navbar" expand="lg" variant="light">
                    <Container>
                        <Navbar.Brand href="#">Mini Twitter</Navbar.Brand>
                        {!token && (
                            <Button
                                variant="primary"
                                onClick={() => setModal(<Login />)}
                            >
                                Login
                            </Button>
                        )}
                        {token && <Profile />}
                    </Container>
                </Navbar>
            </Container>
        </>
    );
};

export default NavBar;

import useFetch from '../../hooks/useFetch';
import { useToken } from '../../utils/TokenContext';

import Button from 'react-bootstrap/esm/Button';

const Profile = () => {
    const { data, status } = useFetch('http://localhost:4000/users');
    const [, setToken] = useToken();

    if (status === 'Loading') {
        return <p>Loading...</p>;
    }

    // Function removes token from local storage and redirects to login page
    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    console.log(data);

    return (
        <div className="userInfo">
            <p>{data.user.email}</p>

            <Button variant="primary" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    );
};

export default Profile;

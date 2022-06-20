import { useState } from 'react';
import data from '../users.json';
import { nanoid } from 'nanoid';

export default function User() {
    const [user, setUser] = useState(data);
    let ID = nanoid();
    console.log(ID);
    const handleClick = (e) => {
        e.preventDefault();

        setUser(data);
        console.log(user);
    };

    return (
        <>
            <form onSubmit={handleClick}>
                <button type="submit">Reset</button>
            </form>

            <ul>
                {user.map((user) => (
                    <li key={ID}>
                        <img src={user.picture.medium} alt={user.name.first} />
                        <p>{user.name.first}</p>
                        <p>{user.name.last}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

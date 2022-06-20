import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import './ChatRoomHeader.css';

const ChatRoomHeader = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ChatRoomHeader">
            <h1>{format(date, 'dd/MM/yyyy - hh:mm:ss')}</h1>
        </div>
    );
};

export default ChatRoomHeader;

import './ChatRoom.css';

const ChatRoom = ({ children }) => {
    return (
        <div className="ChatRoom">
            <h1>Chat Room</h1>
            {children}
        </div>
    );
};

export default ChatRoom;

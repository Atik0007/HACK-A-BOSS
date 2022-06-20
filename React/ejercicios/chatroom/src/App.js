import * as React from 'react';
import ChatRoom from './component/ChatRoom';
import ChatRoomHeader from './component/ChatRoomHeader';
import Message from './component/Message';
import './App.css';

function App() {
    return (
        <div>
            <ChatRoom>
                <ChatRoomHeader></ChatRoomHeader>
                <Message></Message>
            </ChatRoom>
        </div>
    );
}

export default App;

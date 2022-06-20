import './Message.css';
import data from '../messages.json';
import { useState } from 'react';
const Message = () => {
    const [messages, setMessages] = useState(data);

    const sendMessage = (e) => {
        e.preventDefault();
        let body = e.target.elements.message;
        const author = 456317;
        const date = new Date();
        const newMessage = {
            id: messages.length + 1,
            body: body.value,
            author: author,
            date: date.toLocaleTimeString(),
        };
        setMessages([...messages, newMessage]);
        body.value = '';
        console.log(body);
    };

    const allMessages = messages.map((message) => {
        return (
            <li key={message.id}>
                <img
                    className="avatar"
                    src={`avatars/${message.author}.png`}
                    alt="avatar"
                />
                <div className="MessageBody">
                    <p>{message.body}</p>
                    <time className="MessageInfo">{message.date}</time>
                </div>
            </li>
        );
    });

    return (
        <div className="Message">
            <ul>{allMessages}</ul>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    placeholder="Type a message..."
                    name="message"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Message;

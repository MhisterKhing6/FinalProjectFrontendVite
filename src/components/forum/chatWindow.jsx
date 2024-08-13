import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef, useState } from 'react';
import { ChatCard } from './chatCard';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import './window.css';
import { PiCatThin } from 'react-icons/pi';
import { BiVideo } from 'react-icons/bi';
import { FaMicrophone } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showOptions, setShowOptions] = useState(false)
    const chatContainerRef = useRef(null);

    useEffect(() => {
        // Simulate fetching initial messages
        loadMoreMessages();
    }, []);

    const loadMoreMessages = () => {
        if (loading) return;

        setLoading(true);
        
        const scrollPosition = chatContainerRef.current.scrollTop;
        const scrollHeight = chatContainerRef.current.scrollHeight;

        // Simulate an API call to fetch more messages
        setTimeout(() => {
            const newMessages = Array.from({ length: 20 }, (_, i) => ({
                id: messages.length + i + 1,
                text: `Message ${messages.length + i + 1}`,
                sender: i % 2 === 0 ? 'me' : 'other',
                time: '10:30 AM',
                profilePic: 'https://via.placeholder.com/40'
            }));

            setMessages(prevMessages => [...newMessages, ...prevMessages]);

            // Calculate new scroll position
            const newScrollHeight = chatContainerRef.current.scrollHeight;
            chatContainerRef.current.scrollTop = newScrollHeight - scrollHeight + scrollPosition;

            setLoading(false);
        }, 1000);
    };

    const handleScroll = () => {
        if (chatContainerRef.current.scrollTop === 0) {
            loadMoreMessages();
        }
    };

    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        chatContainer.addEventListener('scroll', handleScroll);

        return () => chatContainer.removeEventListener('scroll', handleScroll);
    }, [messages]); 

    const PopElement = ({id, status}) => {
        return (
            <div  className="container p-3 text-muted rounded-2 ">
                <div className="align-items-center justify-content-start">
                <div>
                 <Button style={{textDecoration:"none"}} variant="link" className="p-0 text-muted mb-2"><span ><PiCatThin className="me-3" />Picture</span></Button>
                </div>
                </div>
    
                <div className="align-items-center justify-content-start">
                <div>
                <Button style={{textDecoration:"none"}} variant="link" className="p-0 mt-0 text-muted mb-2"><span ><BiVideo className="me-3" />Video </span></Button>
                </div>
                </div>

                <div className="align-items-center justify-content-start">
                <div>
                <Button style={{textDecoration:"none"}} variant="link" className="p-0 mt-0 text-muted mb-2"><span ><FaMicrophone className="me-3" />Audio </span></Button>
                </div>
                </div>

                <div className="align-items-center justify-content-start">
                <div>
                <Button style={{textDecoration:"none"}} variant="link" className="p-0 mt-0 text-muted mb-2"><span ><GrDocumentPdf className="me-3" />Docs </span></Button>
                </div>
                </div>
               
            </div>
        )
    }

    const Poper = <Popover>
        <PopElement />
    </Popover>
    return (
        <div className="chat-container d-flex flex-column">
            <div className="chat-messages flex-grow-1 p-3 overflow-auto" ref={chatContainerRef}>
                {loading && <div className="text-center">Loading...</div>}
                {messages.map((message) => (
                    <div key={message.id} className={`d-flex align-items-start mb-3 ${message.sender === 'me' ? 'justify-content-start' : 'justify-content-end'}`}>
                        {message.sender === 'me' ? (
                            <>
                                <img 
                                    src={message.profilePic} 
                                    alt="User" 
                                    className="rounded-circle me-2"
                                />
                                <div>
                                    <div className="chat-message sender bg-primary text-white">
                                        {message.text}
                                    </div>
                                    <small className="text-muted">{message.time}</small>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <div className="chat-message bg-light text-dark">
                                        {message.text}
                                    </div>
                                    <small className="text-muted">{message.time}</small>
                                </div>
                                <img 
                                    src={message.profilePic} 
                                    alt="User" 
                                    className="rounded-circle ms-2"
                                />
                            </>
                        )}
                    </div>
                ))}
                <ChatCard />
            </div>

            {/* Input Area */}
            <div className="input-area d-flex align-items-center p-3 border-top">
                <input 
                    type="text" 
                    className="form-control me-2" 
                    placeholder="Type your message..."
                />
                <button className="btn btn-primary">Send</button>

                {/* Plus Button */}
                <div className="position-relative ms-3">
               
                    <OverlayTrigger  overlay={<Popover><PopElement /></Popover>}>
                    <Button 
                        className="btn btn-outline-primary rounded-circle" 
                    >
                        +
                    </Button>
                    </OverlayTrigger>
                </div>
            </div>
        </div>
    );
};

export { ChatWindow };


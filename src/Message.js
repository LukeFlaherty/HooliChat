// es7 snippets
import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;
    return (
        
        // using BEM standard for styling componant
            <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                <Typography
                    color="white"
                    variant="h5"
                    component="h2"
                >
                    {/* if it is not you hsow the name 
                    string interpolation
                    */}
                    {/* if people skip the name prompt then it says null, change it to Anonymous */}
                    {!isUser && `${message.username || 'Anonymous'}: `} {message.message}
                </Typography>
                </CardContent>
            </Card>
            </div>
            
    )
})

export default Message

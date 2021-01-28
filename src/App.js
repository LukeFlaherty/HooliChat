import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  // initializing state
  const [input, setInput] = useState('');
  // use another peice of state to store messages
  const [messages, setMessages] = useState([]);
  // to remember user
  const [username, setUsername] = useState('');

  // useState is a variable in react and useEffect is a block of code that gets executed based on a condition
  useEffect(() => {
    // const name = prompt('Enter your name:');
    setUsername(prompt('Enter your name:'))
  }, [] ) //condition goes [], if it blank than it loads when app component loads

  // run once when the app loads and none after that
  // reads from the db and outputs the previous messages
  // had to do funky stuff with firebase permissions
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [] )


  const sendMessage = (event) => {
    // stops the form from refreshing
    event.preventDefault();

    // sending to db
    // server timestamp is huge
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // going to put all the logic to send a message here
    // push to array state
    // ... says to space out the input in the array OR keep all current but append to the end
    // setMessages([...messages, {username: username, text: input}])

    //clear the input once sent
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://hoolichat.com/wp-content/uploads/2020/04/HooliChat-e1587758763209.jpg" />

      <form className="app__form">
      
      <FormControl className="app__formControl">
        <Input className="app__input" value={input} placeholder="say hello..." onChange={event => setInput(event.target.value)}/>
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
          <SendIcon />
        </IconButton>
        {/* <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button> */}
      </FormControl>

      </form>

      <FlipMove>
      {
        // easy way to loop through and return html
        // the key is very important, take it out and see what happens
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))
      }
      </FlipMove>

    </div>
  );
}

export default App;

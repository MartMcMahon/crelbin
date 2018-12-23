import React from 'react';
import firebase from '../firebase';

class ChatPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      'messages': {},
      'users': {},
      'sender': '',
    };
    const db = firebase.database();
  }

  componentDidMount() {
    console.log('we mounted', this.state);
    const messages = firebase.database().ref('/dialog/messages/');
    console.log('messages', messages);
    messages.on('value', (snapshot) => {
    console.log('val', snapshot.val());
      this.setState({'messages': snapshot.val()});
    });

    const users = firebase.database().ref('/users/');
    users.on('value', snapshot => {
      this.setState({'users': snapshot.val()});
    });
  }

  sendMessage(msg) {
    const postData = {
      body: msg,
      sender: this.state.sender,
      // uid: uid,
      // title: title,
      // starCount: 0,
      // authorPic: picture
    };

    // Get a key for a new Post.
    const newPostKey = firebase.database().ref('/dialog/messages/').push().key;

    let updates = {};
    updates[newPostKey] = postData;

    this.setState({ newMessage: '' });

    return firebase.database().ref('/dialog/messages/').update(updates);
  }

  render() {
    return <div className="chatpage">
      <div className="dialog-container">
        <div className="messages-container">
          { Object.keys(this.state.messages).map( key => {
            const message = this.state.messages[key];
            return <div key={key}>{message.sender} : { message.body }</div>;
          }) }
        </div>
        <div className="new-message-container">
          <input
            className="sender-input"
            type="text"
            onChange={(e) => this.setState({ sender: e.target.value }) }
            placeholder="sender"
          />
          <input
            type="text"
            onChange={(e) => this.setState({ newMessage: e.target.value }) }
            placeholder="message"
            value={this.state.newMessage}
          />
          <button
            onClick={() => this.sendMessage(this.state.newMessage)}
          >
            send
          </button>
        </div>
      </div>
      <div className="users-container">
          { Object.keys(this.state.users).map( key => {
            const user = this.state.users[key];
            return <div key={key}>{user.sender}</div>;
          }) }
      </div>
    </div>
  }
}

export default ChatPage;

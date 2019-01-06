const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendCloudMessage = functions.database.ref('/dialog/messages/{id}')
.onCreate((snapshot, context) => {
  const msg = snapshot.val();
  console.log('msg', msg);
  console.log('context', context);
  const payload = {
    'notification': {
      'title': "title!",
      'body': msg.body
    },
    'data': {
      'personSend': 'me'
    }
  };
  return admin.database().ref('/users').once('value')
  .then((snapshot) => {
    const users = snapshot.val();
    Object.keys(users).map(key => {
      const user = users[key];
      console.log(user);
      admin.messaging().sendToDevice(user.token, payload, {});
    });

    // console.log(snapshot.val());
    // return snapshot;
    // const thing = snapshot.val();
    // console.log('thing', thing);

    // console.log('msg', msg);
    // return admin.messaging().sendToDevice(thing, msg, {});
  });
  // .then((response) => {
  //   // Response is a message ID string.
  //   console.log('Successfully sent message:', response);
  // })
  // .catch((error) => {
  //   console.log('Error sending message:', error);
  // });
});







//exports.sendNotif = functions.database.ref('/customers/{id}/chats/{chatId}').onUpdate((change, context) => {

//    //const afterData = change.after.val();  //I don't think you need this data (i.e. newMessage: true)
//    const chatId = context.params.chatId; //the value of {chatId} in  '/customers/{id}/chats/{chatId}/' that you passed as parameter of the ref

//    //You query the database at the messages/chatID location and return the promise returned by the once() method
//    return admin.database().ref('/messages/' + chatId).once('value').then(snapshot => {

//        //You get here the result of the query to messagges/chatId in the DataSnapshot
//        const messageContent = snapshot.val().lastMessage;

//        var myoptions = {
//           priority: "high",
//           timeToLive: 60 * 60 * 24
//        };

//        // Notification data which supposed to be filled via last message.
//       const notifData = {
//        "notification":
//        {
//          "body" : messageContent,  //I guess you want to use the message content here??
//          "title" : "Portugal vs. Denmark",
//          "sound": "default"
//        }
//       };

//       return admin.messaging().sendToDevice(user.fcm.token, notifData, myoptions);
//  )
//  .catch(function(error) {
//        console.log('Error sending message:', error);
//  });

//});

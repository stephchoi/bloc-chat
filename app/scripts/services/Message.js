(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    ref.orderByChild('roomId');
    var allMessages = $firebaseArray(ref);

    Message.currentRoom = null;
    Message.currentMessages = [];

    Message.getByRoomId = function(room) {
      var id = room.$id;
      // Filter the messages by their room ID.
      var Messages = ref.orderByChild('roomId').equalTo(id);

      Message.currentMessages = $firebaseArray(Messages);
      Message.currentRoom = room;
    };

    Message.send = function(newMessage) {
      var username = $cookies.get('currentUser');
      //Create Message
      var message = {
        "content": newMessage,
        "roomId": Message.currentRoom.$id,
        "sentAt": "8 Aug 2017 11:50:17 GMT-0500(EST)",
        "username": username
      }
      //Pushes message onto firebase
      allMessages.$add(message);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies', Message]);
})();

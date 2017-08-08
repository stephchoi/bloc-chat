(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    Message.currentRoom = null;

    Message.getByRoomId = function(roomID) {
        // Filter the messages by their room ID.
        messages.orderByChild('roomId').equalTo('roomID');
        Message.currentRoom = roomID;
    };

    return Message;
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

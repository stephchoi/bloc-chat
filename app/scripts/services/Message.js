(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    ref.orderByChild("roomId");

    Message.currentRoom = null;
    Message.currentMessages = [];

    Message.getByRoomId = function(room) {
      var id = room.$id;
        // Filter the messages by their room ID.
        var Messages = ref.orderByChild('roomId').equalTo(id);

        Message.currentMessages = $firebaseArray(Messages);
        Message.currentRoom = room;
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

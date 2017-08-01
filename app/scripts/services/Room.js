(function() {
  function Room($firebaseArray) {
    var Room = {};
    /*Gets data for each room in firebase*/
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    Room.currentRoom = null;

    /*Function sets the chat window to the currentRoom messaging data*/
    Room.setCurrentRoom = function(room) {
      currentRoom = room;
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room])
})();

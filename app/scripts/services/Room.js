(function() {
  function Room($firebaseArray) {
    var Room = {};
    /*Gets data for each room in firebase*/
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    Room.currentRoom = null;

    var createRoom = function(name) {
      //creates a new chat room
      var newRoom = {
        "$value": name,
        "$id": Room.all.length + 1,
        "$priority": null
      };

      return newRoom;
    };

    //Adds new chatrooms to database
    Room.add = function() {
      var name = document.getElementById("new-room-name").value;
      var room = createRoom(name);
      rooms.$add(room);
    };

    //Function sets the chat window to the currentRoom messaging data
    Room.setCurrentRoom = function(room) {
      currentRoom = room;
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room])
})();

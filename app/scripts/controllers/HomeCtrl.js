(function() {
    function HomeCtrl(Room) {
      this.rooms = Room;
      this.messages = Room.currentRoom;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

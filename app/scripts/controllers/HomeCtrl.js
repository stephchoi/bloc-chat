(function() {
    function HomeCtrl(Room) {
      this.roomarray = Room.all;
      this.room = Room;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

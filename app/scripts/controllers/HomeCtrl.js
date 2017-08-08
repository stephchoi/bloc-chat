(function() {
    function HomeCtrl(Room, $uibModal, Message) {
      this.roomarray = Room.all;
      this.room = Room;

      //Opens the modal
      this.open = function () {
        console.log('Hi');
        $uibModal.open({
          templateUrl: '/templates/room_modal.html',
          controller: 'AddRoomCtrl',
          controllerAs: '$ctrl'
        });
      };

      //Changes the chatroom shown
      this.messages = Message;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','$uibModal','Message', HomeCtrl]);
})();

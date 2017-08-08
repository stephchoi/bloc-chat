(function() {
    function HomeCtrl(Room, $uibModal) {
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
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','$uibModal', HomeCtrl]);
})();

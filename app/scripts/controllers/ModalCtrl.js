(function() {
  function ModalCtrl($uibModal, $log, $document, Room, $uibModalInstance) {
    var $ctrl = this;

    $ctrl.ok = function () {
      var name = $ctrl.roomName;
      Room.add(name);
      $uibModalInstance.close(name);
    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('AddRoomCtrl', ['$uibModal', '$log', '$document','Room', '$uibModalInstance', ModalCtrl]);
})();

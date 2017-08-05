(function() {
  function ModalCtrl($uibModal, $log, $document, Room, $uibModalInstance) {
    var $ctrl = this;

    function ModalInstanceCtrl($uibModalInstance, Room){
        var $ctrl = this;

        $ctrl.ok = function () {
          var name = document.getElementById("new-room-name").value;
          Room.add();
          $uibModalInstance.close(name);
        };

        $ctrl.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      }

    $ctrl.open = function () {
      $uibModal.open({
        templateUrl: '/templates/room_modal.html',
        controller: ModalInstanceCtrl($uibModalInstance, Room),
        controllerAs: '$ctrl',
      });
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal','$log','$document','Room', '$uibModalInstance', ModalCtrl]);
})();

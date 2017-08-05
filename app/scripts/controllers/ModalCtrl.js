(function() {
  function ModalCtrl($uibModal, $log, $document, Room, $uibModalInstance) {
    var $ctrl = this;
    $ctrl.open = function () {
      $uibModal.open({
        templateUrl: '/templates/room_form.html',
        controller:   function($uibModalInstance, Room){
            var $ctrl = this;

            $ctrl.ok = function () {
              var name = document.getElementById("new-room-name").value;
              Room.add();
              $uibModalInstance.close(name);
            };

            $ctrl.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          },
        controllerAs: '$ctrl'
      });
    };
  }

  angular
    .module('blocChat',['ui.bootstrap'])
    .controller('ModalCtrl', ['$uibModal','$log','$document','Room', '$uibModalInstance', ModalCtrl]);
})();

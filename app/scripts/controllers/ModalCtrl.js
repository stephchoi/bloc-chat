(function() {
  angular
    .module('blocChat',['ui.bootstrap'])
    .controller('ModalCtrl', ['$uibModal','$log','$document', function ($uibModal, $log, $document) {
      var $ctrl = this;
      $ctrl.open = function () {
        $uibModal.open({
          templateUrl: '/templates/room_form.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl'
        });
    };
  }]);

  angular
    .module('blocChat', ['ui.bootstrap'])
    .controller('ModalInstanceCtrl', ['$uibModalInstance','Room', function ($uibModalInstance, Room) {
      var $ctrl = this;

      $ctrl.ok = function () {
        var name = document.getElementById("new-room-name").value;
        Room.add();
        $uibModalInstance.close(name);
      };

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
  }]);
})();

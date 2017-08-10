(function(){
  function UserCtrl($uibModalInstance, $cookies){
    this.setUserName = function () {
      var name = this.newUserName;
      //Stores the username input from modal into cookies
      $cookies.put('currentUser', name);
      $uibModalInstance.close(name);
    };
  }

  angular
    .module('blocChat')
    .controller('UserCtrl', ['$uibModalInstance','$cookies', UserCtrl])
})();

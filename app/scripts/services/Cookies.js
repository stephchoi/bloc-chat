(function() {
  function BlocChatCookies($cookies, $uibModal){
    //resets the currentUser cookies when page loads
    $cookies.remove('currentUser');
    var currentUser = $cookies.get('currentUser');


    if(!currentUser || currentUser === ''){
      $uibModal.open({
        templateUrl: '/templates/user_modal.html',
        controller: 'UserCtrl as $user'
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies])
})();

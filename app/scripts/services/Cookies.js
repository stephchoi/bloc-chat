(function() {
  function BlocChatCookies($cookies, $uibModal){
    console.log($cookies);
    var currentUser = $cookies.get('currentUser');
    console.log(currentUser);

    if(!currentUser || currentUser === ''){
      $uibModal.open({
        templateUrl: '/templates/user_modal.html';
        controller: 'UserCtrl as $user';
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal'], BlocChatCookies)
})();

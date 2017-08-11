(function() {
  function timecode() {
    return function(unix) {
      var seconds = Number.parseFloat(unix);
      return moment(seconds).format('h:mm a');
    };
  }

  angular
    .module('blocChat')
    .filter('timecode', timecode);
})();

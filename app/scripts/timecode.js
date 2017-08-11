(function() {
  function timecode() {
    return function(unix) {
      var seconds = Number.parseFloat(unix*1000);
      return moment(seconds).format('h:mm a');
    };
  }

  angular
    .module('blocChat')
    .filter('timecode', timecode);
})();

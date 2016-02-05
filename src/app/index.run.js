(function() {
  'use strict';

  angular
    .module('mytests')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

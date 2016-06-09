'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp', [])
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:EmailCtrl
 * @description
 * # EmailCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('EmailCtrl', EmailCtrl);

  EmailCtrl.$inject = ['EmailFactory'];

  function EmailCtrl(EmailFactory){
    var vm = this;

    vm.sendEmail = function(email){
      EmailFactory.sendEmail(email).then(function(){
        console.log('email sent!');
      });
      vm.email = {};
    };
  }

'use strict';

angular.module('portfolioApp')
       .factory('EmailFactory', EmailFactory);

EmailFactory.$inject = ['$http'];

function EmailFactory($http){
  function sendEmail(email){
    return $http.post('https://portfolioapi.herokuapp.com/email', email);
  }

  return{
    sendEmail: sendEmail
  };
}

'use strict';

angular.module('portfolioApp').directive('abLandingView',[function(){
  return{
    restrict: 'E',
    templateUrl: 'views/landing.html'
  };
}]);

'use strict';

angular.module('portfolioApp').directive('abAboutView',[function(){
  return{
    restrict: 'E',
    templateUrl: 'views/about.html'
  };
}]);

'use strict';

angular.module('portfolioApp').directive('abProjectsView',[function(){
  return{
    restrict: 'E',
    templateUrl: 'views/projects.html'
  };
}]);

'use strict';

angular.module('portfolioApp').directive('abContactView',[function(){
  return{
    restrict: 'E',
    templateUrl: 'views/contact.html'
  };
}]);

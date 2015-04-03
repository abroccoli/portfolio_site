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

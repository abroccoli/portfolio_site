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

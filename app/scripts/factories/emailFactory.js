'use strict';

angular.module('portfolioApp')
       .factory('EmailFactory', EmailFactory);

EmailFactory.$inject = ['$http'];

function EmailFactory($http){
  function sendEmail(email){
    return $http.post('http://localhost:3000/email', email);
  }

  return{
    sendEmail: sendEmail
  };
}

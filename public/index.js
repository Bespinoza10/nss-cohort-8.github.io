'use strict'

// var $ = require('jquery'),
//     _ = require('lodash'),
//     Firebase = require('firebase');

angular
.module('ch8App', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {url:'/', templateUrl:'views/home.html'})
    .state('nss', {url:'/nss', templateUrl:'views/nss.html'})
    .state('students', {url:'/students', templateUrl:'views/students.html', controller:'StudentCtrl'})
    .state('contact', {url:'/contact', templateUrl:'views/contact.html'})

});

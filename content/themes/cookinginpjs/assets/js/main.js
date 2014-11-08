$(document).ready(function() {

  $('body').removeClass('no-js');

  $('a.blog-button').click(function() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function() {} );
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  // var app = angular.module('Twitter', ['ngResource', 'ngSanitize']);

  // app.controller('TweetList', function($scope, $resource, $timeout) {

  //     /**
  //      * init controller and set defaults
  //      */
  //     function init () {

  //       // set a default username value
  //       $scope.username = "twitterdev";

  //       // empty tweet model
  //       $scope.tweetsResult = [];

  //       // initiate masonry.js
  //       $scope.msnry = new Masonry('#tweet-list', {
  //         columnWidth: 320,
  //         itemSelector: '.tweet-item',
  //         transitionDuration: 0,
  //         isFitWidth: true
  //       });

  //       // layout masonry.js on widgets.js loaded event
  //       twttr.events.bind('loaded', function () {
  //         $scope.msnry.reloadItems();
  //         $scope.msnry.layout();
  //       });

  //       $scope.getTweets();
  //     }

  //     /**
  //      * requests and processes tweet data
  //      */
  //     function getTweets (paging) {

  //       var params = {
  //         action: 'user_timeline',
  //         user: $scope.username
  //       };

  //       if ($scope.maxId) {
  //         params.max_id = $scope.maxId;
  //       }

  //       // create Tweet data resource
  //       $scope.tweets = $resource('/tweets/:action/:user', params);

  //       // GET request using the resource
  //       $scope.tweets.query( { }, function (res) {

  //         if( angular.isUndefined(paging) ) {
  //           $scope.tweetsResult = [];
  //         }

  //         $scope.tweetsResult = $scope.tweetsResult.concat(res);

  //         // for paging - https://dev.twitter.com/docs/working-with-timelines
  //         $scope.maxId = res[res.length - 1].id;

  //         // render tweets with widgets.js
  //         $timeout(function () {
  //           twttr.widgets.load();
  //         }, 30);
  //       });
  //     }

  //     /**
  //      * binded to @user input form
  //      */
  //     $scope.getTweets = function () {
  //       $scope.maxId = undefined;
  //       getTweets();
  //     }

  //     /**
  //      * binded to 'Get More Tweets' button
  //      */
  //     $scope.getMoreTweets = function () {
  //       getTweets(true);
  //     }

  //     init();
  // });


});

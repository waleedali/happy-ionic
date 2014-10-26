angular.module('happyApp.controllers', [])

// .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
//   // Form data for the login modal
//   $scope.loginData = {};

//   // Create the login modal that we will use later
//   $ionicModal.fromTemplateUrl('templates/login.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });

//   // Triggered in the login modal to close it
//   $scope.closeLogin = function() {
//     $scope.modal.hide();
//   };

//   // Open the login modal
//   $scope.login = function() {
//     $scope.modal.show();
//   };

//   // Perform the login action when the user submits the login form
//   $scope.doLogin = function() {
//     console.log('Doing login', $scope.loginData);

//     // Simulate a login delay. Remove this and replace with your login
//     // code if using a login system
//     $timeout(function() {
//       $scope.closeLogin();
//     }, 1000);
//   };
// })

// .controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'Reggae', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 }
//   ];
// })

// .controller('PlaylistCtrl', function($scope, $stateParams) {
// });

.controller('MainCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

  // first slide (mood selection) code
  var moods =  ["B" /* 0 - so happy */,
                "C" /* 1 - happy */,
                "G" /* 2 - tired */,
                "L" /* 3 - on fire */,
                "2" /* 4 - sleepy */,
                "M" /* 5 - sad */];

  $scope.currentMood = 1;

  var incMood = function(mode) {
    if ("Increment" === mode)
    {
      $scope.currentMood++;
      if ($scope.currentMood === moods.length)
        $scope.currentMood = 0;
    }
    else
    {
      $scope.currentMood--;
      if ($scope.currentMood === 0)
        $scope.currentMood = 5;
    }
  };

  $scope.onSwipeUp = function() {
    $(".mood-face").html(moods[$scope.currentMood]);
    console.log($scope.currentMood);
    incMood("Increment");
  }

  $scope.onSwipeDown = function() {
    $(".mood-face").html(moods[$scope.currentMood]);
    console.log($scope.currentMood);
    incMood();
  }


});
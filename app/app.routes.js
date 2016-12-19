console.log('app.routes.js running')

cuff_ui.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/contributor')

  var contributorState = {
      name: 'contributor',
      url: '/contributor',
      templateUrl: 'components/1_contributor/contributor.html',
      controller: 'contributorController'
  }

  var subjectState = {
      name: 'subject',
      url: '/subject',
      templateUrl: 'components/2_subject/subject.html',
      controller: 'subjectController'
  }

  var appearanceState = {
      name: 'appearance',
      url: '/appearance',
      templateUrl: 'components/3_appearance/appearance.html',
      controller: 'appearanceController'
  }

  var judgmentsState = {
      name: 'judgments',
      url: '/judgments',
      templateUrl: 'components/5_judgments/judgments.html',
      controller: 'judgmentsController'
  }

  var warrantsState = {
      name: 'warrants',
      url: '/warrants',
      templateUrl: 'components/4_warrants/warrants.html',
      controller: 'warrantsController'
  }

  var criminalHistoryState = {
      name: 'criminalHistory',
      url: '/criminal-history',
      templateUrl: 'components/6_criminal_history/criminal_history.html',
      controller: 'criminalHistoryController'
  }

  var submitState = {
      name: 'submit',
      url: '/review-and-submit',
      templateUrl: 'components/7_submit/submit.html',
      controller: 'submitController'
  }

      $stateProvider.state(contributorState);
      $stateProvider.state(subjectState);
      $stateProvider.state(appearanceState);
      $stateProvider.state(judgmentsState);
      $stateProvider.state(warrantsState);
      $stateProvider.state(criminalHistoryState);
      $stateProvider.state(submitState);

}]);

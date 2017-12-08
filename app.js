'use strict';

var app = angular.module('registrationApp', [
    'cdpi.hal'
]);

app.controller('RegistrationCtrl', ['hal', '$scope',
    function (
        hal,
        $scope
    ) {
        var REGISTRATION_HANDLE_NEW_REQUEST_URL = '/registration';
        var REGISTRATION_ADD_ADDITIONAL_EMAIL_URL = '/registration/addAdditionalEmail';
        $scope.registrationRequest = {};
        $scope.registrationResult = {};
        $scope.errormsg = null;
        $scope.backendCallLoading = false;

        $scope.register = function () {
            $scope.backendCallLoading = true;
            return hal
                .post(REGISTRATION_HANDLE_NEW_REQUEST_URL, $scope.registrationRequest)
                .then(
                    function (response) {
                        $scope.registrationResult = response.data;
                        $scope.backendCallLoading = false;
                    },
                    function (response) {
                        $scope.errormsg = "Fehler " + response.status + " beim Verarbeiten des Services "
                            + REGISTRATION_HANDLE_NEW_REQUEST_URL + " mit folgenden Daten"
                            + JSON.stringify($scope.registrationRequest) + response.data;
                        $scope.backendCallLoading = false;
                    });
        };

        $scope.addAdditionalEmail = function () {
            $scope.backendCallLoading = true;
            return hal
                .post(REGISTRATION_ADD_ADDITIONAL_EMAIL_URL, $scope.registrationRequest)
                .then(
                    function (response) {
                        $scope.registrationResult = response.data;
                        $scope.backendCallLoading = false;
                    },
                    function (response) {
                        $scope.errormsg = "Fehler " + response.status + " beim Verarbeiten des Services "
                            + REGISTRATION_ADD_ADDITIONAL_EMAIL_URL + " mit folgenden Daten"
                            + JSON.stringify($scope.registrationRequest) + response.data;
                        $scope.backendCallLoading = false;
                    });
        };

        $scope.cancelAddtionalEmail = function () {
            $scope.registrationResult = {};
        };
    }]);

app.controller('UnsubscribeCtrl', ['hal', '$scope',
    function (
        hal,
        $scope
    ) {
        var UNSUBSCRIBE_REQUEST_URL = '/unsubscribe';

        $scope.backendCallLoading = false;
        $scope.errormsg = null;
        $scope.unsubscribeRequest = {};
        $scope.unsubscribeResult = {};

        $scope.unsubscribe = function () {
            $scope.backendCallLoading = true;

            return hal
                .post(UNSUBSCRIBE_REQUEST_URL, $scope.unsubscribeRequest)
                .then(
                    function (response) {
                        $scope.unsubscribeResult = response.data;
                        $scope.backendCallLoading = false;
                    },
                    function (response) {
                        $scope.errormsg = "Fehler " + response.status + " beim Verarbeiten des Services "
                            + UNSUBSCRIBE_REQUEST_URL + " mit folgenden Daten"
                            + JSON.stringify(unsubscribeRequest) + response.data;
                        $scope.backendCallLoading = false;
                    }
                );
        };
    }
]);
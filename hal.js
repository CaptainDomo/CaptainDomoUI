(function () {
    'use strict';

    angular
        .module('cdpi.hal', [])
        .constant('CONFIG_JSON_PATH', 'config.json')
        .service('hal', Hal);

    function Hal(
        $http,
        $q,
        CONFIG_JSON_PATH
    ) {
        var vm = this;
        var BACKEND_BASE_URL;


        vm.buildCompleteUrl = buildCompleteUrl;
        vm.get = get;
        vm.post = post;
        vm.put = put;


        function get(url) {
            return buildCompleteUrl(url).then(function (url) {
                return $http.get(url);
            });
        }

        function post(url, payload) {
            return buildCompleteUrl(url).then(function (url) {
                return $http.post(url, payload);
            });
        }

        function put(url, payload) {
            return buildCompleteUrl(url).then(function (url) {
                return $http.put(url, payload);
            });
        }

        function buildCompleteUrl(url) {
            return getBaseURl().then(function (baseUrl) {
                return baseUrl + prefixURL(url);
            });
        }

        function getBaseURl() {
            if (!BACKEND_BASE_URL) {
                return $http
                    .get(CONFIG_JSON_PATH)
                    .then(function (response) {
                        BACKEND_BASE_URL = response.data.backend_base_url;
                        return response.data.backend_base_url;
                    });
            } else {
                return $q(function (resolve) {
                    resolve(BACKEND_BASE_URL);
                });
            }
        }

        function prefixURL(url) {
            if (url.charAt(0) !== '/') {
                url = '/' + url;
            }

            return url;
        }
    }
})();

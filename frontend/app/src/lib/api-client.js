/*global Backbone */
var Lavabox = Lavabox || {
    app: {},
    views: {},
    collections: {},
    models: {},
    routers: {},
    utils: {},
    lib: {},
    adapters: {}
};

Lavabox.lib.apiClient = Lavabox.lib.apiClient || (function () {

    var APP_KEY = 'ms16YTNdKdfEVvyye8Hq2Q3xx0g3MxV2W7uuEwxD';
    var REST_KEY = 'VLYJDJOrsjW9WwDZrHcYkx1URejOUBtitdKtd2YC';

    var REST_URL = 'https://api.parse.com/1'

    var SESSION_TOKEN;

    // Private methods

    // Public methods

    var createUrl = function(resourceUrl) {
        return (REST_URL + resourceUrl);
    }

    var request = function(method, resourceUrl, params, constraints, successCallback, errorCallback) {
        
        var url = createUrl(resourceUrl);

        var stringParams = JSON.stringify(params);

        var xhr = new XMLHttpRequest();

        xhr.open(method, url, false);

        xhr.setRequestHeader('X-Parse-Application-Id', APP_KEY);
        xhr.setRequestHeader('X-Parse-REST-API-Key', REST_KEY);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.send(stringParams);

        if (xhr.status == 201) {
            successCallback(xhr.response);
        } else {
            errorCallback(xhr.response);
        }
    }

    return {
        'request': request
    }

}());
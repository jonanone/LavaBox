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

Lavabox.models.User = Backbone.Model.extend({
    // Default attributes for the todo
    // and ensure that each todo created has `title` and `completed` keys.
    defaults: {
    }
}, {
    apiResource: '/users',
    currentUser: undefined,
    signUp: function (params, successCallback, errorCallback) {
        if (!params || !params.username || !params.password) {
            errorCallback();
        }
        Lavabox.lib.apiClient.request('POST', 
                                        Lavabox.models.User.apiResource, 
                                        params, 
        function (userDataString) {
            var newUserData = JSON.parse(userDataString);
            Lavabox.models.User.currentUser = new Lavabox.models.User({
                'id' : newUserData.objectId,
                'token' : newUserData.sessionToken,
                'username': params.username
            });
        }, function (argument) {
            console.log('Error creating users');
            console.log(argument);
        });
    }
});
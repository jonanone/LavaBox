/*global Backbone */
var Lavabox = Lavabox || {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

(function () {
    'use strict';

    // Todo Router
    // ----------
    var LavaboxRouter = Backbone.Router.extend({
        routes: {
            '': 'home'
        },

        home: function (param) {
            new Lavabox.views.LoginView().render();
        }
    });

    Lavabox.routers.LavaboxRouter = new LavaboxRouter();
    Backbone.history.start();
})();
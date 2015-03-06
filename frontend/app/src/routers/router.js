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

(function () {
    'use strict';

    // Lavabox Router
    // ----------
    var LavaboxRouter = Backbone.Router.extend({
        routes: {
            '':         'home',
            'home':     'home',
            'login':    'login',
            'newUser':  'signUp'
        },

        initialize: function(app) {
            this.app = app;
        },

        home: function (param) {
            if (!Lavabox.models.User.currentUser) {
                if (!this.app.homeView) {
                    new Lavabox.views.HomeView(Lavabox.app).render();
                } else {
                    
                }
            } else {
                new Lavabox.views.LoginView().render();
            }
        },

        login: function (param) {
            if (Lavabox.models.User.currentUser) {
                new Lavabox.views.HomeView(Lavabox.app).render();
            } else {
                new Lavabox.views.LoginView().render();
            }
        },

        signUp: function (param) {
            new Lavabox.views.SignupView().render();
        },

    });

    Lavabox.routers.LavaboxRouter = new LavaboxRouter(Lavabox.app);
    Backbone.history.start();
})();
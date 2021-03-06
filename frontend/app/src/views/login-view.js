/*global Backbone, jQuery, _, ENTER_KEY */
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

Lavabox.views.LoginView = Backbone.View.extend({

    el: 'body',

    loginTemplate: this["JST"]["app/src/templates/login.ejs"],

    events: {
        'click #signup_link': 'createOnEnter'
        // 'click #clear-completed': 'clearCompleted',
        // 'click #toggle-all': 'toggleAllComplete'
    },
    initialize: function () {
        
    },

    render: function () {
        this.$el.html((this.loginTemplate()));
        return this;
    },

    createOnEnter: function (argument) {
        Lavabox.routers.LavaboxRouter.navigate("newUser", {trigger: true});
    }
});
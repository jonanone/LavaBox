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

Lavabox.views.SignupView = Backbone.View.extend({

    el: 'body',

    signupTemplate: this["JST"]["app/src/templates/signup.ejs"],

    events: {
        'click #signup_link': 'createOnEnter'
        // 'click #clear-completed': 'clearCompleted',
        // 'click #toggle-all': 'toggleAllComplete'
    },
    initialize: function () {
        
    },

    render: function () {
        this.$el.html((this.signupTemplate()));
        return this;
    },

    createOnEnter: function (argument) {
        alert('Hago click');
    }
});
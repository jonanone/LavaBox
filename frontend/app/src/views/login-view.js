/*global Backbone, jQuery, _, ENTER_KEY */
var Lavabox = Lavabox || {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

(function ($) {
    'use strict';

    Lavabox.views.LoginView = Backbone.View.extend({

        el: 'body',

        loginTemplate: _.template($('#login-template').html()),

        events: {
            // 'keypress #new-todo': 'createOnEnter',
            // 'click #clear-completed': 'clearCompleted',
            // 'click #toggle-all': 'toggleAllComplete'
        },
        initialize: function () {
            
        },

        render: function () {
            this.$el.html((this.loginTemplate()));
            return this;
        }
    });
})(jQuery);
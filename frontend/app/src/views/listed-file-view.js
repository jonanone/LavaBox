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

Lavabox.views.ListedFileView = Backbone.View.extend({

    tagName: 'tr',

    listedFileTemplate: this["JST"]["app/src/templates/listed-file.ejs"],

    events: {
        // 'click #clear-completed': 'clearCompleted',
        // 'click #toggle-all': 'toggleAllComplete'
    },

    render: function () {
        this.$el.html(this.listedFileTemplate(this.model.toJSON()));
        return this;
    }
});
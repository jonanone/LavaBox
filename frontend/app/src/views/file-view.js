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

Lavabox.views.FileView = Backbone.View.extend({

    el: '#file-container',

    fileTemplate: this["JST"]["app/src/templates/file.ejs"],

    events: {
        // 'click #clear-completed': 'clearCompleted',
        // 'click #toggle-all': 'toggleAllComplete'
    },

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.fileTemplate({'url':this.model.get('url')}));

        var fileSubfiles = this.model.get('files');
        fileSubfiles.forEach(function(subfile){ 
            var listedFileView = new Lavabox.views.ListedFileView({model: subfile});
            var renderedFileView = listedFileView.render().el;
            this.$('#fileSubfiles').append(listedFileView.render().el);
        });

        return this;
    }
});
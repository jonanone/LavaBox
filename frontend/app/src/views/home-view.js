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

Lavabox.views.HomeView = Backbone.View.extend({

    el: 'body',

    homeTemplate: this["JST"]["app/src/templates/home.ejs"],

    events: {
        // 'click #clear-completed': 'clearCompleted',
        // 'click #toggle-all': 'toggleAllComplete'
    },
    initialize: function (app) {
        this.app = app;
        this.app.homeView = this;
    },

    render: function () {
        this.$el.html(this.homeTemplate({'name':'Ander'}));
        this.updateContent();
        return this;
    },
    updateContent: function (fileUrl) {
        var fileToLoad;
        if (fileUrl) {
            // fileToLoad = app.files({'url': 'fileUrl'});
            // fileToLoad = fileModel;
        } else {
            fileToLoad = new Lavabox.models.File({
                'url': '/'
            });
            var filesCollection = new Lavabox.collections.Files;
            for (var i = 0; i < 5; i++) {
                var model = new Lavabox.models.File({'name': 'ander', 'type': 'directory'});
                filesCollection.add(model);
            };
            fileToLoad.set('files', filesCollection);
        }
        this.fileView = this.fileView || new Lavabox.views.FileView();
        this.fileView.model = fileToLoad;
        this.fileView.render();
    }
});
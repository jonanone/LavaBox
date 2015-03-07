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

        this.listenTo(this.model.files, 'reset', this.refreshList);
    },

    render: function () {

        var that = this;
        
        this.$el.html(this.fileTemplate({'url':this.model.get('url')}));

        this.$loading  = this.$('#loading');
        this.$subfiles = this.$('#subfiles');

        this.refreshList();

        return this;
    },
    refreshList: function() {

        var that = this;

        var fileSubfiles = this.model.files;

        if (fileSubfiles.length > 0) {
            this.$loading.hide();
            this.$subfiles.show();
            fileSubfiles.forEach(function(subfile){ 
                var listedFileView = new Lavabox.views.ListedFileView({model: subfile});
                that.listenTo(listedFileView, 'selected', that.itemSelected);
                that.listenTo(listedFileView, 'deselected', that.itemDeselected);
                this.$('#fileSubfiles').append(listedFileView.render().el);
            });
        } else {
            this.$loading.show();
            this.$subfiles.hide();
            this.model.fetchChildFiles();
        }

    },
    itemSelected: function(param) {
        console.log(param);
    },
    itemDeselected: function(param) {
        console.log(param);
    }
});
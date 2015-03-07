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

    initialize: function() {
        this.selected = false;
    },

    tagName: 'tr',

    listedFileTemplate: this["JST"]["app/src/templates/listed-file.ejs"],

    events: {
        // 'click #clear-completed': 'clearCompleted',
        // 'click #toggle-all': 'toggleAllComplete'
        'click [type="checkbox"]': 'selectCheckboxClicked',
        'click a': 'rowClicked'
    },

    render: function () {
        this.$el.html(this.listedFileTemplate(this.model.toJSON()));
        return this;
    },

    selectCheckboxClicked: function(e) {
        this.selected = !this.selected;
        var eventToTrigger = this.selected ? 'selected' : 'deselected'; 
        this.trigger(eventToTrigger);
    },

    rowClicked: function(e) {
        e.preventDefault();
        if (this.model.get('type') === 'file') {
            window.open(this.model.get('file').url, '_blank');
        } else {
        }
    }
});
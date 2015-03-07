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

Lavabox.models.File = Backbone.Model.extend({

    defaults: {

    },

    initialize: function() {
        this.files = new Lavabox.collections.Files;
    },
    
    fetchChildFiles : function() {
        var that = this;
        Lavabox.lib.parseManager.getSubfiles(this.parent, function (childCollection) {
            that.files.reset(childCollection.toJSON());
        }, function (argument) {
            console.log('Errrror');
        });   
    }
    
}, {
    apiResource: '/classes/file'
});
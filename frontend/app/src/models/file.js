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
    }
    
}, {
    apiResource: '/classes/file'
});
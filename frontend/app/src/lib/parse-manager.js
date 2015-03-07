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

// Temp Parse client manager. Used for development until the parse REST api client is built.
// I know Parse's SKD is built with Backbone features, but since the final idea
// is to launch the app with Django as backend to store files in s3, I want to decouple
// the app from Parse
//
// The roadmap is: Frontend with Parse client - API rest - Custom backbone sync

Lavabox.lib.parseManager = Lavabox.lib.parseManager || (function () {

    var APP_KEY     = 'ms16YTNdKdfEVvyye8Hq2Q3xx0g3MxV2W7uuEwxD';
    var REST_KEY    = 'VLYJDJOrsjW9WwDZrHcYkx1URejOUBtitdKtd2YC';
    var JAVASCRIPT_KEY = 'PU36ny5rezzInL6UWVsAVaG15352PUojzjq62j7N';

    Parse.initialize(APP_KEY, JAVASCRIPT_KEY);

    // Parse Models
    var File = Parse.Object.extend('File');

    var getSubfiles = function(parentFileId, successCallback, errorCallback) {
        
        var fileQuery   = new Parse.Query(File),
            LBXFile     = Lavabox.models.File,
            LBXFiles    = Lavabox.collections.Files;
        
        if (parentFileId) {
            var parentFile = new File();
            parentFile.objectId = parentFileId;
            fileQuery.equalsTo('parent', parentFile);
        } else {
            fileQuery.doesNotExist('parent');
        }

        fileQuery.find().then(function (files) {
            if (files.length > 0) {
                var filesCollection = new LBXFiles();
                for (var i = 0; i < files.length; i++) {
                    var currentFile = new LBXFile(files[i].toJSON());
                    filesCollection.add(currentFile);
                };
                successCallback(filesCollection);
            }
        }, function (error) {
            // TODO: Handle error
        })
    }

    // var request = function(method, resourceUrl, params, constraints, successCallback, errorCallback) {
        
    //     var url = createUrl(resourceUrl);

    //     var stringParams = JSON.stringify(params);

    //     var xhr = new XMLHttpRequest();

    //     xhr.open(method, url, false);

    //     xhr.setRequestHeader('X-Parse-Application-Id', APP_KEY);
    //     xhr.setRequestHeader('X-Parse-REST-API-Key', REST_KEY);
    //     xhr.setRequestHeader('Content-Type', 'application/json');

    //     xhr.send(stringParams);

    //     if (xhr.status == 201) {
    //         successCallback(xhr.response);
    //     } else {
    //         errorCallback(xhr.response);
    //     }
    // }

    return {
        'getSubfiles': getSubfiles
    }

}());
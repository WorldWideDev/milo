myApp.factory('MainFactory', function($http){
    var factory = {}
    factory.event = function(callback){
        $http.get('/').success(function(data){
            callback(data)
        })
    }
    return factory
})

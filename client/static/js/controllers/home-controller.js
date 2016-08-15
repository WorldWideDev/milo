myApp.controller('HomeController', function($location, UserFactory){
    self = this;
    self.event = function(){
        UserFactory.event(function(data){
            self.stuff = data
        })
    }

})

redditApp.service('User', ["$resource", function ($resource) {
    return $resource('/api/user/:id',{id: "@id"});
}]);

redditApp.service('SignInFormReveal', [ function () {
    
    // var statusArray = [];
    // var Status = function(){
    // 	return true;
    // }    

    // // var sendStatus = function(){
    // // 	return statusArray;
    // // }  

    // // var clearStatus = function(){
    // // 	statusArray = [];
    // // }

    return{
    	Status: true
    }
}]);

redditApp.service('SignUpFormReveal', [ function () {
    
    var statusArray = [];
    var Status = function(){
        return true;
    }    

    // var sendStatus = function(){
    //  return statusArray;
    // }  

    // var clearStatus = function(){
    //  statusArray = [];
    // }

    return{
        Status: Status
    }
}]);
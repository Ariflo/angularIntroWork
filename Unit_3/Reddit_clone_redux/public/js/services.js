redditApp.service('User', ["$resource", function ($resource) {
    return $resource('/api/user/:id',{id: "@id"});
}]);

redditApp.service('SignInFormReveal', [ function () {
    
    var statusArray = [];
    var getStatus = function(status){
    	statusArray.push(status);
    }    

    var sendStatus = function(){
    	return statusArray;
    }  

    var clearStatus = function(){
    	statusArray = [];
    }

    return{
    	getStatus: getStatus,
    	sendStatus:sendStatus,
    	clearStatus: clearStatus
    }
}]);

redditApp.service('SignUpFormReveal', [ function () {
    
    var statusArray = [];
    var getStatus = function(status){
    	statusArray.push(status);
    }    

    var sendStatus = function(){
    	return statusArray;
    }  

    var clearStatus = function(){
    	statusArray = [];
    }

    return{
    	getStatus: getStatus,
    	sendStatus:sendStatus,
    	clearStatus: clearStatus
    }
}]);
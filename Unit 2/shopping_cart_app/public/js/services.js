cartApp.service('passCartService', [ function() {
        
        var cartArr = [];
        var addCart = function(cart) {
            cartArr.push(cart);
        };

        var getCart = function(){
            return cartArr;
        };

        return {
          addCart: addCart,
          getCart: getCart
        };
}]);
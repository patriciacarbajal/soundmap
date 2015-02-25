

// var DataHelpers = {
//        getTrackData : function(id){
//            return _.find(Soundcloud.getFavorites(), function(f){
//               data : DataHelpers.getTrackData(id)
//           });
//       }
//   };

Soundcloud = {
    
    checkOAuth : function(){

        var Soundcloud = this;

        return Meteor.subscribe('SC.OAuth',function(){
            var user = Meteor.user();
            if(user){
                if(user.services.soundcloud){
                    var accessToken = user.services.soundcloud.accessToken;
                    if(accessToken){
                        console.log('setting access token');
                        SC.accessToken(accessToken);
                    }
                }
            }
        });
    }
};
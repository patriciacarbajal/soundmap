Template.userProfile.helpers({
  getTracks: function() {
    SC.get('/tracks', { q: "Hello" }, function(tracks) {
            for (var i=0; i < 5; i++ ) {
             console.log(  tracks[i].stream_url + " - " + tracks[i].title );
          }
        });
    },

  getFaves: function() {
    var user = Meteor.user();
    var user_id =  user.services.soundCloud.id;
    var urls = [];
    var titles = [];
     SC.get("/users/" + user_id + "/favorites", function(tracks) {
       for (var i=0; i < tracks.length; i++ ) {
          var favContainer = document.getElementById("favorites-container");
          var fav = document.createElement('h4');
          fav.innerHTML = tracks[i].title;
          favContainer.appendChild(fav);
          urls[i] = tracks[i].stream_url;
          titles[i] = tracks[i].title;
          }
    })
    Meteor.users.update( { _id: Meteor.userId()}, { $set: { profile: {favoritesUrls: urls, favoritesTitles: titles }}});

  }

});

Template.userProfile.events({

  'click #update-location': function(){

    function success(pos) {
      var user = Meteor.user();
      var userCrd = pos.coords;
      var userLng = pos.coords.longitude;
      var userLat = pos.coords.latitude;

      Meteor.users.update( { _id: Meteor.userId()}, { $set: { profile: {lat: userLat, lng: userLng }}});
    };

    navigator.geolocation.getCurrentPosition(success);

}

});
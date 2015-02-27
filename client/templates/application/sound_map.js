Tracker.autorun(function () {
  Meteor.subscribe("userData");
  Meteor.subscribe("users");
  Meteor.subscribe("markers")
  Meteor.subscribe("markerData");
});


Template.soundMap.helpers({

  exampleMapOptions: function() {

    if (GoogleMaps.loaded()) {
      var user = Meteor.user()
      return {
          center: {lat: 40, lng: -70},
          zoom: 2
      };
    };
  },
  //test to play song
  playSong: function() {
    SC.stream("/tracks/293", function(sound){
    // sound.play();
  });
  }

});

Template.soundMap.created = function() {

  GoogleMaps.ready('exampleMap', function(map) {
    var allMarkers = Markers.find().fetch();
    for  (var i = 0; i < allMarkers.length; i++){
      var user = Meteor.users.findOne(allMarkers[i].user);
      var marker = new google.maps.Marker({
        position: {lat: allMarkers[i].latitude, lng: allMarkers[i].longitude},
        map: map.instance,
        customInfo: user.profile.favoritesTitles
      });

    google.maps.event.addListener(marker, 'click', function() {
      alert(this.customInfo)
    });
  }
  });
};



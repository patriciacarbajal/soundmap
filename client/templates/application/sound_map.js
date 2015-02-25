Template.soundMap.helpers({

  exampleMapOptions: function() {

    if (GoogleMaps.loaded()) {
      var user = Meteor.user()
      return {
          center: {lat: user.profile.lat, lng: user.profile.lng},
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
  var user = Meteor.user();

  GoogleMaps.ready('exampleMap', function(map) {
    var marker = new google.maps.Marker({
      position: {lat: user.profile.lat, lng: user.profile.lng},
      map: map.instance
    });
  });
};




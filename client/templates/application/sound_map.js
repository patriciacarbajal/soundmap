Template.soundMap.helpers({

  exampleMapOptions: function() {

    if (GoogleMaps.loaded()) {
      var user = Meteor.user()
      return {
          center: {lat: userLat, lng: userLng},
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
    var user = Meteor.user();
    var marker = new google.maps.Marker({
      position: {lat: userLat, lng: userLng},
      map: map.instance
    });
  });
};




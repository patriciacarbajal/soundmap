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
          center: {lat: user.profile.userLatitude, lng: user.profile.userLongitude},
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
      position: {lat: user.profile.userLatitude, lng: user.profile.userLongitude},
      map: map.instance,
      customInfo: "userMarker",
    });

    google.maps.event.addListener(marker, 'click', function() {
      alert(user.services.soundCloud.full_name)
    });
  });
};

// Template.soundMap.events({

//   'click marker': function(){
//     alert("!!");
//   }
// });




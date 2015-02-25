if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();

  SC.initialize({
    client_id: "6480e772167ce0bdef50845c5543221f",
  });
  
  });
}


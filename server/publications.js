if (Meteor.isServer) {


  Meteor.publish("userData", function () {
    if (this.userId) {
      return Meteor.users.find({_id: this.userId},
                               {fields: { userLatitude: 1, userLongitude: 1, favoritesUrls: 1, favoritesTitles: 1, services: 1 }});
    } else {
      this.ready();
    }
  });


  Meteor.publish("users", function () {
    if (this.userId) {
      return Meteor.users.find({});
    } 
  });


  Meteor.publish("markerData", function () {
    return Markers.find( {},
      {fields: { user: 1, latitude: 1, longitude: 1 }});
  })

  Meteor.publish("markers",function () {
    return Markers.find();
  })

  Meteor.methods({
    insertNewMarker: function (user, latitude, longitude) {
    Markers.insert({ user: user, latitude: latitude, longitude: longitude });
  }
});
}
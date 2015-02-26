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
}

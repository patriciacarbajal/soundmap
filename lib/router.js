Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', { name: 'welcome'})

Router.route('/map', {
  name: 'soundMap',
  data: function(){
    Meteor.subscribe('users'), Soundcloud.checkOAuth();
    Meteor.subscribe("userData");
    Meteor.subscribe("markers");
    Meteor.subscribe("markerData");
    return Users.find();
  }
});

Router.route('/user', {
  name: 'userProfile',
  data: function(){
    Meteor.subscribe('users'), Soundcloud.checkOAuth();
    Meteor.subscribe("userData");
    Meteor.subscribe("markerData");
    Meteor.subscribe("markers");
    return Markers.find().fetch;
  }
});
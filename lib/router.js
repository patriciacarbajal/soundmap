Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', { name: 'welcome'})

Router.route('/map', {
  name: 'soundMap',
  data: function(){
    Meteor.subscribe('users'), Soundcloud.checkOAuth();
    return Users.findOne( "{{currentUser._id}}");
  }
});

Router.route('/user', {
  name: 'userProfile',
  data: function(){
    Meteor.subscribe('users'), Soundcloud.checkOAuth();
    return Users.findOne( "{{currentUser._id}}");
  }
});
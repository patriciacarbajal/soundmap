Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/', {name: 'soundMap'});

Router.route('/user', {
  name: 'userProfile',
  data: function(){
    return Users.findOne( "{{currentUser._id}}");
  }
});
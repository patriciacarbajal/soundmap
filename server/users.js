
  Meteor.startup(function () {

    Accounts.loginServiceConfiguration.remove({
        service: "soundcloud"
    });

    Accounts.loginServiceConfiguration.insert({
        service: "soundcloud",
        clientId : process.env.SC_CLIENT_ID,
        secret : process.env.SC_CLIENT_SECRET
    });
    
});

Accounts.onCreateUser(function(user) {

    user.profile['lat'] = 0;
    user.profile['lng'] = 0;
    user.profile['favoritesUrls'] = [];
    user.profile['favoritesTitles'] = [];
    return user;
});
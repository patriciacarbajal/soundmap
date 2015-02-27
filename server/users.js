if (Meteor.isServer){
  Meteor.startup(function () {

    Accounts.loginServiceConfiguration.remove({
        service: "soundcloud"
    });

    Accounts.loginServiceConfiguration.insert({
        service: "soundcloud",
        clientId : process.env.SC_CLIENT_ID,
        secret : process.env.SC_CLIENT_SECRET
    });

  // ServiceConfiguration.configurations.upsert(
  //   {service: "soundcloud"},
  //   {
  //     $set: {
  //       clientId: process.env.SC_CLIENT_ID,
  //       loginStyle: "popup",
  //       secret: process.env.SC_CLIENT_SECRET
  //     }
  //    } 
  // );

  

 });

  

}


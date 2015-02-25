// if (Meteor.isClient) {
//   Meteor.startup(function() {
//     GoogleMaps.load();
//   });
// }

// Template.body.helpers({
//   exampleMapOptions: function() {
//     if (GoogleMaps.loaded()) {
//       return {
//         center: new google.maps.LatLng(-37.8136, 144.9631),
//         zoom: 2
//       };
//     }
//   }
// });

// Template.body.created = function() {
//   GoogleMaps.ready('exampleMap', function(map) {
//     var marker = new google.maps.Marker({
//       position: map.options.center,
//       map: map.instance
//     });
//   });
// };

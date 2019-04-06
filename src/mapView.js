require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/BasemapToggle",
  "esri/widgets/BasemapGallery"
], function(Map, MapView, BasemapToggle, BasemapGallery) {

  var map = new Map({
    basemap: "topo"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 11,
    center: [114.16, 22.29], // longitude, latitude
  });

  // var basemapToggle = new BasemapToggle({
  //   view: view,
  //   nextBasemap: "satellite"
  // });

  // view.ui.add(basemapToggle, "bottom-right");

  var basemapGallery = new BasemapGallery({
   view: view,
   source: {
     portal: {
       url: "https://www.arcgis.com",
       useVectorBasemaps: false  // Load vector tile basemaps
     }
   }
 });

  view.ui.add(basemapGallery, "top-right");

});

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function(Map, MapView, FeatureLayer) {
  var map = new Map({
    basemap: "topo"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-118.71511,34.09042],
    zoom: 11
  });

  // Define a popup for Trails
  var popupTrails = {
    "title": "Trail Information",
    "content": function(){
       return "This is {TRL_NAME} with {ELEV_GAIN} ft of climbing.";
    }
  }
  // Create the layer and set the renderer
  var trails = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0",
    outFields: ["TRL_NAME","ELEV_GAIN"],
    popupTemplate: popupTrails
  });
  // Add the layer
  map.add(trails);

var trailheadsRenderer = {
  "type": "simple",
  "symbol": {
    "type": "picture-marker",
    "url": "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
    "width": 10.5,
    "height": 10.5
  }
}

// Define a popup for Trailheads
var popupTrailheads = {
  "title": "Trailhead",
  "content": "<b>Trail:</b> {TRL_NAME}<br><b>City:</b> {CITY_JUR}<br><b>Cross Street:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft"
}

// Create the layer and set the popup
var trailheads = new FeatureLayer({
  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
  outFields: ["TRL_NAME","CITY_JUR","X_STREET","PARKING","ELEV_FT"],
  popupTemplate: popupTrailheads
});

map.add(trailheads);
});

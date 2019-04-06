require([
  "esri/Map",
  "esri/views/SceneView"
], function(Map, SceneView) {

  var map = new Map({
    basemap: "topo"
  });

  var view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      tilt: 65,
      position: {
        x: 114.16,
        y: 22.29,
        z: 25000 // meters
      }
    }
  });
});

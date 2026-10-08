    var map = L.map('map').setView([29.88829, -97.93428], 17);

    var mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';

    L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18
    }).addTo(map);


function calculatePolygonArea() {
  var polygon = turf.polygon([[
    [-97.9420, 29.8910],
    [-97.9345, 29.8910],
    [-97.9345, 29.8855],
    [-97.9420, 29.8855],
    [-97.9420, 29.8910]
  ]]);

  var area = turf.area(polygon);
  var polygonLayer = L.geoJSON(polygon).addTo(map);
  document.getElementById("areaDisplay").innerHTML =
      "Polygon Area: " + area.toFixed(2) + "square meters";
  return polygonLayer;
}
 var polygonLayer = calculatePolygonArea();

    var point = turf.point([-97.93428, 29.88829]);
    L.geoJSON(point).addTo(map);

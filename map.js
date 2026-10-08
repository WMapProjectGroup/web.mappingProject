    var map = L.map('map').setView([29.8884, -97.9384], 14);

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
  L.geoJSON(polygon).addTo(map);
  document.getElementById("areaDisplay").innerHTML =
      "Polygon Area: " + area.toFixed(2) + "square meters";
}
calculatePolygonArea();

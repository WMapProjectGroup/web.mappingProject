    var map = L.map('map').setView([29.88829, -97.93428], 17);

    var mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';

    L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18
    }).addTo(map);

function measureDistance(lat1, lng1, lat2, lng2) {
  var point1 = turf.point([lng1, lat1]);
  var point2 = turf.point([lng2, lat2]);
  var distance = turf.distance(point1, point2, { units: 'miles' });
    L.marker([lat1, lng1]).addTo(map).bindPopup("<b>Bobcat Stadium</b>");
    L.marker([lat2, lng2]).addTo(map).bindPopup("<b>Sewell Park</b><br>Distance: " + distance.toFixed(2) + " miles from Stadium").openPopup();
    L.polyline([[lat1, lng1], [lat2, lng2]], { color: 'blue', weight: 4, dashArray: '5, 10' }).addTo(map);
    }
    measureDistance(29.8911, -97.9256, 29.888358, -97.933643);

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
    var bbox = [-97.9355, 29.8875, -97.9330, 29.8890];

    var poly = turf.bboxPolygon(bbox);
    L.geoJSON(poly,{
      style: {
        color:'#800000',
        weight: 3,
        fillColor: '#5c0000',
        fillOpacity: 0.3
      }
    }).addTo(map)

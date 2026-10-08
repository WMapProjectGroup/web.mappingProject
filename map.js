    var map = L.map('map').setView([29.8884, -97.9384], 14);

    var mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';

    L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18
    }).addTo(map);

    function createBuffer() {
        var point = turf.point([-97.9384, 29.8884]);

        var buffered = turf.buffer(point, 1, {
            units: 'miles'
        });

        L.geoJSON(buffered).addTo(map);

        L.marker([29.8884, -97.9384])
            .addTo(map)
            .bindPopup("Buffer Center");
    }

    createBuffer();

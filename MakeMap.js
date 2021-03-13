function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {lat: 37.775, lng: -122.434},
        mapTypeId: "roadmap",
    });

    map.data.addGeoJson(
        getBoundaries()
    );

    map.data.setStyle(function (feature) {
        let district = feature.getProperty('DISTRICT');
        let color = "green";
        if (district === "CENTRAL" || district === "MISSION") {
            color = "orange";
        } else if (district === "BAYVIEW" || district === "TARAVAL" || district === "INGLESIDE") {
            color = "yellow";
        } else if (district === "SOUTHERN" || district === "NORTHERN") {
            color = "red";
        }
        return {
            fillColor: color,
            strokeWeight: 0.5,
            strokeColor: color
        }
    });
}
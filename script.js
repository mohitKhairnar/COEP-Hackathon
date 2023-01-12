let locationButton = document.getElementById("see-your-location");
let locationDiv1 = document.getElementById("latitude");
let locationDiv2 = document.getElementById("longitude");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        locationDiv1.innerHTML = "Geolocation is not supported by this browser.";
        locationDiv2.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    locationDiv1.innerHTML = "Latitude: " + position.coords.latitude;
    locationDiv2.innerHTML = "Longitude: " + position.coords.longitude;
    var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
        .bindPopup(data.address.city)
        .openPopup();
}
document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-26.986111, -66.733333], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker([-26.988259032403032, -66.73797058911501]).addTo(map).bindPopup(`
        <h5 class ="MRC_title">Museo Rural Comunitario</h5>
        <p>MUSEO RURAL COMUNITARIO manejado por la comunidad del valle de El Bolsón, Belén, Catamarca.</p>
        <img src="https://shorturl.at/ZRYSp">
    `);

    L.marker([-26.98440183501122, -66.73915922225804]).addTo(map).bindPopup(`
        <h5>Hostería Pirucha</h5>
    `);
});

import { sitios } from '../../dist/assets/data/markers/sitios'

document.addEventListener("DOMContentLoaded", function() {
    const mymap = new L.map('map').setView([0, 0], 13);

tileLayerSelect(tileLayers.baseLayers.esri.worldImagery.map, {
    attribution: tileLayers.baseLayers.esri.worldImagery.atribution
}).addTo(mymap);

    // Carga dinámica de los marcadores
sitios.forEach((point) => {
    const markerInstance = marker([point.lat, point.lon]).addTo(mymap);
    markerInstance.bindPopup(`<b>${point.name}</b>`); // Agregar pop-up con el nombre del sitio
});

mymap.fitBounds(sitios.map(point => [point.lat, point.lon]));

});


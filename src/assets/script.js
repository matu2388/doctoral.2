import L from '../../node_modules/leaflet/dist/leaflet';
//import { Map, marker, point } from 'leaflet';
import { sitios } from '../../dist/assets/data/markers/sitios';
import { tileLayerSelect } from '../../config/tile-layer/function';
import { tileLayers} from '../../config/tile-layer/data';

document.addEventListener("DOMContentLoaded", function() {
    const map = new L.map('map').setView([-26.988189888230163, -66.73794507576763], 13);

tileLayerSelect(tileLayers.baseLayers.esri.worldImagery.map, {
    attribution: tileLayers.baseLayers.esri.worldImagery.atribution
}).addTo(map);

    // Carga dinámica de los marcadores
sitios.forEach((point) => {
    const markerInstance = L.marker([point.lat, point.lon]).addTo(map);
    markerInstance.bindPopup(`<b>${point.name}</b>`); // Agregar pop-up con el nombre del sitio
});

map.fitBounds(sitios.map(point => [point.lat, point.lon]));

});


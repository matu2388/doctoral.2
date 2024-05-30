import L from 'leaflet';

export function tileLayerSelect(url, options) {
    return L.tileLayer(url, options);
}
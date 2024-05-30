import { TileLayer, tileLayer } from "leaflet";
import { tileLayers, tileLayersWMS } from "./data";
import { ITilerLayerOptions } from "./option.interface";

export const tileLayerSelect = (
    layer = tileLayers.baseLayers.esri.worldImagery.map,
    options = {
        minZoom: 0,
        maxZoom: 20,
        attribution: tileLayers.baseLayers.esri.worldImagery.atribution,
    }
) => {
    return tileLayer(layer, options);
};


export const tileLayerWMSSelect = (
    service = tileLayersWMS.mundialis.baseUrl, 
    options = {
        minZoom: 0,
        maxZoom: 20,
        attribution: tileLayers.baseLayers.esri.worldImagery.atribution,
        layers: tileLayersWMS.mundialis.layers.dark,
        format: 'image/png',
        transparent: true,
    }   
) => {
    return tileLayer.wms(service, options);
};


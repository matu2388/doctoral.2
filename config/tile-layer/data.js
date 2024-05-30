export const tileLayers = {
    baseLayers: {
        esri: {
            worldStreetMap: {
                map: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
                atribution: ATRIBUTIONS_LIST.EsriWorldTopoMap
            },
            worldImagery: {
                map: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                atribution: ATRIBUTIONS_LIST.EsriWorldImagery
            }
        }
    }
}

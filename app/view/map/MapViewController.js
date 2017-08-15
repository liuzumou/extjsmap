Ext.define('ExtMap.view.map.MapViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mapview',


    afterRender: function (view) {
        this.getReferences().legend.showAt(view.getWidth()-130,450);
    },

    onMapInit:function (map) {
        require(["esri/InfoTemplate",
                "esri/renderers/jsonUtils",
                "esri/dijit/Popup","esri/dijit/PopupTemplate","esri/dijit/Legend",
                "gis/GeojsonLayer"
            ],
            function (InfoTemplate,
                      jsonUtils,
                      Popup,PopupTemplate,Legend,
                      GeojsonLayer) {

                //业务图层
                var stationLayer = new GeojsonLayer({url:"data/map/station.json",infoTemplate:new InfoTemplate(mapconfig.templates.wq)});
                stationLayer.id = "stationLayer";
                stationLayer.renderer = jsonUtils.fromJson(mapconfig.renderers.wq);
                map.addLayer(stationLayer);


                //显示图例
                var legend = new Legend({
                    map: map,
                    layerInfos: [{
                        layer: stationLayer
                    }]
                }, "legendDiv");

                legend.startup();

            })

    }
});

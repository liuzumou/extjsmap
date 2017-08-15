Ext.define('ExtMap.view.Map', {
    extend: 'Ext.Component',
    alias: 'widget.map',
    config:{
        map: null
    },

    initComponent : function(){
        console.log('Map:initComponent');
        this.callParent();
    },

    onBoxReady : function(){
        console.log('Map:boxReady');
        this.callParent(arguments);
        if (window.require == null){
            this.update('ArcGIS Javascript API not load。');
        } else {
            this.createMap();
        }
    },

    afterRender: function(t, eOpts) {
        console.log('Map:afterRender');
    },

    createMap: function() {
        var me=this;
        require(["esri/map","esri/InfoTemplate",
            "esri/renderers/jsonUtils",
            "gis/TiandituLayer", "gis/GeojsonLayer",
            "dojo/domReady!"], function(Map,InfoTemplate,
                                        jsonUtils,
                                        TiandituLayer,GeojsonLayer) {
            //this.body.dom
            var map = new Map(me.getId(), {
                //basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
                center: [111, 28.5], // longitude, latitude
                zoom: 7,
                showLabels : true
            });

            //底图--天地图 vec/img/ter
            var baseLayer = new TiandituLayer({type:'ter',wkid:4326});
            baseLayer.id = "BASE_LYR";
            var annolayer = new TiandituLayer({type:'cta',wkid:4326});
            annolayer.id = "ANNO_LYR";
            map.addLayer(baseLayer);
            map.addLayer(annolayer);

            //边界图层--geoJson
            var boundaryLayer = new GeojsonLayer({url:"data/map/boundary/hunan.json",infoTemplate:false});
            boundaryLayer.id = "boudaryLayer";
            boundaryLayer.renderer = jsonUtils.fromJson(mapconfig.renderers.boundary);
            map.addLayer(boundaryLayer);


            me.setMap(map);
            me.fireEvent('mapInit',map);
            console.log('Map:mapCreated');
        });
    },



    // afterComponentLayout : function(w, h){
    //     console.log('afterComponentLayout');
    //     this.callParent(arguments);
    //     this.redraw();
    // },

    onResize: function(w, h, oW, oH){
        console.log('onResize');
        this.callParent(arguments);
        this.redraw();
    },

    redraw: function(){
        var map = this.getMap();
        if (map) {
            map.resize();
            map.reposition(true);
        }
    }

});
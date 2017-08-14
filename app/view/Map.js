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
        require(["esri/map","gis/TiandituLayer", "gis/GeojsonLayer","dojo/domReady!"], function(Map,TiandituLayer,GeojsonLayer) {
            //this.body.dom
            var map = new Map(me.getId(), {
                //basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
                center: [111, 28.5], // longitude, latitude
                zoom: 7,
                showLabels : true
            });

            //底图--天地图
            var baseLayer = new TiandituLayer({type:'vec',wkid:4326});
            baseLayer.id = "BASE_LYR";
            var annolayer = new TiandituLayer({type:'cva',wkid:4326});
            annolayer.id = "ANNO_LYR";
            map.addLayer(baseLayer);
            map.addLayer(annolayer);

            //业务边界--geoJson
            var geoJsonLayer = new GeojsonLayer({url:"data/map/boundary/jiangxi.json"});
            map.addLayer(geoJsonLayer);

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
            console.log('map resize');
        }
    }

});
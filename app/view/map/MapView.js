Ext.define('ExtMap.view.map.MapView',{
    extend: 'Ext.panel.Panel',
    xtype:'mapview',
    requires: [
        'ExtMap.view.map.MapViewController',
        'ExtMap.view.map.MapViewModel'
    ],

    controller: 'mapview',
    viewModel: {
        type: 'mapview'
    },

    layout:'fit',

    items:[
        {
            xtype:'map',
            reference:'map',
            listeners: {
                mapInit:'onMapInit'
            }
        }
    ]
});

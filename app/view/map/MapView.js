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
        },
        {
            xtype:'panel',
            reference:'legend',
            title: '图例',
            floating:true,
            width:120,
            height:220,
            html:'<div id="legendDiv"></div>'
        }
    ]
});

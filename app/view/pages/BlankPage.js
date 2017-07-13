Ext.define('ExtMap.view.pages.BlankPage', {
    extend: 'Ext.container.Container',
    xtype: 'pageblank',

    requires: [
        'Ext.container.Container'
    ],

    anchor : '100% -1',

    layout:{
        type:'vbox',
        pack:'center',
        align:'center'
    },

    items: [
        {
            xtype: 'box',
            cls: 'blank-page-container',
            html: '<div class=\'fa-outer-class\'><span class=\'x-fa fa-clock-o\'></span></div><h1>功能正在开发中!</h1><span class=\'blank-page-text\'>敬请期待</span>'
        }
    ]
});

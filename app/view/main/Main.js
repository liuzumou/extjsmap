Ext.define('ExtMap.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'ExtMap.view.main.MainController',
        'ExtMap.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    layout:{
        type:'vbox',
        align:'stretch'
    },
    
    listeners: {
        render: 'onMainViewRender'
    },

    items:[
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            height: 64,
            itemId: 'headerBar',
            items: [
                {
                    ui: 'AppMenuToggle',
                    width: 64,
                    iconCls:'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                {
                    xtype: 'component',
                    reference: 'appLogo',
                    cls: 'app-logo',
                    html: '<div class="logo"><b>信息管理系统&nbsp;|</b>&nbsp;子标题</div>'
                    // width: 250
                },
                {
                    margin: '0 0 0 200',
                    xtype: 'segmentedbutton',
                    height:65,
                    defaults:{
                        ui:'topMenu',
                        iconAlign: 'top',
                        scale: 'medium'//medium/large
                    },
                    items: [
                        {
                            topId: 'information',
                            reference: 'informationTopBtn',
                            text: '地图查询',
                            iconCls: 'x-fa fa-map-o'

                        }, {
                            topId: 'convoperation',
                            reference: 'convoperationTopBtn',
                            text: '信息查询',
                            iconCls: 'x-fa fa-search'
                        }, {
                            topId: 'emeroperation',
                            reference: 'emeroperationTopBtn',
                            text: '统计分析',
                            iconCls: 'x-fa  fa-bar-chart'
                        }, {
                            topId: 'consultation',
                            reference: 'consultationTopBtn',
                            text: '系统设置',
                            iconCls: 'x-fa fa-cogs'
                        }
                    ],
                    listeners: {
                        toggle:'onMainMenuToggle'
                    }
                },
                '->',
                {
                    xtype: 'tbtext',
                    text: '管理员',
                    cls: 'top-user-name'
                },
                {
                    xtype: 'image',
                    cls: 'header-right-profile-image',
                    height: 45,
                    width: 45,
                    alt:'当前用户',
                    src: 'resources/images/user.png'
                }
            ]
        },
        {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'navigation',
                    store: 'NavigationTree',
                    width: 250,
                    // scrollable: 'y',
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});

Ext.define('ExtMap.view.pages.ErrorBase', {
    // extend: 'Ext.window.Window',
    extend: 'Ext.container.Container',
    requires: [
        'ExtMap.view.authentication.AuthenticationController',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.layout.container.VBox',
        'Ext.toolbar.Spacer'
    ],

    controller: 'authentication',
    autoShow: true,
    cls: 'error-page-container',
    closable: false,
    title: '程序错误',
    titleAlign: 'center',
    maximized: true,
    modal: true,

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    }
});

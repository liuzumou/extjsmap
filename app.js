Ext.application({
    name: 'ExtMap',

    extend: 'ExtMap.Application',

    requires: [
        'ExtMap.view.main.Main'
    ],

    stores: [
        'NavigationTree'
    ],

    defaultToken : 'dashboard',
    
    mainView: 'ExtMap.view.main.Main'
	
});

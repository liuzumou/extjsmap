var mapconfig ={};

mapconfig.symbols ={};
mapconfig.layerDefs={};
mapconfig.renderers={};
mapconfig.templates={};
mapconfig.labels = {};



mapconfig.labels.default = {
    "labelExpressionInfo": {"value": "{stnm}"},
    "useCodedValues": false,
    "labelPlacement":"below-center",
    "symbol": {
        "type": "esriTS",
        "color": [0, 0, 0, 255],
        "horizontalAlignment": "center",
        "rotated": false,
        "kerning": true,
        "font": {
            "size": 10,
            "style": "normal",
            "variant": "normal",
            "weight": "bold",
            "family": "微软雅黑"
        }
    }
};



mapconfig.renderers.boundary={
    "type": "simple",
    "label": "",
    "description": "",
    "symbol": {
        "type": "esriSFS",
        "style": "esriSFSSolid",
        "color": [85,255,0,32],
        "outline": {
            "color": [0,92,230,255],
            "width": 1.5,
            "type": "esriSLS",
            "style": "esriSLSSolid"
        }
    }
};


mapconfig.renderers.wq ={
    "type": "uniqueValue",
    "field1": "RESULT",
    "defaultSymbol": {
        "type": "esriSMS",
        "style": "esriSMSCircle",
        "color": [85,255,0,32],
        "outline": {
            "color": [0,92,230,255],
            "width": 1.5,
            "type": "esriSLS",
            "style": "esriSLSSolid"
        }
    },
    "uniqueValueInfos": [{
        "value": "达标",
        "symbol": {
            "type": "esriSMS",
            "style": "esriSMSCircle",
            "size": 6,
            "color": [0, 255, 0, 128],
            "outline": {
                "color": [0, 0, 0, 255],
                "width": 1,
                "type": "esriSLS",
                "style": "esriSLSSolid"
            }
        }
    }, {
        "value": "不达标",
        "symbol": {
            "type": "esriSMS",
            "style": "esriSMSCircle",
            "size": 8,
            "color": [255, 0, 0, 255],
            "outline": {
                "color": [0, 0, 0, 255],
                "width": 1,
                "type": "esriSLS",
                "style": "esriSLSSolid"
            }
        }
    }]
};



mapconfig.templates.wq = {
    title: "${stcd} | ${stnm}",
    content:"<b>站名:&nbsp</b>${stnm}" +
    "<br><b>时间:&nbsp</b>2016-12-08 08:00" +
    "<br><b>PH:&nbsp</b>7.25" +
    "<br><b>溶解氧:&nbsp</b>10.99" +
    "<br><b>氨氮:&nbsp</b>0.66" +
    "<br><b>总有机碳:&nbsp</b>1.42" +
    "<br><b>高锰酸盐指数:&nbsp</b>3.56"+
    "<br><b>站点情况:&nbsp</b>正常"
};




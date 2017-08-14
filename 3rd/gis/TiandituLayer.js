define(
    ['dojo/_base/declare',
        "esri/SpatialReference",
        "esri/geometry/Extent",
        "esri/layers/TiledMapServiceLayer","esri/layers/TileInfo"],
    function (declare,
              SpatialReference,
              Extent,
              TiledMapServiceLayer,TileInfo) {
        return declare(TiledMapServiceLayer, {
            declaredClass: "TiandituLayer",

            /**
             * 天地图类型
             * vec: 矢量底图
             * cva: 矢量注记图层
             * eva: 矢量注记图层-英文注记
             *
             * img: 影像底图
             * cia: 影像注记图层
             * eia: 影像注记图层 -英文注记
             *
             * ter: 地形底图
             * cta: 地形注记图层
             *
             **/
            type:"vec",
            /**
             * webmerctor:102100,默认值
             * gcs:4326
             **/
            wkid:102100,
            subDomains:["t0", "t1", "t2"],
            mercatorLods:[
                {"level": 1, "resolution": 78271.51696402048, "scale": 2.958293554545656E8},
                {"level": 2, "resolution": 39135.75848201024, "scale": 1.479146777272828E8},
                {"level": 3, "resolution": 19567.87924100512, "scale": 7.39573388636414E7},
                {"level": 4, "resolution": 9783.93962050256, "scale": 3.69786694318207E7},
                {"level": 5, "resolution": 4891.96981025128, "scale": 1.848933471591035E7},
                {"level": 6, "resolution": 2445.98490512564, "scale": 9244667.357955175},
                {"level": 7, "resolution": 1222.99245256282, "scale": 4622333.678977588},
                {"level": 8, "resolution": 611.49622628141, "scale": 2311166.839488794},
                {"level": 9, "resolution": 305.748113140705, "scale": 1155583.419744397},
                {"level": 10, "resolution": 152.8740565703525, "scale": 577791.7098721985},
                {"level": 11, "resolution": 76.43702828517625, "scale": 288895.85493609926},
                {"level": 12, "resolution": 38.21851414258813, "scale": 144447.92746804963},
                {"level": 13, "resolution": 19.109257071294063, "scale": 72223.96373402482},
                {"level": 14, "resolution": 9.554628535647032, "scale": 36111.98186701241},
                {"level": 15, "resolution": 4.777314267823516, "scale": 18055.990933506204},
                {"level": 16, "resolution": 2.388657133911758, "scale": 9027.995466753102},
                {"level": 17, "resolution": 1.194328566955879, "scale": 4513.997733376551},
                {"level": 18, "resolution": 0.5971642834779395, "scale": 2256.998866688275},
                {"level": 19, "resolution": 0.2985821417389698, "scale": 1128.499433344138},
                {"level": 20, "resolution": 0.1492910708694849, "scale": 564.2497166720688}
            ],
            gcsLods:[
                {"level": 1, "resolution": 0.7031249999891485, "scale": 2.958293554545656E8},
                {"level": 2, "resolution": 0.35156249999999994, "scale": 1.479146777272828E8},
                {"level": 3, "resolution": 0.17578124999999997, "scale": 7.39573388636414E7},
                {"level": 4, "resolution": 0.08789062500000014, "scale": 3.69786694318207E7},
                {"level": 5, "resolution": 0.04394531250000007, "scale": 1.848933471591035E7},
                {"level": 6, "resolution": 0.021972656250000007, "scale": 9244667.357955175},
                {"level": 7, "resolution": 0.01098632812500002, "scale": 4622333.678977588},
                {"level": 8, "resolution": 0.00549316406250001, "scale": 2311166.839488794},
                {"level": 9, "resolution": 0.0027465820312500017, "scale": 1155583.419744397},
                {"level": 10, "resolution": 0.0013732910156250009, "scale": 577791.7098721985},
                {"level": 11, "resolution": 0.000686645507812499, "scale": 288895.85493609926},
                {"level": 12, "resolution": 0.0003433227539062495, "scale": 144447.92746804963},
                {"level": 13, "resolution": 0.00017166137695312503, "scale": 72223.96373402482},
                {"level": 14, "resolution": 0.00008583068847656251, "scale": 36111.98186701241},
                {"level": 15, "resolution": 0.000042915344238281406, "scale": 18055.990933506204},
                {"level": 16, "resolution": 0.000021457672119140645, "scale": 9027.995466753102},
                {"level": 17, "resolution": 0.000010728836059570307, "scale": 4513.997733376551},
                {"level": 18, "resolution": 0.000005364418029785169, "scale": 2256.998866688275},
                {"level": 19, "resolution": 2.68220901485e-6, "scale": 1128.499433344138},
                {"level": 20, "resolution": 1.341104507425e-6, "scale": 564.2497166720688}
            ],

            constructor: function (options) {
                if(options){
                    this.wkid = options.wkid || 102100;
                    this.type = options.type || "vec";
                }

                this.spatialReference = new SpatialReference(this.wkid);

                var extent,origin,lods;
                if(this.wkid == 4326){
                    extent = new Extent(-180, -90, 180, 90, this.spatialReference);
                    origin = {"x": -180,"y": 90};
                    lods = this.gcsLods;
                }else{
                    extent = new Extent(-20037508.3427892,-20037508.3427892,20037508.3427892,20037508.3427892, this.spatialReference);
                    origin = {"x": -20037508.342787,"y": 20037508.342787};
                    lods = this.mercatorLods;
                }

                this.initialExtent = (this.fullExtent = extent);
                this.dpi = 90.71428571428571;
                this.tileInfo = new TileInfo({
                    "dpi": 90.71428571428571,
                    "rows": 256,
                    "cols": 256,
                    "compressionQuality": 0,
                    "origin": origin,
                    "spatialReference":  {"wkid": this.wkid},
                    "lods": lods
                });
                this.loaded = true;
                this.onLoad(this);
            },


            getTileUrl: function (level, row, col) {
                var tileUrl;
                //"c"-地理坐标系，"w"-投影坐标系为
                var geoType = this.wkid==4326?"c":"w";

                var domain = this.subDomains[Math.floor(Math.random()*this.subDomains.length)];

                tileUrl = "http://"+ domain +".tianditu.com/" + this.type + "_" + geoType + "/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=" + this.type + "&STYLE=default&TILEMATRIXSET=" + geoType + "&TILEMATRIX=" + level + "&TILEROW=" + row + "&TILECOL=" + col + "&FORMAT=tiles";
                return tileUrl;
            }
        });
    });
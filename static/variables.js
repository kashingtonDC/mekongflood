WMSURL = "http://192.170.232.40:8080/geoserver/testing/wms?"

customParams = [
	"FORMAT=image%2Fpng",
	"LAYERS=testing:new_flood",
	"SRS=EPSG:900913"
];

tileHeight = 256;
tileWidth = 256;

wmsStandardParams = [
	"REQUEST=GetMap",
	"SERVICE=WMS&",
	"VERSION=1.3.0",
	"TRANSPARENT=TRUE",
	"BGCOLOR=0xFFFFFF",
	"WIDTH="+ tileWidth,
	"HEIGHT="+ tileHeight
];

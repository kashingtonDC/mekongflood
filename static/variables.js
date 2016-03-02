WMSURL = "http://192.170.232.61:8080/geoserver/DEVELOP/wms?"

customParams = [
	"FORMAT=image%2Fpng",
	"LAYERS=DEVELOP:productTest",
	"SRS=EPSG:900913"
];

tileHeight = 256;
tileWidth = 256;

wmsStandardParams = [
	"REQUEST=GetMap",
	"SERVICE=WMS&",
	"VERSION=1.1.0",
	"TRANSPARENT=TRUE",
	"BGCOLOR=0xFFFFFF",
	"WIDTH="+ tileWidth,
	"HEIGHT="+ tileHeight
];

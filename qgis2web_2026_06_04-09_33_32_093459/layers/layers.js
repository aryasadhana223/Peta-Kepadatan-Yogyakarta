var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Yogyakarta_kota_1 = new ol.format.GeoJSON();
var features_Yogyakarta_kota_1 = format_Yogyakarta_kota_1.readFeatures(json_Yogyakarta_kota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yogyakarta_kota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yogyakarta_kota_1.addFeatures(features_Yogyakarta_kota_1);
var lyr_Yogyakarta_kota_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yogyakarta_kota_1, 
                style: style_Yogyakarta_kota_1,
                popuplayertitle: 'Yogyakarta_kota',
                interactive: true,
    title: 'Yogyakarta_kota<br />\
    <img src="styles/legend/Yogyakarta_kota_1_0.png" /> Rendah (8-12 per km2)<br />\
    <img src="styles/legend/Yogyakarta_kota_1_1.png" /> Sedang (12-14 per km2)<br />\
    <img src="styles/legend/Yogyakarta_kota_1_2.png" /> Tinggi (14-18 per km2)<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Yogyakarta_kota_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Yogyakarta_kota_1];
lyr_Yogyakarta_kota_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Nama Kecamatan ', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'Join_No': 'Join_No', 'Join_Luas': 'Luas Wilayah (ha)', 'Join_Pendu': 'Jumlah Penduduk (ribu)', 'Join_Kepad': 'Kepadatan Penduduk (ribu/km2)', 'Join_Banji': 'Join_Banji', 'Join_Cuaca': 'Join_Cuaca', 'Join_Erups': 'Join_Erups', 'Join_Gelom': 'Join_Gelom', 'Join_Gel_1': 'Join_Gel_1', 'Join_Gempa': 'Join_Gempa', 'Join_Kebak': 'Join_Kebak', 'Join_Keker': 'Join_Keker', 'Join_Tanah': 'Join_Tanah', });
lyr_Yogyakarta_kota_1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'LUAS': 'Hidden', 'Field': 'Hidden', 'Join_No': 'Hidden', 'Join_Luas': 'TextEdit', 'Join_Pendu': 'TextEdit', 'Join_Kepad': 'TextEdit', 'Join_Banji': 'Hidden', 'Join_Cuaca': 'Hidden', 'Join_Erups': 'Hidden', 'Join_Gelom': 'Hidden', 'Join_Gel_1': 'Hidden', 'Join_Gempa': 'Hidden', 'Join_Kebak': 'Hidden', 'Join_Keker': 'Hidden', 'Join_Tanah': 'Hidden', });
lyr_Yogyakarta_kota_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Join_Luas': 'inline label - always visible', 'Join_Pendu': 'inline label - always visible', 'Join_Kepad': 'inline label - always visible', });
lyr_Yogyakarta_kota_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
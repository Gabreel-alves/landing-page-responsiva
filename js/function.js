/* window.onload = function(){
    
    var map;

    function initialize(){

        var mapProp = {
            center: new google.maps.LatLng(-27.648598,-48.577423), scrollWheel:false,
        
            zoom:12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("mapa"), mapProp)
    }

    function addMarker(lat, lng, icon,content, click){

        var LatLng = {'lat': lat, 'long':long};
        var marker = new google.maps.Marker({
            position:LatLng,
            map:map,
            icon: icon
        });
        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
        });
        if(click ==true){
        google.maps.event.addListener(marker, 'click',function(){
            infoWindow.open(map, marker)
        })
    }
    }

initialize();
addMarker(-27.616637, -48.5923228,'', 'meu endereco personalizado',true)
} */
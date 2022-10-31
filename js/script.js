function iniciarMap(){
    var coord = {lat:-34.6121979416322 ,lng: -58.434801463173486};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
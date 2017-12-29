 function initMap() {
   var uluru = {lat: 32.345100, lng: -80.697643};
   var map = new google.maps.Map(document.getElementById('map'), {
   zoom: 15,
     center: uluru
   });
   var marker = new google.maps.Marker({
     position: uluru,
     map: map
   });
}
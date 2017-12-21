// JS Goes here - ES6 supported
(function() {
  const place = {lat: 59.444430, lng: 24.750592};

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: place
  });

  /* eslint-disable no-unused-vars */
  const marker = new google.maps.Marker({
    position: place,
    map: map
  });
  /* eslint-enable */
})();

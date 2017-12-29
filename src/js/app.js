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

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-111731114-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-111731114-1');
</script>

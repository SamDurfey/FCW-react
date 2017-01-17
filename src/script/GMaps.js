import apiKey from '../env.js'

// map initiation script
function initMap() {
  const loc = {lat: 45.3275534, lng: -122.583978};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: loc
  });
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}

// create script tag and fill with initMap
const initMapScript = document.createElement('script');
initMapScript.innerHTML = initMap;

// add async api call w/ callback
const mapScript = document.createElement('script');
mapScript.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap';
mapScript.async = true;
mapScript.defer = true;

// append
export default function appendScriptTags () {
  document.body.appendChild(initMapScript);
  document.body.appendChild(mapScript);
}
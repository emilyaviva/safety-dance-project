// Primary function for the Geo location app
function success(position) {
  // create a simple variable for the ID

  var s = document.querySelector('#geostatus');
  console.log("checking geostatus");
  if (s === null)
  {
    console.log("Can't find query selector for some reason?");
    return;
  }
  if (s.className == 'success') {
    return;
  }

  // Replaces text with new message
  s.innerHTML = "Found!";
  // Adds new class to the ID status block
  s.className = 'success';

  // creates the block element at sets the width and height
  var mapcanvas = document.createElement('div');
  // Adds ID to the new div
  mapcanvas.id = 'mapcanvas';
  // sets width and height of canvas that will go inside map element
  mapcanvas.style.height = '20em';
  mapcanvas.style.width = '100%';

  // Adds the new block element as the last thing within the article block
  document.querySelector('.location-card__map').appendChild(mapcanvas);

  // creates a new variable 'latlng' off of the google maps object
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  // create new variable that contains options in key:value pairs
  var myOptions = {
    zoom: 15,
    center: latlng,
    // ROADMAP is set by default, other options are HYBRID, SATELLITE and TERRAIN
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // creates the new 'map' variable using the google object
  // then using the 'mapcanvas' ID appending the options
  var map = new google.maps.Map(mapcanvas, myOptions);

  // creates new 'marker' variable
  var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title:"Location found (at least within a "+position.coords.accuracy+" meter radius)"
  });
}

// Function that displays the error message
function error(msg) {

  // sets simple variable to the status ID
  var s = document.querySelector('#geostatus');
  // designates typ eof message and passes in value
  s.innerHTML = typeof msg == 'string' ? msg : "Sorry, but I can't locate the restroom?";
  s.className = 'fail';
}


// statement that tests for device functionality
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  error('not supported');
}

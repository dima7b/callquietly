// http://stackoverflow.com/questions/24835925/meteor-js-reactive-html5-geolocation-position-coords

_lat = {
  current: 0,
  dep: new Deps.Dependency,
  get: function(){
    this.dep.depend();

    if(this.current === 0){
      getLocation();
    }

    return this.current;
  },
  set: function(value){
    this.current = value;
    this.dep.changed();
    Deps.flush();
    return this.current;
  }
};

_lon = {
  current: 0,
  dep: new Deps.Dependency,
  get: function(){
    this.dep.depend();

    if(this.current === 0){
      getLocation();
    }

    return this.current;
  },
  set: function(value){
    this.current = value;
    this.dep.changed();
    Deps.flush();
    return this.current;
  }
};

function getLocation(){
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  }
  else{
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position)
{
  _lat.set(position.coords.latitude);
  _lon.set(position.coords.longitude);
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}

Template.location.helpers({
  lat: _lat.get(),
  lon: _lon.get()
});
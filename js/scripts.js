//Album no logic
function Album (){
  this.places = [];
  this.currentId = 0;
};
Album.prototype.addPlace = function(place){
  this.places.push(place);
}
Album.prototype.addId = function(){
  this.currentId ++;
  //return this.currentId; nande?
}

//places no logic
function Place (location, landmark, timeOfYear, notes){
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
};







$(document).ready(function(){
  var album = new Album();
  $("#form").submit(function(event){
    event.preventDefault();
    var location = $("#location").val();
    var landmark = $("#landmark").val();
    var timeOfYear = $("#time-of-year").val();
    var notes = $("#notes").val();
    var place = new Place (location, landmark, timeOfYear, notes);
    album.addPlace(place);
    album.addId(place);
    console.log(album)
  });
});
//Album no logic
function Album (name){
  this.places = [];
  this.currentId = 0;
};

Album.prototype.addPlace = function(place){
  place.id = this.addId();
  this.places.push(place);
}
Album.prototype.addId = function(){
  this.currentId += 1;
  return this.currentId;
  //return this.currentId; nande?
}
Album.prototype.findPlace = function(id){
  for(var i = 0; i<this.places.length; i++){
    if(this.places[i].currentId == id){
      return this.currentId;
    } else {
      return false;
    };
  }
}
//places no logic
function Place (location, landmark, timeOfYear, notes){
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
};

//after clicked add button, display the landmark only on the list
function display(place){
  $("#show").append("<li>" + place.landmark + "</li>");
}





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
    album.findPlace(place);
    display(place);
   
    console.log(album);
    console.log(place.id);
  });
});
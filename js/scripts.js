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



///////////////////user no hanashi/////////////////////////////////////////
//after click add button, display the landmark only on the list
//also added id to dekita li
function display(place){
  $("#show").append("<li id=" + place.id + ">" + place.landmark + "</li>");
}
//added lists have to be clickable -click event
$("#show").on("click","li", function(){
  displayDetail();
})

// kokokara
// function displayDetail(listedPlace){
//   var placeList = $("ul#show");
//   var htmlText = "";
//   listedPlace.places.forEach(function(place)){
//     htmlText =
//   }
//   placeList.html(htmlText)
//   $("#show-detail").html(//location, landmark, ...)
// }






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
    console.log(place);
  });
  $("li").click(function(){
    //show detail function();
  });
});
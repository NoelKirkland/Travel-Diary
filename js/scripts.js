// Buisniness logic
function VacationDiary() {
  this.destinations = [],
  this.currentId = 0
}

VacationDiary.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}

VacationDiary.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Destination(location, landmarks, timeOfYear, food, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.food = food;
  this.notes = notes;
}


// User interface
let vacationDiary = new VacationDiary();

function displayVacationDiary (vacationDiaryToDisplay){
  let destinationList = $("ul#destinations");
  let htmlForDestinationInfo = "";
  vacationDiaryToDisplay.destinations.forEach(function(destination){
    htmlForDestinationInfo += "<li id=" + destination.id + ">" + "<span class='clickable' id='test'>" + destination.location + "</span>" + "</li>"
  });
  destinationList.html(htmlForDestinationInfo);
};

$(document).ready(function(){
  $("#test").click(function() {
    $("#test-showing").fadeToggle();
  });
  $("form#vacation-info").submit(function(event) {
    event.preventDefault();
    const location = $("input#location").val();
    const landmarks = $("input#landmarks").val();
    const timeOfYear = $("input#timeOfYear").val();
    const food = $("input#food").val();
    const notes = $("input#notes").val();

    let newDestination = new Destination(location, landmarks, timeOfYear, food, notes)
    vacationDiary.addDestination(newDestination);
    displayVacationDiary(vacationDiary);

    $("#user-input-info").show();
  });
});
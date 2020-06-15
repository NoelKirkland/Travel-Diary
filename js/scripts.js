// Buisniness logic
function VacationDiary() {
  this.destinations = [];
}

function Destination(location, landmarks, timeOfYear, food, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.food = food;
  this.notes = notes;
}

VacationDiary.prototype.addDestination = function() {
  this.destinations.push(destination);
}
// User interface
$(document).ready(function(){
  $("form#vacation-info").submit(function(event){
    event.preventDefault();
    const location = $("input#location").val();
    const landmarks = $("input#landmarks").val();
    const timeOfYear = $("input#timeOfYear").val();
    const food = $("input#food").val();
    const notes = $("input#notes").val();

    let vacationDiary = new VacationDiary();
    let newTrip = new Destination(location, landmarks, timeOfYear, food, notes)

    $("user-input-info").show();
    
  });
});
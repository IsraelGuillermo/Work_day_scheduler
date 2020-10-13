// // 1. allow user to enter text in text area
// 2. save text from text area into local storage
// 3. when refreshed information stays in text area
// 4. row to change colors base on time of day if past then gray if present then red if future then green

var $textArea = $("textarea");
var $saveBtn = $("button");
var events = [];
$moment = moment();
var $currentDate = $moment.format("dddd Do MMMM, YYYY");
var $time = $moment.format("h:mm:ss a");
$("#currentDay").append($currentDate);
console.log($time);

updateTextArea();

$saveBtn.on("click", function () {
  var id = $(this).attr("id");
  var $input = $("#" + id).val();
  var scheduleAppointment = {
    hour: id,
    description: $input,
  };
  events.push(scheduleAppointment);
  localStorage.setItem("appointment", JSON.stringify(events));
});
localStorage.setItem("appointment", JSON.stringify(events));

function updateTextArea() {
  var $appointment = JSON.parse(localStorage.getItem("appointment"));
  events = $appointment;
  if ($appointment !== null) {
    events = $appointment;
    for (var i = 0; i < events.length; i++) {
      $("#" + events[i].hour).val(events[i].description);
    }
  }
}

// // 1. allow user to enter text in text area
// 2. save text from text area into local storage
// 3. when refreshed information stays in text area
// 4. row to change colors base on time of day if past then gray if present then red if future then green

var $textArea = $("textarea");
var $saveBtn = $("button");
$moment = moment();
var $currentDate = $moment.format("dddd Do MMMM, YYYY");
var $time = $moment.hours();
$("#currentDay").append($currentDate);
console.log($time);
var events = [];
updateTextArea();

$saveBtn.on("click", saveData);

function saveData() {
  var id = $(this).attr("id");
  var $input = $("#" + id).val();
  var scheduleAppointment = {
    hour: id,
    description: $input,
  };
  events.push(scheduleAppointment);
  localStorage.setItem("appointment", JSON.stringify(events));
}
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

function updateTime() {
  $(".description").each(function () {
    var currentTime = parseInt($(this).attr("id"));
    if ($time === currentTime) {
      $(this).addClass("present");
    } else if ($time > currentTime) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });
}
updateTime();

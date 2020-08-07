//Autoupdating current day and time
var datetime = null,
  date = null;

var update = function () {
  date = moment(new Date());
  datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

$(document).ready(function () {
  datetime = $("#currentDay");
  update();
  setInterval(update, 1000);
});

var currentTime = parseInt(moment().format("hh"));
console.log(currentTime);
//
var container = $(".container");

// //save textarea to local storage
// $(function () {
//   $(".saveBtn").onclick(function () {
//     var savedData = $("planData").val();
//   });
//   localStorage.setItem("savedData", value);
// });

// // fill textarea from local storage if it exists
// $('#load').on('click', function(){
//   $('input[type="text"]').each(function(){
//       var savedData = $("planData").attr(savedData);
//       var value = localStorage.getItem(savedData);

//       $(this).val(value);

//   });

//annoying bracket - braces - bracket array (for adding rows)
var scheduleArr = [
  {
    id: "0",
    hour: "09",
    time: "09",
    amPm: "am",
    reminder: "",
  },
  {
    id: "1",
    hour: "10",
    time: "10",
    amPm: "am",
    reminder: "",
  },
  {
    id: "2",
    hour: "11",
    time: "11",
    amPm: "am",
    reminder: "",
  },
  {
    id: "3",
    hour: "12",
    time: "12",
    amPm: "pm",
    reminder: "",
  },
  {
    id: "4",
    hour: "1",
    time: "13",
    amPm: "pm",
    reminder: "",
  },
  {
    id: "5",
    hour: "2",
    time: "14",
    amPm: "pm",
    reminder: "",
  },
  {
    id: "6",
    hour: "3",
    time: "15",
    amPm: "pm",
    reminder: "",
  },
  {
    id: "7",
    hour: "4",
    time: "16",
    amPm: "pm",
    reminder: "",
  },
  {
    id: "8",
    hour: "5",
    time: "17",
    amPm: "pm",
    reminder: "",
  },
];

//pulls from schedule array
scheduleArr.forEach(function (currentHour) {
  // make the new row
  var hourRow = $("<form>").attr({
    class: "row",
  });
  $(".container").append(hourRow);

  // make the box with each hour, morning or afternoon attribute, and text for all
  var hourTextBox = $("<div>")
    .text(`${currentHour.hour}${currentHour.amPm}`)
    .attr({
      class: "col-md-2 hour",
    });

  // make text box appending html elements with bootstrap classes as well as ids pulled from the schedule array
  var hourPlan = $("<div>").attr({
    class: "col-8 description px-0",
  });
  var planData = $("<textarea class='form-control'>");
  hourPlan.append(planData);
  // check moment.js to determine time. if the time is less than the row time, then class "past" (as determined in style.css) is added to the row. if the time is equal to the row time, then class "present" is added to the row. if the time is greater than the row time, then the class "future" is added to the row. this is how we get the different colored rows.
  planData.attr("id", currentHour.id);
  if (currentHour.time < moment().format("HH")) {
    planData.attr({
      class: "past",
    });
  } else if (currentHour.time === moment().format("HH")) {
    planData.attr({
      class: "present",
    });
  } else if (currentHour.time > moment().format("HH")) {
    planData.attr({
      class: "future",
    });
  }

  // make save button
  var saveButton = $("<i class='far fa-save fa-lg'></i>");
  var saveText = $("<button>").attr({
    class: "col-md-1 saveBtn",
  });
  saveText.append(saveButton);
  hourRow.append(hourTextBox, hourPlan, saveText);
});

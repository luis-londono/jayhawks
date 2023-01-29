"use strict";

// Global Variables
const brave = "https://search.brave.com/search?q=%22Page+created+";
const plus = "+";
const space = "%2C+";
const amp = "&";
const site = "site%3Afacebook.com";
const end = "&source=web";
const quotes = "%22+";

// Date
const today = new Date();
let year = today.getFullYear();
let mm = today.getMonth();
let dd = today.getDate();

let dateValue = today.toISOString().split('T')[0];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = monthNames[today.getMonth()];

// timer
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

// jobs
const jobs = [
  "excavation",
  "plumber",
  "electrical",
  "roofing",
  "landsape",
  "pressure%2C+washer", // includes space between
];

async function load() {
  for (let i = 0; i < jobs.length; i++) {
    let jobName = jobs[i];
    let final = brave.concat(
      month,
      plus,
      dd,
      space,
      year,
      quotes,
      site,
      plus,
      jobName,
      end
    );

    createLink(final);
    await timer(3000);
  }
}

function createLink(url) {
  var link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.click();
}

function onDateChange(event) {
  dateValue = event.target.value;

  year = dateValue.substring(0,4);
  mm = dateValue.substring(5,7);
  dd = dateValue.substring(8,10);

  month = monthNames[mm-1];
}

// this loads the script automatically
// load();

// elements
document.getElementById("load").addEventListener("click", load);
document.getElementById("footer").innerText =
  "Copyright © " + year.toString() + " | PapaDonO";
document.getElementById("input-date").value = dateValue;

document.getElementById("load").addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    // event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("input-date").click();
  }
});

window.addEventListener("keydown", function (e) { if (13 == e.keyCode) { load() } })

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
const year = today.getFullYear();
const mm = today.getMonth();
const dd = today.getDate();

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

const month = monthNames[today.getMonth()];

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

// this loads the script automatically
// load();

// elements
document.getElementById("load").addEventListener("click", load);
document.getElementById("footer").innerText =
  "Copyright © " + year.toString() + " | PapaDonO";

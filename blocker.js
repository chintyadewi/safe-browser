// const fetch = require("node-fetch");

var url = window.location.href;
var titlePage = document.title;

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

if (url == "https://www.wikipedia.org/") {
  console.log(url, date + " " + time);
  // change url
  url = "https://www.mozilla.org/en-US";
  window.location = url;
} else {
  var apiUrl = "http://jsonplaceholder.typicode.com/posts";

  // Get Data
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error(error));

  var dataPost = {
    userId: 10,
    id: 101,
    title: "lkjklsjdlks",
    body: "lkjkjdskfjk"
  };

  // Post Data
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(dataPost),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => console.log("Success:", JSON.stringify(response)))
    .catch(error => console.error("Error:", error));

  console.log(url, date + " " + time, titlePage);
}

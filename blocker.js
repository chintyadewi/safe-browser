var urlAccess = window.location.href;
var titlePage = document.title;
var apiUrl = "https://safebrowser.herokuapp.com/history";
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function postData() {
  // Post Data
  var dataPost = {
    title: titlePage,
    url: urlAccess
  };
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
}

// Get Data
let blockedUrl = [];
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    for (i = 0; i < data.length; i++) {
      blockedUrl.push(data[i].url);
    }

    if (blockedUrl.indexOf(urlAccess) != -1) {
      // postData();
      window.location.href = "https://safebrowser.herokuapp.com";
    } else {
      // postData();
    }
  })
  .catch(error => console.error(error));

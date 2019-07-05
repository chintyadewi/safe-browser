var urlAccess = window.location.href;
var titlePage = document.title;

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

if (urlAccess == "https://www.wikipedia.org/") {
  console.log(urlAccess, date + " " + time);
  // change url
  // url = "https://www.mozilla.org/en-US";
  // window.location = url;
} else {
  var apiUrl = "https://safebrowser.herokuapp.com/history";

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

  // Get Data
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error(error));
}

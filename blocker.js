var urlAccess = window.location.href;
var titlePage = document.title;
const apiUrl = "https://safebrowser.herokuapp.com/history";
const apiBlockedUrl = "https://safebrowser.herokuapp.com/blocked";
var extensionID = browser.runtime.id;

// var today = new Date();
// var date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
// var time =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function postData() {
  // Post Data
  var dataPost = {
    title: titlePage,
    url: urlAccess,
    pluginCode: extensionID
  };
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(dataPost),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then()
    .catch(error => console.error("Error:", error));
}

// Get Data
//let blockedUrl = [];
fetch(apiBlockedUrl)
  .then(response => response.json())
  .then(data => {
    // for (i = 0; i < data.length; i++) {
    //   blockedUrl.push(data[i]);
    // }

    console.log(data);


    let ketemu = false;
    for (let j = 0; j < data.length; j++) {
      if (
        (data[j].url === urlAccess) &&
        data[j].pluginCode === extensionID
      ) {
        ketemu = true;
        //postData();
        //window.location.href = "https://safebrowser.herokuapp.com";
        break;
      } else {
        //postData();
        ketemu = false;
      }
    }

    if (ketemu) {
      postData();
      console.log(ketemu);
      window.location.href = "https://safebrowser.herokuapp.com";
    } else {
      console.log(ketemu);
      postData();
    }
  })
  .catch(error => console.error(error));

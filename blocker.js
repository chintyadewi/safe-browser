var url = window.location.href;
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

if (url == "https://www.wikipedia.org/") {
  console.log(url, date + " " + time);
  // jika kirim file berhasil, maka redirect ke halaman yng sudah ditentukan
  url = "https://www.mozilla.org/en-US";
  window.location = url;
} else {
  console.log(url, date + " " + time);
}

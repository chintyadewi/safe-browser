var extensionID = browser.runtime.id;

document.getElementById("qrCode").src =
  "https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=" +
  extensionID +
  "&choe=UTF-8";

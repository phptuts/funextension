document.body.style.backgroundColor = "red";

let color = "red";
setInterval(() => {
  if (color === "red") {
    color = "green";
  } else {
    color = "red";
  }
  document.body.style.backgroundColor = color;
}, 1000);

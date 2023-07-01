let second = 0;
let minute = 0;
let hour = 0;
let date = new Date();
setInterval(
  (clock = () => {
    date = new Date();
    second = date.getSeconds() * 6;
    minute = date.getMinutes() * 6;
    hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();

    let hourDegrees = ((hour % 12) / 12) * 360 + ((minute % 60) / 60) * 30;

    document.getElementById("saniye").style.transform =
      "rotate(" + second + "deg)";
    document.getElementById("deqiqe").style.transform =
      "rotate(" + minute + "deg)";
    document.getElementById(
      "saat"
    ).style.transform = `rotate(${hourDegrees}deg)`;
  }),
  1000
);

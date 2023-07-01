myClock = () => {
  const getday = new Date();
  let hour =
    getday.getHours() < 10 ? "0" + getday.getHours() : getday.getHours();
  let minute =
    getday.getMinutes() < 10 ? "0" + getday.getMinutes() : getday.getMinutes();
  let second =
    getday.getSeconds() < 10 ? "0" + getday.getSeconds() : getday.getSeconds();
  const saat1 = document.getElementById("elektron");
  saat1.innerHTML = `${hour} : ${minute} : ${second}`;
};
let count = setInterval(myClock, 1000);

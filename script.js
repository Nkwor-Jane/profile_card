function getUTCTime(){
    const currentTime = new Date();
    const utcTime = currentTime.toUTCString();
    document.getElementById("utc_time").textContent = utcTime;
}
setInterval(getUTCTime, 1000);
getUTCTime();
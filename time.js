

//Time Korea
const hour_korea = document.getElementById("hour_korea");
const min_korea = document.getElementById("min_korea");
const sec_korea = document.getElementById("sec_korea");

//Time Germany
const hour_germany = document.getElementById("hour_germany");
const min_germany = document.getElementById("min_germany");
const sec_germany = document.getElementById("sec_germany");

function time(){
  let time_offset_korea = 9;
  let time_offset_germany = 1;
   //TODO:  should calculate summer and winter time
  let hours = new Date().getUTCHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  if(hours < 10) hours = "0" + hours;
  if(min < 10) min = "0" + min;
  if(sec < 10) sec = "0" + sec;
  hour_korea.innerText = hours + time_offset_korea;
  min_korea.innerText = min;
  sec_korea.innerText = sec;
  hour_germany.innerText = hours + time_offset_germany;
  min_germany.innerText = min;
  sec_germany.innerText = sec;
  setTimeout(()=>{time();},1000)
}
time();


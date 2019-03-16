export default function secToMinAndSec(seconds) {
  const minutesValue = Math.floor(seconds / 60);
  const secondsValue = seconds % 60;

  return `${formatTime(minutesValue)} : ${formatTime(secondsValue)}`
}

function formatTime(time) {
  return ('0' + time).slice(-2);
}

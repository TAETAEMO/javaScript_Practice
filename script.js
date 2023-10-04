function updateKoreanTime() {
  const koreanTimeContainer = document.getElementById("timeContainer");
  const currentTime = new Date();

  const timeOptions = {
    timeZone: "Asia/Seoul",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const koreanTime = currentTime.toLocaleTimeString("ko-KR", timeOptions);
  koreanTimeContainer.innerText = `한국시간: ${koreanTime}`;

  const specificDate = new Date("2023-10-05");
  if (isSameDate(currentTime, specificDate)) {
    koreanTimeContainer.style.display = "none";
  } else {
    koreanTimeContainer.style.display = "block";
  }

  koreanTimeContainer.classList.add("korean-time-class");
}

function isSameDate(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

setInterval(updateKoreanTime, 1000);

updateKoreanTime();

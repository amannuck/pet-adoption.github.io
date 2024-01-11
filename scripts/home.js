function getCurrentDate() {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();


   // Format the time as desired (HH:MM:SS)
   const hours = String(currentDate.getHours()).padStart(2, "0");
   const minutes = String(currentDate.getMinutes()).padStart(2, "0");
   const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  document.getElementById("date").innerHTML = month + " " + day + " " + hours + ":" + minutes + ":" + seconds;

}

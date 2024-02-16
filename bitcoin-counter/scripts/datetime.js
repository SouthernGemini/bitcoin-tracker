// Function to update the content of the date and time elements with the current date and time
function updateDateTime() {
   // Get the current date and time
   const currentDate = new Date();

   // Format the date
   const options = { 
       weekday: 'long',
       year: 'numeric', 
       month: 'long', 
       day: 'numeric'
   };
   const formattedDate = currentDate.toLocaleDateString('en-US', options);

   // Format the time
   const formattedTime = currentDate.toLocaleTimeString('en-US');

   // Get the elements with the ids "date" and "time"
   const dateElement = document.getElementById("date");
   const timeElement = document.getElementById("time");

   // Update the content of the elements with the formatted date and time
   dateElement.innerText = formattedDate;
   timeElement.innerText = formattedTime;
}

// Call the updateDateTime function initially to display the current date and time
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);
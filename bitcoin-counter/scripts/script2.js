// Start time
const startTime2 = new Date("2024-02-15T21:23:00");

// Rate of increase in BTC/hr
const ratePerHour2 = 1.0;

// Function to update amount
function updateAmount2() {
  // Current time
  const currentTime2 = new Date();

  // Elapsed time in hours
  const elapsedTimeHours2 = (currentTime2 - startTime2) / (1000 * 60 * 60);

  // Calculate amount
  const amount2 = 361.005 + ratePerHour2 * elapsedTimeHours2;

  // Display amount
  const btcNumberElement2 = document.getElementById('btc-number2');
  btcNumberElement2.innerText = amount2.toFixed(5);
  
  // Apply styles to the BTC number
  btcNumberElement2.style.color = '#03fd42'; 
  btcNumberElement2.style.fontWeight = 'bold';
}

// Update amount every second
setInterval(updateAmount2, 1000);

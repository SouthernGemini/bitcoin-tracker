// Start time
const startTime = new Date("2024-02-13T13:37:00");

// Rate of increase in BTC/hr
const ratePerHour = 0.0358;

// Function to update amount
function updateAmount() {
  // Current time
  const currentTime = new Date();

  // Elapsed time in hours
  const elapsedTimeHours = (currentTime - startTime) / (1000 * 60 * 60);

  // Calculate amount
  const amount = 25.0101 + ratePerHour * elapsedTimeHours;

  // Display amount
  const btcNumberElement = document.getElementById('btc-number');
    btcNumberElement.innerText = amount.toFixed(5);
    
    // Apply styles to the BTC number
    btcNumberElement.style.color = '#03fd42'; 
    btcNumberElement.style.fontWeight = 'bold';
}

// Update amount every second
setInterval(updateAmount, 1000);



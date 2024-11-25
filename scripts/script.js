const currentYear = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Octavio Bottari, Buenos Aires, Argentina`;
document.getElementById('lastModified').textContent = document.lastModified;


function calculateWindChill(temp, speed) {
  return Math.round(13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16);
}

const temp = 20; 
const windSpeed = 10; 

if (temp <= 10 && windSpeed > 4.8) {
  document.getElementById('windChill').textContent = calculateWindChill(temp, windSpeed) + "°C";
} else {
  document.getElementById('windChill').textContent = "N/A";
}

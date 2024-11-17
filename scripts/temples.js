document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("modified");

  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  yearSpan.textContent = currentYear;
  modifiedSpan.textContent = lastModified;
});

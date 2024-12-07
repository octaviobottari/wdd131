document.addEventListener("DOMContentLoaded", () => {
    const reviewCounterElement = document.getElementById("review-counter");
    const reviewSummaryElement = document.getElementById("review-summary");
  

    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
  
   
    reviewCounterElement.textContent = reviewCount;
  
  
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product") || "Unknown product"; 
    const rating = params.get("rating") || "No rating"; 
    const date = params.get("install-date") || "Unknown date"; 
    const features = params.getAll("features").join(", ") || "None"; 
    const review = params.get("review") || "No review provided."; 
    const username = params.get("username") || "Anonymous";
  

    reviewSummaryElement.innerHTML = `
      <p><strong>Product:</strong> ${sanitizeInput(product)}</p>
      <p><strong>Rating:</strong> ${sanitizeInput(rating)}</p>
      <p><strong>Date of Installation:</strong> ${sanitizeInput(date)}</p>
      <p><strong>Features:</strong> ${sanitizeInput(features)}</p>
      <p><strong>Review:</strong> ${sanitizeInput(review)}</p>
      <p><strong>Submitted By:</strong> ${sanitizeInput(username)}</p>
    `;
  });
  

function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input; 
    return div.innerHTML;
}

// Simulate getting user input from the URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q");

// Display the user input directly on the page (vulnerable to XSS)
document.querySelector(".query").innerHTML = `You searched for: ${
  query || "[No Query]"
}`;

// Simple Frontend Login Feature
function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  // Default demo credentials (you can change this)
  const demoUser = {
    username: "coffeeLover",
    password: "brew123"
  };

  if (username === "" || password === "") {
    errorMessage.textContent = "Please fill in both fields.";
    return;
  }

  if (username === demoUser.username && password === demoUser.password) {
    // Save login state
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    // Redirect to home page
    window.location.href = "index.html";
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
}

// Redirect user if already logged in
if (localStorage.getItem("isLoggedIn") === "true" && window.location.pathname.includes("login.html")) {
  window.location.href = "index.html";
}

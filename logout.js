// ✅ logout.js - Real working logout handler for all portals

function logoutUser() {
  // 🔐 Remove tokens from localStorage
  localStorage.removeItem("owner_token");
  localStorage.removeItem("seller_token");
  localStorage.removeItem("customer_token");
  localStorage.removeItem("delivery_token");

  // 🧹 Remove saved user data if any
  localStorage.removeItem("ownerData");
  localStorage.removeItem("sellerData");
  localStorage.removeItem("customerData");
  localStorage.removeItem("deliveryData");

  // 🚫 Optional: Clear session storage
  sessionStorage.clear();

  // 🔁 Redirect to correct login page based on path
  const path = window.location.pathname.toLowerCase();

  if (path.includes("owner")) {
    window.location.href = "/owner/login.html";
  } else if (path.includes("seller")) {
    window.location.href = "/seller/login.html";
  } else if (path.includes("customer")) {
    window.location.href = "/customer/login.html";
  } else if (path.includes("delivery")) {
    window.location.href = "/delivery/login.html";
  } else {
    window.location.href = "login.html";
  }
}

// 🔘 Auto-attach logout button event
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn") || document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const confirmLogout = confirm("🚪 Are you sure you want to logout?");
      if (confirmLogout) logoutUser();
    });
  }
});

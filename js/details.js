document.addEventListener("DOMContentLoaded", function () {
  // Save product name
  const prodOneEl = document.querySelector(".prodOne");
  if (prodOneEl) {
    const productName = prodOneEl.textContent.trim();
    localStorage.setItem("productName", productName);
    console.log("✅ Saved product name:", productName);
  }

  // Save client name
  const clientOneEl = document.querySelector(".clientOne");
  if (clientOneEl) {
    const clientName = clientOneEl.textContent.trim();
    localStorage.setItem("clientName", clientName);
    console.log("✅ Saved client name:", clientName);
  }
});

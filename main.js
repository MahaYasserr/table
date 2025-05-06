function toggleFilters() {
  const filterSection = document.getElementById("filterSection");
  filterSection.style.display =
    filterSection.style.display === "none" || filterSection.style.display === ""
      ? "block"
      : "none";
}

function filterTable() {
  const inputProduct = document
    .getElementById("filterProduct")
    .value.toLowerCase();
  const inputCustomer = document
    .getElementById("filterCustomer")
    .value.toLowerCase();
  const table = document.getElementById("revenueTable");
  const rows = table
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const productCell = rows[i].getElementsByTagName("td")[0];
    const customerCell = rows[i].getElementsByTagName("td")[3];

    const productMatch = productCell.textContent
      .toLowerCase()
      .includes(inputProduct);
    const customerMatch = customerCell.textContent
      .toLowerCase()
      .includes(inputCustomer);

    if (productMatch && customerMatch) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const productEls = document.querySelectorAll(".prodA.clickable");

  productEls.forEach((prodEl) => {
    prodEl.addEventListener("click", function () {
      const productName = prodEl.textContent.trim();

      const parentRow = prodEl.closest("tr");
      const clientEl = parentRow.querySelector(".clientA");
      const clientName = clientEl ? clientEl.textContent.trim() : "";

      localStorage.setItem("productName", productName);
      localStorage.setItem("clientName", clientName);

      window.location.href = "pages/details.html";
    });
  });

  const storedProduct = localStorage.getItem("productName");
  const storedClient = localStorage.getItem("clientName");

  const prodAEl = document.querySelector(".prodA");
  const clientAEl = document.querySelector(".clientA");

  if (prodAEl && storedProduct) prodAEl.textContent = storedProduct;
  if (clientAEl && storedClient) clientAEl.textContent = storedClient;
});

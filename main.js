// function showTable(categoryId) {
//   const allTabs = document.querySelectorAll(".tab");
//   const allTables = document.querySelectorAll(".table-container");

//   allTabs.forEach((tab) => tab.classList.remove("active"));
//   allTables.forEach((table) => table.classList.remove("active"));

//   document.getElementById(categoryId).classList.add("active");
//   event.target.classList.add("active");
// }

// function showTable(tableElementID) {
//   const allTabs = document.querySelectorAll(".tab");
//   const allTables = document.querySelectorAll(".table-container");

//   allTabs.forEach(function (tab) {
//     tab.classList.remove("active");
//   });

//   allTables.forEach(function (table) {
//     table.classList.remove("active");
//   });

//   document.getElementById(tableElementID).classList.add("active");
//   event.target.classList.add("active");
// }

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
  // Set product name
  const prodAEl = document.querySelector(".prodA");
  const storedProduct = localStorage.getItem("productName");
  if (prodAEl && storedProduct) {
    prodAEl.textContent = storedProduct;
    console.log("✅ Set product name:", storedProduct);
  }

  // Set client name
  const clientAEl = document.querySelector(".clientA");
  const storedClient = localStorage.getItem("clientName");
  if (clientAEl && storedClient) {
    clientAEl.textContent = storedClient;
    console.log("✅ Set client name:", storedClient);
  }
});

import CustomerModel from "../model/customerModel.js";

// DOM Elements
const customerTableBody = document.querySelector("#customerTable tbody");
const customerForm = document.forms['customerForm'];
const saveBtn = document.getElementById("save");
const updateBtn = document.getElementById("update");
const searchBtn = document.getElementById("search");
const deleteBtn = document.getElementById("delete");
const getAllBtn = document.getElementById("getAll");
const clearBtn = document.getElementById("clear");

// Helper functions for rendering
const renderCustomerTable = (customers) => {
  customerTableBody.innerHTML = ""; // Clear existing rows
  customers.forEach(customer => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${customer.id}</td>
      <td>${customer.name}</td>
      <td>${customer.address}</td>
      <td>${customer.telNo}</td>
    `;
    customerTableBody.appendChild(row);
  });
};

const clearForm = () => {
  customerForm.reset();
};

// Event Listeners
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.getElementById("CustomerID").value;
  const name = document.getElementById("CustomerName").value;
  const address = document.getElementById("CustomerAddress").value;
  const telNo = document.getElementById("CustomerTelNo").value;

  if (id && name && address && telNo) {
    CustomerModel.add(id, name, address, telNo);
    renderCustomerTable(CustomerModel.getAll());
    clearForm();
  } else {
    alert("Please fill in all fields.");
  }
});

updateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.getElementById("CustomerID").value;
  const name = document.getElementById("CustomerName").value;
  const address = document.getElementById("CustomerAddress").value;
  const telNo = document.getElementById("CustomerTelNo").value;

  const updatedCustomer = CustomerModel.update(id, name, address, telNo);
  if (updatedCustomer) {
    renderCustomerTable(CustomerModel.getAll());
    clearForm();
  } else {
    alert("Customer not found.");
  }
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.getElementById("CustomerID").value;
  const success = CustomerModel.delete(id);
  if (success) {
    renderCustomerTable(CustomerModel.getAll());
    clearForm();
  } else {
    alert("Customer not found.");
  }
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.getElementById("CustomerID").value;
  const customer = CustomerModel.search(id);
  if (customer) {
    document.getElementById("CustomerName").value = customer.name;
    document.getElementById("CustomerAddress").value = customer.address;
    document.getElementById("CustomerTelNo").value = customer.telNo;
  } else {
    alert("Customer not found.");
  }
});

getAllBtn.addEventListener("click", (e) => {
  e.preventDefault();
  renderCustomerTable(CustomerModel.getAll());
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearForm();
});

import { Customer } from "../model/customerModel.js";
import { customerDB } from "../DB/db.js";

$(document).ready(function () {
  // Save Customer Event
  $("#saveCustomer").click(function () {
    // Get input values
    const customerID = $("#customerID").val().trim();
    const customerName = $("#customerName").val().trim();
    const customerAddress = $("#customerAddress").val().trim();
    const customerTelNo = $("#customerTelNo").val().trim();

    // Validate inputs
    if (!customerID || !customerName || !customerAddress || !customerTelNo) {
      alert("All fields are required!");
      return;
    }

    // Create a new customer
    const newCustomer = new Customer(
      customerID,
      customerName,
      customerAddress,
      customerTelNo
    );

    // Add to DB
    customerDB.addCustomer(newCustomer);

    // Append to table
    appendCustomerToTable(newCustomer);

    // Clear form
    $("#customerForm")[0].reset();
  });

  // Append Customer to Table
  function appendCustomerToTable(customer) {
    $("#customerTable tbody").append(`
      <tr>
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.address}</td>
        <td>${customer.telNo}</td>
      </tr>
    `);
  }

  // Render Existing Customers
  function renderCustomerTable() {
    const customers = customerDB.getAllCustomers();
    customers.forEach((customer) => appendCustomerToTable(customer));
  }

  // Initial Table Render
  renderCustomerTable();
});

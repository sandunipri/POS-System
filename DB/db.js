export const customerDB = {
  customers: [],

  addCustomer(customer) {
    this.customers.push(customer);
    return customer;
  },

  getAllCustomers() {
    return this.customers;
  },
};

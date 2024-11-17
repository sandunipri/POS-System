class Customer {
  constructor(id, name, address, telNo) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.telNo = telNo;
  }
}

const customers = []; // Array to hold customer data

const CustomerModel = {
  add: (id, name, address, telNo) => {
    const customer = new Customer(id, name, address, telNo);
    customers.push(customer);
    return customer;
  },
  update: (id, name, address, telNo) => {
    const customer = customers.find(c => c.id === id);
    if (customer) {
      customer.name = name;
      customer.address = address;
      customer.telNo = telNo;
      return customer;
    }
    return null;
  },
  delete: (id) => {
    const index = customers.findIndex(c => c.id === id);
    if (index !== -1) {
      customers.splice(index, 1);
      return true;
    }
    return false;
  },
  getAll: () => customers,
  search: (id) => customers.find(c => c.id === id),
  clear: () => {
    customers.length = 0; // Clear the array
  }
};

export default CustomerModel;

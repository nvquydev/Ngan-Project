class CustomerModel {
  constructor() {
    this.data = [];
  }

  getListCustomer = async () => {
    const apiRequest = await fetch('https://64a67a49096b3f0fcc7fda51.mockapi.io/ngando/customers');
    const dataReponse = await apiRequest.json();
    return dataReponse;
  };

  getData() {
    return this.data;
  }
  customerCreate() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
  }
}

export default CustomerModel;

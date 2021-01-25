import { action, observable } from "mobx";


export default class ProductStore {

  @observable
  products = [];

  @observable
  product = null;

  @observable
  isLoading = false;

  @action
  async getProducts() {
    this.isLoading = true;

    const response = await fetch('https://jsonplaceholder.typicode.com/users/', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    const body = await response.json();
    if(response.ok) {
      this.products = body;
    } else {
      this.error = body.message;
    }

    this.isLoading = false;
  };

  @action
  async getById(id) {
    this.isLoading = true;

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    const body = await response.json();
    if(response.ok) {
      this.product = body;
    } else {
      this.error = body.message;
    }

    this.isLoading = false;
  }
}

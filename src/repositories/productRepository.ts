import { Product } from "../models/product";

export class ProductRepository {
  private products: Product[] = [
    { id: "1", name: "Laptop", price: 1000, category: "Electronics" },
    { id: "2", name: "Shirt", price: 50, category: "Clothing" },
  ];

  public getAllProducts(): Product[] {
    return this.products;
  }

  public getProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}

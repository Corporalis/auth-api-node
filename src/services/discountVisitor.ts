import { Product } from "../models/product";

interface Visitor {
  applyDiscount(product: Product): void;
}

export class DiscountVisitor implements Visitor {
  public applyDiscount(product: Product): void {
    if (product.category === "Electronics") {
      product.price *= 0.9; // 10% discount
    } else if (product.category === "Clothing") {
      product.price *= 0.85; // 15% discount
    }
  }
}

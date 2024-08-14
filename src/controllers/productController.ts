import { Request, Response } from "express";
import { ProductRepository } from "../repositories/productRepository";
import { DiscountVisitor } from "../services/discountVisitor";

const productRepository = new ProductRepository();

export class ProductController {
  public static getAllProducts(req: Request, res: Response): void {
    const products = productRepository.getAllProducts();
    res.json(products);
  }

  public static getProductById(req: Request, res: Response): void {
    const product = productRepository.getProductById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.sendStatus(404);
    }
  }

  public static applyDiscount(req: Request, res: Response): void {
    const product = productRepository.getProductById(req.params.id);
    if (product) {
      const discountVisitor = new DiscountVisitor();
      discountVisitor.applyDiscount(product);
      res.json(product);
    } else {
      res.sendStatus(404);
    }
  }
}

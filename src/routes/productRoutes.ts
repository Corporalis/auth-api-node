import { Router } from "express";
import { ProductController } from "../controllers/productController";
import { authenticateJWT } from "../utils/authMiddleware";

const router = Router();

router.get("/products", authenticateJWT, ProductController.getAllProducts);
router.get("/products/:id", authenticateJWT, ProductController.getProductById);
router.post(
  "/products/:id/discount",
  authenticateJWT,
  ProductController.applyDiscount
);

export default router;

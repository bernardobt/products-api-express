import DAL from "../dal/dal.js";
import Product from "../models/productModel.js";

const getProducts = async () => {
  try {
    const allProducts = await DAL.getItems(Product);
    return allProducts;
  } catch (error) {
    throw error;
  }
};

export default {
  getProducts,
};

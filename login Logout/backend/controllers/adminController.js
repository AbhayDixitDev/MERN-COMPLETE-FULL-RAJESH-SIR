const productModel = require('../models/productModel');
const path = require('path');
const fs = require('fs');

const addProduct = async (req, res) => {
  try {
    const { name, brand, price, description } = req.body;
    let image = null;

    if (req.file) {
      image = req.file.path;
    }

    const newProduct = await productModel.create({
      name,
      brand,
      price,
      description,
      image
    });
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Failed to add product", error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};

module.exports = {
  addProduct,
  getAllProducts
};

// For storing multer uploads, create a folder named 'uploads' in the root directory of your project
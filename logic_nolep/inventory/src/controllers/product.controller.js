const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createProduct = async (req, res) => {
  const { name, description, price, stock, categoryId, userId } = req.body;
  try {
    const product = await prisma.product.create({
      data: { name, description, price, stock, categoryId, userId },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await prisma.product.findUnique({ where: { id: parseInt(productId) } });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, description, price, stock, categoryId, userId } = req.body;
  try {
    const product = await prisma.product.update({
      where: { id: parseInt(productId) },
      data: { name, description, price, stock, categoryId, userId },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    await prisma.product.delete({ where: { id: parseInt(productId) } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductsByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const products = await prisma.product.findMany({ where: { userId: parseInt(userId) } });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsByUser,
};

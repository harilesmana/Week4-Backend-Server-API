const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createOrderItem = async (req, res) => {
  const { productId, orderId, quantity } = req.body;
  try {
    const orderItem = await prisma.orderItem.create({
      data: { productId, orderId, quantity },
    });
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await prisma.orderItem.findMany();
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrderItemById = async (req, res) => {
  const { orderItemId } = req.params;
  try {
    const orderItem = await prisma.orderItem.findUnique({ where: { id: parseInt(orderItemId) } });
    if (orderItem) {
      res.status(200).json(orderItem);
    } else {
      res.status(404).json({ error: 'Order item not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOrderItem = async (req, res) => {
  const { orderItemId } = req.params;
  const { productId, orderId, quantity } = req.body;
  try {
    const orderItem = await prisma.orderItem.update({
      where: { id: parseInt(orderItemId) },
      data: { productId, orderId, quantity },
    });
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteOrderItem = async (req, res) => {
  const { orderItemId } = req.params;
  try {
    await prisma.orderItem.delete({ where: { id: parseInt(orderItemId) } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrderItemsByOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const orderItems = await prisma.orderItem.findMany({ where: { orderId: parseInt(orderId) } });
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrderItem,
  getAllOrderItems,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
  getOrderItemsByOrder,
};

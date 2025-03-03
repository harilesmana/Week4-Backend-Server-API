const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createOrder = async (req, res) => {
  const { userId, items } = req.body;
  try {
    const order = await prisma.order.create({
      data: {
        userId,
        items: {
          create: items,
        },
      },
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await prisma.order.findUnique({ where: { id: parseInt(orderId) } });
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOrder = async (req, res) => {
  const { orderId } = req.params;
  const { items } = req.body;
  try {
    const order = await prisma.order.update({
      where: { id: parseInt(orderId) },
      data: {
        items: {
          deleteMany: {},
          create: items,
        },
      },
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    await prisma.order.delete({ where: { id: parseInt(orderId) } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrdersByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await prisma.order.findMany({ where: { userId: parseInt(userId) } });
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrdersByUser,
};

const prisma = require('./src/config/db');
const bcrypt = require('bcrypt');

async function seedDatabase() {
    // Hapus semua data dari tabel User
    await prisma.user.deleteMany({});

    await prisma.user.create({
        data: {
            name: 'Test User',
            email: 'test@example.com',
            password: await bcrypt.hash('password123', 10),
            role: 'Admin'
        }
    });

    await prisma.category.create({
        data: {
            name: 'Test Category'
        }
    });

    await prisma.product.create({
        data: {
            name: 'Test Product',
            description: 'This is a test product',
            price: 100,
            stock: 10,
            categoryId: 1
        }
    });

    await prisma.order.create({
        data: {
            total: 100,
            userId: 1,
            orderItems: {
                create: [
                    {
                        quantity: 2,
                        price: 50,
                        productId: 1
                    }
                ]
            }
        }
    });

    console.log('Database has been seeded with data.');
}

seedDatabase().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});


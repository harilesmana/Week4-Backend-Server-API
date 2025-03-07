const prisma = require('../src/config/db');

async function main() {
    await prisma.user.create({
        data: {
            email: "test@example.com",
            password: "password123", // Pastikan ini sesuai dengan hashing (misal bcrypt)
        },
    });
}

main()
    .then(() => console.log('Seeding completed'))
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });


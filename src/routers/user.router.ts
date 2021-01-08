import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const router = Router();

router.get('/user', async (req, res) => {
    try {
        const client = new PrismaClient();
        const users = await client.users.findMany({select: { userId: true, userName: true }});
        console.log();
        res.json(users);
    } catch (e) {
        res.json({ error: e.message })
    }
});

export { router };

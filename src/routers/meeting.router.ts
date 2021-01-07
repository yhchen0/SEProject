import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const router = Router();

router.get('/meeting', async (req, res) => {
    console.log('test');
    try {
        const client = new PrismaClient();
        const users = await client.users.findMany();
        console.log();
        res.json(users);
    } catch (e) {
        res.json({ error: e.message })
    }
});

router.post('/meeting', async (req, res) => {
    try {
        res.json({});
    } catch (e) {
        res.json({ error: e.message })
    }
});

export { router };
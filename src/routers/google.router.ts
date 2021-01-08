import { Router } from 'express';
import { genUserInfo } from './../shared/gapi';
import { PrismaClient } from '@prisma/client';
const router = Router();

router.post('/oauth', async (req, res) => {
    try {
        const clinet = new PrismaClient();
        const { code } = req.body;
        const userInfo = await genUserInfo(code);

        await clinet.users.create({
            data: {
                userId: userInfo.id as string,
                userName: userInfo.username as string
            }
        });
        
        res.json(userInfo);
    } catch (e) {
        res.json({ error: e.message })
    }
})

export { router };

import { Router } from 'express';
import { genUserInfo } from './../shared/gapi';
import { PrismaClient } from '@prisma/client';
const router = Router();

router.post('/oauth', async (req, res) => {
    try {
        const clinet = new PrismaClient();
        const { code } = req.body;
        const userInfo = await genUserInfo(code);

        /* if user already register, update file from user information, or create new one.  */
        await clinet.users.upsert({
            where: { userId: userInfo.id as string },
            create: {
                userId: userInfo.id as string,
                userName: userInfo.username as string
            },
            update: {
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

import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { CreateMeetingDao } from '../shared/interface';
import moment from 'moment';
const router = Router();

router.get('/meeting', async (req, res) => {
    const client = new PrismaClient();
    try {
        const users = await client.users.findMany();
        res.json(users);
    } catch (e) {
        res.json({ error: e.message })
    }
});

router.post('/meeting', async (req, res) => {
    const client = new PrismaClient({
        log: ['query', 'info', 'warn'],
    });
    try {
        console.log(req.body);
        const body: CreateMeetingDao = req.body;
        const meetings = await client.meetings.create({
            data: {
                roomId: body.roomId,
                beginAt:  moment(body.startTime).toJSON(),
                finishAt: moment(body.endTime).toJSON(),
                information: body.moreInformation,
                users: {
                    connect: [{
                        userId: '123'
                    }]
                }
            }
        });
        client.users.create({
            data: [{ userId: '1', userName: '100'}]
        })
        console.log('meetings', meetings);

        res.json(meetings);
    } catch (e) {
        console.log(e);

        res.json({ error: e.message })
    }
});

export { router };
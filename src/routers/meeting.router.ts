import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { CreateMeetingDao, UpdateMeetingDao } from '../shared/interface';
import { makeCalendar } from './../shared/gapi';
import moment from 'moment';
const router = Router();

router.get('/meeting', async (req, res) => {
    const client = new PrismaClient();
    try {
        const { day } = req.query;
        
        /* Parse input day 'YYYY-MM-DD', then search meeting info in database. */
        const meetgins = await client.meetings.findMany({
            where: {
                beginAt:  { gte: moment(Date.parse(`${day}T00:00:00.000Z`)).toJSON() },
                finishAt: { lte: moment(Date.parse(`${day}T23:59:59.000Z`)).toJSON() }
            },
            /* (SQL) join user table */
            include: { users: { select: { userId: true, userName: true }} }
        });
        res.json(meetgins);
    } catch (e) {
        console.log(e);
        res.json({ error: e.message })
    }
});

router.post('/meeting', async (req, res) => {
    const client = new PrismaClient();
    try {
        const body: CreateMeetingDao = req.body;
        const members = body.members.map((member: any) => { return { userId: member } });
        /* Create Meetings. */
        const meetings = await client.meetings.create({
            data: {
                roomId: body.roomId,
                title: body.title,
                beginAt:  moment(body.startTime).toJSON(),
                finishAt: moment(body.endTime).toJSON(),
                information: body.moreInformation,

                /* create relation user record */
                users: {
                    connect: members
                }
            }
        });
        res.json(meetings);

        /* link Google calendar */
        makeCalendar(req.query.token as string, {
            summary: '',
            location: body.roomId,
            description: body.moreInformation,
            startTime: moment(body.startTime).toJSON(),
            endTime: moment(body.endTime).toJSON()
        });
    } catch (e) {
        console.log(e);
        res.json({ error: e.message })
    }
});

router.put('/meeting/:id', async (req, res) => {
    const client = new PrismaClient();
    try {
        const body: UpdateMeetingDao = req.body;
        const members = body.members.map((member: any) => { return { userId: member } });
        /* Like create , but here just update */
        const meetings = await client.meetings.update({
            where: { id: parseInt(req.params.id as string) },
            data: {
                roomId: body.roomId,
                beginAt: moment(body.startTime).toJSON(),
                finishAt: moment(body.endTime).toJSON(),
                information: body.moreInformation,
                /* Remove before state, use new info replace. */
                users: {
                    set: members,
                }
            }
        });
        console.log("UPDATE", meetings);
        res.json(meetings);
    } catch (e) {
        console.log(e);
        res.json({ error: e.message })
    }
})

router.delete('/meeting/:id', async (req, res) => {
    const client = new PrismaClient();
    try {
        /* Just delete meeting record. */
        const meetings = await client.meetings.delete({
            where: { id: parseInt(req.params.id as string) },
        });
        console.log("DEL", meetings);
        res.json(meetings);
    } catch (e) {
        console.log(e);
        res.json({ error: e.message })
    }
})

export { router };
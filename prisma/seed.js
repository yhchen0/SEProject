const { PrismaClient } = require("@prisma/client");
const moment = require('moment');
// userId: 103325557309369548271
async function main() {
    const client = new PrismaClient({ log:['query' ]});
    const users = [
        { userId: '000000000000000000001', userName: 'User A' },
        { userId: '000000000000000000002', userName: 'User B' },
        { userId: '000000000000000000003', userName: 'User C' },
        { userId: '000000000000000000004', userName: 'User D' },
        { userId: '000000000000000000005', userName: 'User E' },
        { userId: '000000000000000000006', userName: 'User F' },
        { userId: '000000000000000000007', userName: 'User G' },
        { userId: '000000000000000000008', userName: 'User H' },
        { userId: '000000000000000000009', userName: 'User I' },
        { userId: '000000000000000000010', userName: 'User J' },
        { userId: '000000000000000000011', userName: 'User K' },
        { userId: '000000000000000000012', userName: 'User L' },
    ];
    await Promise.all(users.map(user => client.users.create({ data: user }) ));

    await client.meetings.create({
        data: {
            roomId: 'ROOM1',
            beginAt:  moment(1610019479984).toJSON(),
            finishAt: moment(1610023079984).toJSON(),
            information: "More Information",
            users: {
                connect: [
                    { userId: '000000000000000000001'},
                    { userId: '000000000000000000002'},
                    { userId: '000000000000000000003'},
                    { userId: '000000000000000000004'},
                    { userId: '000000000000000000005'},
                    { userId: '000000000000000000006'},
                    { userId: '000000000000000000007'},
                    { userId: '000000000000000000008'},
                    { userId: '000000000000000000009'},
                    { userId: '000000000000000000010'},
                    { userId: '000000000000000000011'},
                    { userId: '000000000000000000012'}
                ]
            }
        }
    });
}

main();
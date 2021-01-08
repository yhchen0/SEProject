const { baseUrl } = require('./env');
const fetch = require('node-fetch');

async function main() {
    /* GET */
    // await fetch(`${baseUrl}/api/meeting?day=2021-01-07`)

    // /* POST */
    await fetch(`${baseUrl}/api/meeting`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({
            "title": "Meeting 1",
            "startTime": 1610019479984,
            "endTime": 1610023079984,
            "moreInformation": "NyaHelloCC",
            "roomId": 'ROOM1',
            "members": ["000000000000000000001"]
        })
    });

    // /* PUT */
    // await fetch(`${baseUrl}/api/meeting/1`, {
    //     method: 'put',
    //     headers: { 'Content-type': 'application/json' },
    //     body: JSON.stringify({
    //         "title": "Meeting 1",
    //         "startTime": 1610019479984,
    //         "endTime": 1610023079984,
    //         "moreInformation": "ABSFBFDB",
    //         "roomId": 'ROOM1',
    //         "members": ["000000000000000000004", "000000000000000000005"]
    //     })
    // });

    // /* UPDATE */
    // await fetch(`${baseUrl}/api/meeting/1`, {
    //     method: 'delete',
    // });


    process.exit();
}
main();
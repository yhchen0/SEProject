const { baseUrl } = require('./env');
const fetch = require('node-fetch');

/* GET */
fetch(`${baseUrl}/api/meeting?day=YYYY-MM-DD`)

/* POST */
fetch(`${baseUrl}/api/meeting`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify({
        "title": "Meeting 1",
        "startTime": 1610019479984,
        "endTime": 1610023079984,
        "moreInformation": "NyaHello",
        "roomId": 'ROOM1',
        "members": ["103325557309369548271"]
    })
});

/* PUT */
fetch(`${baseUrl}/api/meeting/2`, {
    method: 'put',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
        "title": "Meeting 1",
        "startTime": 1610019479984,
        "endTime": 1610023079984,
        "moreInformation": "ABSFBFDB",
        "roomId": 'ROOM1',
        "members": ["000000000000000000004", "000000000000000000005"]
    })
});

/* UPDATE */
fetch(`${baseUrl}/api/meeting/2`, {
    method: 'delete',
});

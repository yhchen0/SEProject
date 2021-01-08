##### GET https://localhost:3000/api/meeting?day=YYYY-MM-DD 查詢某日的會議安排
request query:
>?day=2021-01-07

response:
```json
{
    "id":1,
    "roomId":"ROOM1",
    "beginAt":"2021-01-07T11:37:59.984Z",
    "finishAt":"2021-01-07T12:37:59.984Z",
    "information":"More Information",
    "users":[
        {"userId":"000000000000000000001","userName":"User A"},
        {"userId":"000000000000000000002","userName":"User B"},
        {"userId":"000000000000000000004","userName":"User D"},
        {"userId":"000000000000000000003","userName":"User C"},
        {"userId":"000000000000000000007","userName":"User G"},
        {"userId":"000000000000000000006","userName":"User F"},
        {"userId":"000000000000000000005","userName":"User E"},
        {"userId":"000000000000000000009","userName":"User I"},
        {"userId":"000000000000000000010","userName":"User J"},
        {"userId":"000000000000000000011","userName":"User K"},
        {"userId":"000000000000000000008","userName":"User H"},
        {"userId":"000000000000000000012","userName":"User L"}
    ]
}
```
* * *
##### POST https://localhost:3000/api/meeting 建立會議
request body:
```json
{
    "title": "Meeting 1",
    "startTime": 1610019479984,
    "endTime": 1610023079984,
    "moreInformation": "NyaHelloX",
    "roomId": "ROOM1",
    "members": ["103325557309369548271"]
    /* roomId 必須是 'ROOM1' ~ 'ROOM6' (string) */
}
```
response
```json
{
    beginAt: "2021-01-08T07:57:17.357Z"
    finishAt: "2021-01-08T08:57:17.357Z"
    id: 2
    information: "NyaHelloX"
    roomId: "ROOM1"    
}
```

* * *

##### GET https://localhost:3000/api/user 取得用戶
response:
```json
[
    {
        "userId": "000000000000000000001",
        "userName": "User A"
    },
    {
        "userId": "000000000000000000002",
        "userName": "User B"
    },
    {
        "userId": "000000000000000000004",
        "userName": "User D"
    },
    {
        "userId": "000000000000000000003",
        "userName": "User C"
    },
    {
        "userId": "000000000000000000007",
        "userName": "User G"
    },
    {
        "userId": "000000000000000000006",
        "userName": "User F"
    },
    {
        "userId": "000000000000000000005",
        "userName": "User E"
    },
    {
        "userId": "000000000000000000009",
        "userName": "User I"
    },
    {
        "userId": "000000000000000000010",
        "userName": "User J"
    },
    {
        "userId": "000000000000000000011",
        "userName": "User K"
    },
    {
        "userId": "000000000000000000008",
        "userName": "User H"
    },
    {
        "userId": "000000000000000000012",
        "userName": "User L"
    }
]
```

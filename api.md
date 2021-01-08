##### GOOGLE 授權
> 先到授權網頁
> https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.settings.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.addons.execute%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&redirect_uri=https%3A%2F%2Flocalhost%3A3000&client_id=132290471555-0der38r1n62bpss4rnb7k5msmuael352.apps.googleusercontent.com

之後會跳轉到
> https://localhost:3000/?code=4%2F0AY0e-g6FCjyi3-_a6ZkaBShGHycuA-FuzVWbq7Mzg1ZTwHgY9ji4MA8bOj5d0UXD1-WA7w&scope=profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.addons.execute+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.settings.readonly

可以使用
``` js
const url = new URL(location.href);
const code = url.searchParams.get('code')
```
拿來到用戶的 code, 然後使用

POST https://localhost:3000/api/oauth

request body:
```json
{
    "code" : "<剛剛拿到的code>"
}
```

response:
```json
{
    "id":"103325557309369548271",
    "username":"YanHau Chen",
    "token":"ya29.a0AfH6SMBfI6nZuwEiJLHTcSPF-QcL1XfddPUFJ483UJd0EHBBZ0AmC--ziDXu6yIBDn1VmzDkWhrqb4mNqNIzh9PqmCPlPt2oBNbyZRkX1ZjYOt9S7oHdlq-O9OjWZl2j164ccQPY9WInU8jR938hDgGJeFKB9C0yFWKDeNtWturE",
    "expireAt":1610100740550
}
```

* * *
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
##### PUT https://localhost:3000/api/meeting/:meetingId 更新會議
request url:
> https://localhost:3000/api/meeting/1
> 
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
  "id": 1,
  "roomId": "ROOM1",
  "beginAt": "2021-01-07T11:37:59.984Z",
  "finishAt": "2021-01-07T12:37:59.984Z",
  "information": "ABSFBFDB"
}
```

* * *
##### DELETE https://localhost:3000/api/meeting/:id 刪除會議
response:

```json
{
  "id": 1,
  "roomId": "ROOM1",
  "beginAt": "2021-01-07T11:37:59.984Z",
  "finishAt": "2021-01-07T12:37:59.984Z",
  "information": "ABSFBFDB"
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

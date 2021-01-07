CREATE TYPE Room as ENUM('ROOM1','ROOM2','ROOM3','ROOM4','ROOM5','ROOM6');

CREATE TABLE Users(
    id               SERIAL NOT NULL PRIMARY KEY,
    user_name       VARCHAR NOT NULL,
    user_token      VARCHAR NOT NULL,
    created_at    TIMESTAMP NOT NULL DEFAULT(NOW()),
    updated_at    TIMESTAMP NOT NULL DEFAULT(NOW())
);

CREATE TABLE Meeting(
    id           SERIAL NOT NULL PRIMARY KEY,
    room_id        Room NOT NULL,
    begin_at  TIMESTAMP NOT NULL DEFAULT(NOW()),
    finish_at TIMESTAMP NOT NULL DEFAULT(NOW())
);

CREATE TABLE Attendees(
    id         SERIAL NOT NULL,
    meeting_id BIGINT NOT NULL,
    user_id    BIGINT NOT NULL,
    FOREIGN KEY(user_id)    REFERENCES Users(id),
    FOREIGN KEY(meeting_id) REFERENCES Meeting(id)
);
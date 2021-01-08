CREATE TYPE "ROOM" as ENUM('ROOM1','ROOM2','ROOM3','ROOM4','ROOM5','ROOM6');

CREATE TABLE "Users"(
  "user_id"         VARCHAR NOT NULL PRIMARY KEY,
  "user_name"       VARCHAR NOT NULL,
  "created_at"    TIMESTAMP NOT NULL DEFAULT(CURRENT_TIMESTAMP),
  "updated_at"    TIMESTAMP NOT NULL DEFAULT(CURRENT_TIMESTAMP)
);

CREATE TABLE "Meetings"(
  "id"             SERIAL NOT NULL PRIMARY KEY,
  "title"         VARCHAR,
  "room_id"          ROOM NOT NULL,
  "begin_at"    TIMESTAMP NOT NULL,
  "finish_at"   TIMESTAMP NOT NULL,
  "information"   VARCHAR
);

/* Relation */
CREATE TABLE "_MeetingsToUsers"(
  "A"             BIGINT NOT NULL,
  "B"            VARCHAR NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT(CURRENT_TIMESTAMP)
);
CREATE UNIQUE INDEX "_MeetingsToUsers_Pair"    ON "_MeetingsToUsers"("A" ,"B");
CREATE        INDEX "_MeetingsToUsers_Meeting" ON "_MeetingsToUsers"("A");

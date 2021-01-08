/* share interface */

type RoomId = 'ROOM1' | 'ROOM2' | 'ROOM3' | 'ROOM4' | 'ROOM5' | 'ROOM6';

export interface CreateMeetingDao {
    title: string;
    startTime: Date;/* Uinx Timestamp */
    endTime: Date;  /* Uinx Timestamp */
    moreInformation: string;
    roomId: RoomId;
    members: string [];
}

export interface UpdateMeetingDao {
    meetingId: number,
    title: string;
    startTime: Date;/* Uinx Timestamp */
    endTime: Date;  /* Uinx Timestamp */
    moreInformation: string;
    roomId: RoomId;
    members: string[];
}
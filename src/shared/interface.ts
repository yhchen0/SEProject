type RoomId = 'ROOM1' | 'ROOM2' | 'ROOM3' | 'ROOM4' | 'ROOM5' | 'ROOM6';

export interface CreateMeetingDao {
    title: string;
    startTime: Date;/* Uinx Timestamp */
    endTime: Date;  /* Uinx Timestamp */
    moreInformation: string;
    roomId: RoomId;
    members: number[] | string [];
}
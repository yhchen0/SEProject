import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;
const CLIENT_ID = '132290471555-0der38r1n62bpss4rnb7k5msmuael352.apps.googleusercontent.com';
const CLIENT_SECRET = 'wlgJFscW_Wtly6jxPxDN8VCE';
const REDIRECT_URL = 'http://localhost:3000';


const oauthClient = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
const SCOPE = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
    'https://www.googleapis.com/auth/calendar.readonly',
    'https://www.googleapis.com/auth/calendar.settings.readonly',
    'https://www.googleapis.com/auth/userinfo.profile'
];


/* Gen google oauth client, set access scope */
const oauthUrl = oauthClient.generateAuthUrl({
    response_type: 'code',
    scope: SCOPE,
    redirect_uri: REDIRECT_URL
});

/* when user get google oauth code, exchange to access token */
const genUserInfo = async (code: string) => {
    const { tokens } = await oauthClient.getToken(code);
    oauthClient.setCredentials({ access_token: tokens.access_token });
    const { data: userinfo} = await google.oauth2({
        auth: oauthClient,
        version: 'v2'
    }).userinfo.get();
    
    return {
        id: userinfo.id,
        username: userinfo.name,
        token: tokens.access_token,
        expireAt: tokens.expiry_date,
    };
}

interface CalendarEvent {
    summary: string;
    location: string;
    description: string;
    startTime: string;
    endTime: string;
};

/* create Calendar event */
const makeCalendar = async (token: string, calendarEvent: CalendarEvent) => {
    oauthClient.setCredentials({ access_token: token });
    const event = {
        'summary': `${calendarEvent.summary}`,
        'location': `NTUST ${calendarEvent.location}`,
        'description': `${calendarEvent.description}`,
        'start': {
            'dateTime': `${calendarEvent.startTime}`,
            'timeZone': 'utc'
        },
        end: {
            'dateTime': `${calendarEvent.endTime}`,
            'timeZone': 'utc'
        },
    };
    const calendar = google.calendar({ version: 'v3', auth: oauthClient });
    
    return calendar.events.insert({
        auth: oauthClient,
        calendarId: 'primary',
        requestBody: event,
    });
}

export { oauthClient, genUserInfo, oauthUrl, makeCalendar };
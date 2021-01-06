import { Request, Response } from 'express';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;
const CLIENT_ID = '132290471555-0der38r1n62bpss4rnb7k5msmuael352.apps.googleusercontent.com';
const CLIENT_SECRET = 'wlgJFscW_Wtly6jxPxDN8VCE';
const REDIRECT_URL = 'https://localhost:3000/oauth';
const oauthClient = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
const SCOPE = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.readonly',
    // 'https://www.googleapis.com/auth/calendar.events',
    // 'https://www.googleapis.com/auth/calendar.events.readonly',
    'https://www.googleapis.com/auth/calendar.settings.readonly',
    'https://www.googleapis.com/auth/calendar.addons.execute',
];

export const oauthUrl = oauthClient.generateAuthUrl({
    scope: SCOPE
});

export const genGoogleClient = async (code: string) => {
    const { tokens } = await oauthClient.getToken(code);
    oauthClient.setCredentials({
        access_token: tokens.access_token,
        token_type: tokens.token_type,
        expiry_date: tokens.expiry_date
    });
    const calendar = google.calendar({version: 'v3', auth: oauthClient});
    console.log( calendar.calendarList.get() );
}
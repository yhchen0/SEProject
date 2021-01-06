import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;
const CLIENT_ID = '132290471555-0der38r1n62bpss4rnb7k5msmuael352.apps.googleusercontent.com';
const CLIENT_SECRET = 'wlgJFscW_Wtly6jxPxDN8VCE';
const REDIRECT_URL = 'https://localhost:3000';
const oauthClient = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
const SCOPE = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.readonly',
    'https://www.googleapis.com/auth/calendar.settings.readonly',
    'https://www.googleapis.com/auth/calendar.addons.execute',
];

export const oauthUrl = oauthClient.generateAuthUrl({
    response_type: 'code',
    scope: SCOPE,
    redirect_uri: REDIRECT_URL
});

export const genGoogleClient = async (code: string) => {
    const { tokens } = await oauthClient.getToken(code);
    return {
        token: tokens.access_token,
        expireAt: tokens.expiry_date,
    };
}
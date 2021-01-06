import express from 'express';
import { oauthUrl, genGoogleClient } from './shared/gapi';
const application = express();
console.log( oauthUrl );

application.get('/oauth', async (req, res) => {
    const code = req.query.code as string;
    console.log(await genGoogleClient(code));
})

export { application };
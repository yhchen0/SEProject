import express from 'express';

/* pre middleware */
import bodyParser from 'body-parser';
import compression from 'compression';
import { oauthUrl } from './shared/gapi';

/* import Router */
import {
    gapiRouter,
    meetingRouter,
    userRouter
} from './routers';

const application = express();
application.use(bodyParser.json())
application.use(compression())

application.use('/api', gapiRouter   );
application.use('/api', meetingRouter);
application.use('/api', userRouter   );
application.get('*', async (req,res) => { res.end('default router'); });
console.log( oauthUrl );
export { application };
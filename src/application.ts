import express from 'express';

/* pre middleware */
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import { oauthUrl } from './shared/gapi';
const application = express();
application.use(helmet());
application.use(cors());
application.use(bodyParser.json());
application.use(compression());

application.disable('x-powered-by');
/* Register Router */
import {
    gapiRouter,
    meetingRouter,
    userRouter
} from './routers/index';
application.use('/api', gapiRouter   );
application.use('/api', meetingRouter);
application.use('/api', userRouter   );

/* Default Router */
application.get('*', async (req,res) => { res.end('default router'); });
console.log( oauthUrl );

export { application };
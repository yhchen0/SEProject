import express from 'express';

/* pre middleware */
import bodyParser from 'body-parser';
import compression from 'compression';
import { oauthUrl } from './shared/gapi';

/* import Router */
import {
    gapiRouter
} from './routers';

const application = express();
application.use(bodyParser.json())
application.use(compression())

application.use('/api', gapiRouter);
/* Default Router. */
application.get('*', async (req,res) => {
    res.end('');
});

console.log( oauthUrl );
export { application };